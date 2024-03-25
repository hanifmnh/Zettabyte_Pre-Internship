import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MentorService } from '../shared/service/mentor.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-mentor-form',
  templateUrl: './mentor-form.component.html',
  styleUrl: './mentor-form.component.scss',
})
export class MentorFormComponent {
  mentorForm: FormGroup;
  mentorId: string = '';
  isEditMode: boolean = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private mentorService: MentorService,
    private router: Router,
    private translate: TranslateService,
    private dialogRef: MatDialogRef<MentorFormComponent>
  ) {}

  ngOnInit(): void {
    this.initForm();

    if (this.data) {
      this.mentorForm.patchValue(this.data.mentor);
      this.isEditMode = true;
    }
  }

  initForm(): void {
    this.mentorForm = this.fb.group({
      _id: [''],
      email: ['', Validators.required],
      civility: ['', Validators.required],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      company: this.fb.group({
        name: ['', Validators.required],
        user_type: ['', Validators.required],
      }),
      user_status: ['active', Validators.required],
      count_document: ['', Validators.required],
    });
  }

  onSubmit(): void {
    const formData = this.mentorForm.value;
    let successMessage = '';
    let confirmButtonText = '';

    if (this.mentorForm.invalid) {
      Swal.fire({
        title: 'Error!',
        text: 'Please fill all required fields with valid values!',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
      return;
    }

    if (!this.data) {
      successMessage = 'Successfully added new data!';
      confirmButtonText = 'Yes, add it!';
    } else {
      successMessage = 'Your data has been edited!';
      confirmButtonText = 'Yes, edit it!';
    }

    Swal.fire({
      title: 'Are you sure?',
      text: 'You are about to submit this form!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: confirmButtonText,
      cancelButtonText: 'No, keep it',
    }).then((result) => {
      if (result.isConfirmed) {
        if (!this.data) {
          formData._id = '999';
          this.mentorService.addNewMentor(formData);
        } else {
          this.mentorService.updateMentor(formData);
        }
        this.router.navigate(['/home']);
        this.dialogRef.close();
        Swal.fire('Submitted!', successMessage, 'success');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Your form is safe :)', 'error');
      }
    });
  }

  switchLang(event: Event) {
    const target = event.target as HTMLSelectElement;
    if (target) {
      const lang = target.value;
      this.translate.use(lang);
      console.log(lang);
    }
  }
}
