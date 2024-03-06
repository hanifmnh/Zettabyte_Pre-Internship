import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SoldierService } from '../shared/service/soldier.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-soldier-form',
  templateUrl: './soldier-form.component.html',
  styleUrl: './soldier-form.component.scss',
})
export class SoldierFormComponent implements OnInit {
  soldierForm!: FormGroup;
  soldierId: string = '';
  isEditMode: boolean = false;

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
        this.soldierForm.setValue(soldierData);
        this.isEditMode = true;
      }
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
      addresses: this.fb.group({
        address: ['', [Validators.required]],
        zipcode: [null, [Validators.required, Validators.pattern(/^[0-9]*$/)]],
        city: ['', [Validators.required]],
        country: ['', [Validators.required]],
      }),
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
