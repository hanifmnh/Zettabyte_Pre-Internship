import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../shared/service/patient.service';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';
import Swal from 'sweetalert2';
import { PatientComplaintsType } from '../shared/interface/patient.interface';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrl: './patient-form.component.scss',
})
export class PatientFormComponent implements OnInit {
  patientForm!: FormGroup;
  patientId: string = '';
  isEditMode: boolean = false;
  showRemoveComplaintButton: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private patientService: PatientService
  ) {}

  ngOnInit() {
    this.initForm();

    this.patientId = this.route.snapshot.queryParams['id'];
    if (this.patientId) {
      const patientData = this.patientService.getPatientById(this.patientId);
      if (patientData) {
        this.patientForm.patchValue(patientData);
        this.setArrayFormFields(patientData.complaints);
        this.isEditMode = true;
      }
    } else {
      this.addComplaint();
    }

    this.handleFormChanges();
  }

  initForm() {
    this.patientForm = this.fb.group({
      id: [this.patientId],
      name: ['', Validators.required],
      gender: ['', Validators.required],
      age: ['', Validators.required],
      address: ['', Validators.required],
      contact: ['', Validators.required],
      imageUrl: ['', [Validators.required]],
      complaints: this.fb.array([]),
    });
  }

  handleFormChanges() {
    this.patientForm.get('name')?.valueChanges.subscribe((name) => {
      const nameControl = this.patientForm.get('name');
      if (/[^a-zA-Z\s]/.test(name)) {
        nameControl?.patchValue(name.replace(/[^a-zA-Z\s]/g, ''), {
          emitEvent: false,
        });
      }
    });

    this.patientForm.get('age')?.valueChanges.subscribe((age) => {
      const ageControl = this.patientForm.get('age');

      if (/\D/.test(age)) {
        ageControl?.patchValue(age.replace(/\D/g, ''), { emitEvent: false });
      }

      if (ageControl?.value && !/^\d{1,2}$/.test(ageControl.value)) {
        ageControl.setErrors({ pattern: true }, { emitEvent: false });
      }
    });

    this.patientForm.get('contact')?.valueChanges.subscribe((contact) => {
      const contactControl = this.patientForm.get('contact');
      if (/\D/.test(contact)) {
        contactControl?.patchValue(contact.replace(/\D/g, ''), {
          emitEvent: false,
        });
      }
    });
  }

  setArrayFormFields(complaints: PatientComplaintsType[]) {
    if (complaints.length === 0) {
      this.addComplaint();
    } else {
      complaints.forEach((complaint) => this.addComplaint(complaint));
    }
  }

  get complaints(): FormArray {
    return this.patientForm.get('complaints') as FormArray;
  }

  addComplaint(complaintData?: PatientComplaintsType) {
    this.complaints.push(this.createComplaint(complaintData));
    this.removeComplaintButtonVisibility();
  }

  removeComplaint(index: number) {
    this.complaints.removeAt(index);
    this.removeComplaintButtonVisibility();
  }

  createComplaint(complaintData?: PatientComplaintsType) {
    return this.fb.group({
      complaint: [
        complaintData ? complaintData.complaint : '',
        Validators.required,
      ],
    });
  }

  removeComplaintButtonVisibility() {
    const complaintControls = this.complaints.controls;
    if (complaintControls.length === 1) {
      this.showRemoveComplaintButton = false;
    } else {
      this.showRemoveComplaintButton = true;
    }
  }

  onSubmit() {
    this.patientForm.markAllAsTouched();
    if (this.patientForm.valid) {
      const formData = { ...this.patientForm.value };
      if (!this.patientId) {
        Swal.fire({
          title: 'Are you sure?',
          text: 'You are about to submit this form!',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes',
        }).then((result) => {
          if (result.isConfirmed) {
            this.patientId = uuidv4();
            formData.id = this.patientId;
            this.patientService.addPatient(formData);
            this.showSuccessAlert(formData.name);
            this.router.navigate(['/home']);
          }
        });
      } else {
        Swal.fire({
          title: 'Are you sure?',
          text: 'You are about to save this form!',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes',
        }).then((result) => {
          if (result.isConfirmed) {
            formData.id = this.patientId;
            this.patientService.updatePatient(formData);
            this.showSuccessAlert(formData.fullname);
            this.router.navigate(['/patient/patient-detail', this.patientId]);
          }
        });
      }
    } else {
      this.showErrorAlert();
    }
  }

  showSuccessAlert(patientName: string): void {
    Swal.fire({
      title: 'Success!',
      text: `${patientName} has been saved successfully.`,
      icon: 'success',
      confirmButtonText: 'OK',
    });
  }

  showErrorAlert(): void {
    Swal.fire({
      title: 'Oops!',
      text: 'Form is not valid.',
      icon: 'error',
      confirmButtonText: 'OK',
    });
  }

  cancelForm(): void {
    if (this.isEditMode) {
      this.router.navigate(['/patient/patient-detail', this.patientId]);
    } else {
      this.router.navigate(['/home']);
    }
  }
}
