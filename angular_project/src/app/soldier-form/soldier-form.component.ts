import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SoldierService } from '../shared/service/soldier.service';
import { v4 as uuidv4 } from 'uuid';
import {
  SoldierAddressType,
  SoldierEmergencyContactType,
} from '../shared/interface/soldier.interface';

@Component({
  selector: 'app-soldier-form',
  templateUrl: './soldier-form.component.html',
  styleUrl: './soldier-form.component.scss',
})
export class SoldierFormComponent implements OnInit {
  soldierForm!: FormGroup;
  soldierId: string = '';
  isEditMode: boolean = false;
  showRemoveAddressButton: boolean = false;
  showRemoveEmergencyContactButton: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private soldierService: SoldierService
  ) {}

  ngOnInit() {
    this.initForm();
    this.soldierId = this.route.snapshot.queryParams['id'];
    if (this.soldierId) {
      const soldierData = this.soldierService.getSoldierById(this.soldierId);
      if (soldierData) {
        this.soldierForm.patchValue(soldierData);
        this.setArrayFormFields(
          soldierData.addresses,
          soldierData.emergencyContact
        );
        this.isEditMode = true;
      }
    } else {
      this.addAddress();
      this.addEmergencyContact();
    }
  }

  initForm() {
    this.soldierForm = this.fb.group({
      id: [this.soldierId],
      name: ['', Validators.required],
      age: [
        null,
        [
          Validators.required,
          Validators.min(15),
          Validators.pattern(/^[0-9]*$/),
        ],
      ],
      gender: ['', Validators.required],
      maritalStatus: ['', Validators.required],
      rank: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      imageUrl: ['', [Validators.required]],
      addresses: this.fb.array([]),
      emergencyContact: this.fb.array([]),
    });
  }

  setArrayFormFields(
    addresses: SoldierAddressType[],
    contacts: SoldierEmergencyContactType[]
  ) {
    if (addresses.length === 0) {
      this.addAddress();
    } else {
      addresses.forEach((address) => this.addAddress(address));
    }

    if (contacts.length === 0) {
      this.addEmergencyContact();
    } else {
      contacts.forEach((contact) => this.addEmergencyContact(contact));
    }
  }

  get addresses(): FormArray {
    return this.soldierForm.get('addresses') as FormArray;
  }

  get emergencyContact() {
    return this.soldierForm.get('emergencyContact') as FormArray;
  }

  addAddress(addressData?: SoldierAddressType) {
    this.addresses.push(this.createAddress(addressData));
    this.removeAddressButtonVisibility();
  }

  addEmergencyContact(contactData?: SoldierEmergencyContactType) {
    this.emergencyContact.push(this.createEmergencyContact(contactData));
    this.removeEmergencyContactButtonVisibility();
  }

  removeAddress(index: number) {
    this.addresses.removeAt(index);
    this.removeAddressButtonVisibility();
  }

  removeEmergencyContact(index: number) {
    this.emergencyContact.removeAt(index);
    this.removeEmergencyContactButtonVisibility();
  }

  removeAddressButtonVisibility() {
    const addressControls = this.addresses.controls;
    if (addressControls.length === 1) {
      this.showRemoveAddressButton = false;
    } else {
      this.showRemoveAddressButton = true;
    }
  }

  removeEmergencyContactButtonVisibility() {
    const emergencyContactControls = this.emergencyContact.controls;
    if (emergencyContactControls.length === 1) {
      this.showRemoveEmergencyContactButton = false;
    } else {
      this.showRemoveEmergencyContactButton = true;
    }
  }

  createAddress(addressData?: SoldierAddressType) {
    return this.fb.group({
      address: [addressData ? addressData.address : '', Validators.required],
      zipcode: [
        addressData ? addressData.zipcode : null,
        [Validators.required, Validators.pattern(/^[0-9]*$/)],
      ],
      city: [addressData ? addressData.city : '', Validators.required],
      country: [addressData ? addressData.country : '', Validators.required],
    });
  }

  createEmergencyContact(contact?: SoldierEmergencyContactType) {
    return this.fb.group({
      name: [contact ? contact.name : '', Validators.required],
      phoneNumber: [contact ? contact.phoneNumber : '', Validators.required],
    });
  }

  onSubmit() {
    if (this.soldierForm.valid) {
      const formData = { ...this.soldierForm.value };
      if (!this.soldierId) {
        this.soldierId = uuidv4();
        formData.id = this.soldierId;
        this.soldierService.addSoldier(formData);
        this.router.navigate(['/home']);
      } else {
        formData.id = this.soldierId;
        this.soldierService.updateSoldier(formData);
        this.router.navigate(['/soldier/soldier-detail', this.soldierId]);
      }
    } else {
      alert('Form is not valid');
    }
  }

  cancelForm(): void {
    if (this.isEditMode) {
      this.router.navigate(['/soldier/soldier-detail', this.soldierId]);
    } else {
      this.router.navigate(['/home']);
    }
  }
}
