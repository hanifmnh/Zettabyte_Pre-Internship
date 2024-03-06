import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MemberType } from '../interface/member.interface';
import { members } from '../data/member.data';

@Injectable({
  providedIn: 'root',
})
export class MemberService {
  membersSubject: BehaviorSubject<MemberType[]> = new BehaviorSubject<
    MemberType[]
  >(members);
  members$ = this.membersSubject.asObservable();

  constructor() {}

  getMemberById(id: string): MemberType | undefined {
    return this.membersSubject.value.find((member) => member.id === id);
  }

  addMember(newMember: MemberType): void {
    const currentMembers = [...this.membersSubject.value];
    currentMembers.push(newMember);
    this.membersSubject.next(currentMembers);
  }

  deleteMember(id: string): void {
    const index = this.membersSubject
      .getValue()
      .findIndex((member) => member.id === id);
    if (index !== -1) {
      const deleteMember = [...this.membersSubject.value];
      deleteMember.splice(index, 1);
      this.membersSubject.next(deleteMember);
    }
  }
}
