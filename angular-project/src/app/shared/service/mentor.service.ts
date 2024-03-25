import { Injectable } from '@angular/core';
import { MentorType } from '../interface/mentor.interface';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MentorService {
  private mentor: BehaviorSubject<MentorType[]> = new BehaviorSubject<
    MentorType[]
  >([]);
  mentor$ = this.mentor.asObservable();

  constructor(private http: HttpClient) {
    this.getMentors();
  }

  getMentors(): void {
    this.http.get<MentorType[]>('../../../assets/mentor.json').subscribe({
      next: (mentors: MentorType[]) => {
        this.mentor.next(mentors);
      },
      error: (error) => {
        console.error('There was an error!', error);
      },
    });
  }

  getMentorById(id: string) {
    return this.mentor.getValue().find((mentor) => mentor._id === id);
  }

  addNewMentor(newMentor: MentorType) {
    const currentMentors = [...this.mentor.value];
    currentMentors.unshift(newMentor);
    this.mentor.next(currentMentors);
  }

  updateMentor(updatedMentor: MentorType) {
    const currentMentors = [...this.mentor.value];
    const index = currentMentors.findIndex(
      (mentor) => mentor._id === updatedMentor._id
    );
    if (index !== -1) {
      currentMentors[index] = updatedMentor;
      this.mentor.next(currentMentors);
    }
  }

  deleteMentor(id: string) {
    const mentorList = [...this.mentor.value];
    const index = mentorList.findIndex((mentor) => mentor._id === id);
    if (index !== -1) {
      mentorList.splice(index, 1);
      this.mentor.next(mentorList);
    }
  }
}
