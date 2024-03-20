import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../shared/service/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss',
})
export class UserFormComponent implements OnInit {
  userForm!: FormGroup;
  userId: number = 0;
  isEditMode: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.initForm();

    this.userId = Number(this.route.snapshot.queryParams['id']);
    if (this.userId) {
      this.userService.selectedUser$.subscribe((userData) => {
        if (userData) {
          this.userForm.patchValue(userData);
          this.isEditMode = true;
        }
      });
      this.userService.getUserById(this.userId);
    }
  }

  initForm() {
    this.userForm = this.fb.group({
      id: [this.userId],
      name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: this.fb.group({
        street: ['', Validators.required],
        suite: ['', Validators.required],
        city: ['', Validators.required],
        zipcode: ['', Validators.required],
        geo: this.fb.group({
          lat: ['', Validators.required],
          lng: ['', Validators.required],
        }),
      }),
      phone: ['', Validators.required],
      website: ['', Validators.required],
      company: this.fb.group({
        name: ['', Validators.required],
        catchPhrase: ['', Validators.required],
        bs: ['', Validators.required],
      }),
    });
  }

  onSubmit() {
    this.userForm.markAllAsTouched();
    if (this.userForm.valid) {
      const formData = this.userForm.value;
      if (!this.userId) {
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
            this.userId = Math.floor(Math.random() * 1000);
            formData.id = this.userId;
            this.userService.addUser(formData);
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
            formData.id = this.userId;
            this.userService.updateUser(formData);
            this.showSuccessAlert(formData.name);
            this.router.navigate(['/user/user-detail', this.userId]);
          }
        });
      }
    } else {
      this.showErrorAlert();
    }
  }

  showSuccessAlert(userName: string): void {
    Swal.fire({
      title: 'Success!',
      text: `${userName} has been saved successfully.`,
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
      this.router.navigate(['/user/user-detail', this.userId]);
    } else {
      this.router.navigate(['/home']);
    }
  }
}
