import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GamesService } from '../shared/service/games.service';
import { GamesGenreType } from '../shared/interface/games.interface';
import Swal from 'sweetalert2';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-games-form',
  templateUrl: './games-form.component.html',
  styleUrl: './games-form.component.scss',
})
export class GamesFormComponent implements OnInit {
  gamesForm!: FormGroup;
  gamesId: string = '';
  isEditMode: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private gamesService: GamesService
  ) {}

  ngOnInit() {
    this.initForm();

    this.gamesId = this.route.snapshot.queryParams['id'];
    if (this.gamesId) {
      const gamesData = this.gamesService.getGamesById(this.gamesId);
      if (gamesData) {
        this.gamesForm.patchValue(gamesData);
        this.setArrayFormFields(gamesData.genres);
        this.isEditMode = true;
      }
    }

    this.handleFormChanges();
  }

  initForm() {
    this.gamesForm = this.fb.group({
      id: [this.gamesId],
      name: ['', Validators.required],
      publisher: ['', Validators.required],
      description: ['', Validators.required],
      imgUrl: ['', Validators.required],
      price: ['', Validators.required],
      genres: this.fb.array([]),
    });
  }

  handleFormChanges() {
    this.gamesForm.get('price')?.valueChanges.subscribe(() => {
      const priceControl = this.gamesForm.get('price');

      if (priceControl?.value && /\D/.test(priceControl.value)) {
        priceControl.setErrors({ pattern: true }, { emitEvent: false });
      }
    });
  }

  setArrayFormFields(genres: GamesGenreType[]) {
    genres.forEach((genre) => this.addGenre(genre));
  }

  get genres(): FormArray {
    return this.gamesForm.get('genres') as FormArray;
  }

  addGenre(genreData?: GamesGenreType) {
    this.genres.push(this.createGenre(genreData));
  }

  removeGenre(index: number) {
    this.genres.removeAt(index);
  }

  createGenre(genreData?: GamesGenreType) {
    return this.fb.group({
      genre: [genreData ? genreData.genre : ''],
    });
  }

  onSubmit() {
    this.gamesForm.markAllAsTouched();
    if (this.gamesForm.valid) {
      const formData = { ...this.gamesForm.value };
      if (!this.gamesId) {
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
            this.gamesId = uuidv4();
            formData.id = this.gamesId;
            this.gamesService.addGames(formData);
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
            formData.id = this.gamesId;
            this.gamesService.updateGames(formData);
            this.showSuccessAlert(formData.fullname);
            this.router.navigate(['/games/games-detail', this.gamesId]);
          }
        });
      }
    } else {
      this.showErrorAlert();
    }
  }

  showSuccessAlert(gamesName: string): void {
    Swal.fire({
      title: 'Success!',
      text: `${gamesName} has been saved successfully.`,
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
      this.router.navigate(['/games/games-detail', this.gamesId]);
    } else {
      this.router.navigate(['/home']);
    }
  }
}
