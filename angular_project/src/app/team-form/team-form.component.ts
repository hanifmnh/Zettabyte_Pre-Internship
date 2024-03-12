import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamService } from '../shared/service/team.service';
import { v4 as uuidv4 } from 'uuid';
import { TeamAchievementType } from '../shared/interface/team.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-team-form',
  templateUrl: './team-form.component.html',
  styleUrl: './team-form.component.scss',
})
export class TeamFormComponent implements OnInit {
  teamForm!: FormGroup;
  teamId: string = '';
  isEditMode: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private teamService: TeamService
  ) {}

  ngOnInit() {
    this.initForm();

    this.teamId = this.route.snapshot.queryParams['id'];
    if (this.teamId) {
      const teamData = this.teamService.getTeamById(this.teamId);
      if (teamData) {
        this.teamForm.patchValue(teamData);
        this.setArrayFormFields(teamData.achievements);
        this.isEditMode = true;
      }
    }

    this.handleFormChanges();
  }

  initForm() {
    this.teamForm = this.fb.group({
      id: [this.teamId],
      fullname: ['', Validators.required],
      nickname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contact: ['', Validators.required],
      imageUrl: ['', [Validators.required]],
      achievements: this.fb.array([]),
    });
  }

  handleFormChanges() {
    this.teamForm.get('fullname')?.valueChanges.subscribe((value) => {
      if (/[^a-zA-Z\s]/.test(value)) {
        this.teamForm
          .get('fullname')
          ?.patchValue(value.replace(/[^a-zA-Z\s]/g, ''), { emitEvent: false });
      }
    });

    this.teamForm.get('nickname')?.valueChanges.subscribe((value) => {
      if (/[^a-zA-Z\s]/.test(value)) {
        this.teamForm
          .get('nickname')
          ?.patchValue(value.replace(/[^a-zA-Z\s]/g, ''), { emitEvent: false });
      }
    });

    this.teamForm.get('contact')?.valueChanges.subscribe((value) => {
      if (/\D/.test(value)) {
        this.teamForm
          .get('contact')
          ?.patchValue(value.replace(/\D/g, ''), { emitEvent: false });
      }
    });
  }

  setArrayFormFields(achievements: TeamAchievementType[]) {
    achievements.forEach((achievement) => this.addAchievement(achievement));
  }

  get achievements(): FormArray {
    return this.teamForm.get('achievements') as FormArray;
  }

  addAchievement(achievementData?: TeamAchievementType) {
    this.achievements.push(this.createAchievement(achievementData));
  }

  removeAchievement(index: number) {
    this.achievements.removeAt(index);
  }

  createAchievement(achievementData?: TeamAchievementType) {
    return this.fb.group({
      achievement: [achievementData ? achievementData.achievement : ''],
    });
  }

  onSubmit() {
    if (this.teamForm.valid) {
      const formData = { ...this.teamForm.value };
      if (!this.teamId) {
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
            this.teamId = uuidv4();
            formData.id = this.teamId;
            this.teamService.addTeam(formData);
            this.showSuccessAlert(formData.fullname);
            this.router.navigate(['/home']);
          }
        });
      } else {
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
            formData.id = this.teamId;
            this.teamService.updateTeam(formData);
            this.showSuccessAlert(formData.fullname);
            this.router.navigate(['/team/team-detail', this.teamId]);
          }
        });
      }
    } else {
      this.showErrorAlert();
    }
  }

  cancelForm(): void {
    if (this.isEditMode) {
      this.router.navigate(['/team/team-detail', this.teamId]);
    } else {
      this.router.navigate(['/home']);
    }
  }

  showSuccessAlert(teamName: string): void {
    Swal.fire({
      title: 'Success!',
      text: `${teamName} has been saved successfully.`,
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
}
