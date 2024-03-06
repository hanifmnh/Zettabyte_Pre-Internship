import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MemberService } from '../shared/service/member.service';
import { Router } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrl: './member-form.component.scss',
})
export class MemberFormComponent implements OnInit {
  memberForm!: FormGroup;
  memberId: string = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private memberService: MemberService
  ) {}

  ngOnInit(): void {
    this.memberId = uuidv4();
    this.memberForm = this.fb.group({
      id: [this.memberId],
      fullname: ['', Validators.required],
      nickname: ['', Validators.required],
      age: [
        null,
        [
          Validators.required,
          Validators.min(15),
          Validators.pattern(/^[0-9]*$/),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      instagram: [''],
      role: ['', Validators.required],
      imageUrl: [''],
      addresses: this.fb.group({
        address: ['', [Validators.required]],
        zipcode: [null, [Validators.required, Validators.pattern(/^[0-9]*$/)]],
        city: ['', [Validators.required]],
        country: ['', [Validators.required]],
      }),
    });
  }

  onSubmit(): void {
    if (this.memberForm.valid) {
      this.memberService.addMember({ ...this.memberForm.value });
      this.router.navigate(['/home']);
    } else {
      alert('Form is not valid');
    }
  }

  cancelForm(): void {
    this.router.navigate(['/home']);
  }
}
