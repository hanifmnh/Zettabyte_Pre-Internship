import { Injectable } from '@angular/core';
import { UserType } from '../interface/user.interface';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiUrl = 'https://jsonplaceholder.typicode.com';

  private users: BehaviorSubject<UserType[]> = new BehaviorSubject<UserType[]>(
    []
  );
  users$ = this.users.asObservable();

  private selectedUser: BehaviorSubject<UserType | null> =
    new BehaviorSubject<UserType | null>(null);
  selectedUser$ = this.selectedUser.asObservable();

  constructor(private http: HttpClient) {
    this.fetchUsers();
  }

  fetchUsers(): void {
    this.http
      .get<UserType[]>(`${this.apiUrl}/users`, { observe: 'response' })
      .subscribe({
        next: (response: HttpResponse<any>) => {
          this.users.next(response.body);
        },
        error: (error) => {
          console.error('There was an error!', error);
        },
      });
  }

  getUserById(userId: number): void {
    this.http
      .get<UserType>(`${this.apiUrl}/users/${userId}`, { observe: 'response' })
      .subscribe({
        next: (response: HttpResponse<any>) => {
          this.selectedUser.next(response.body);
        },
        error: (error) => {
          console.error('There was an error!', error);
        },
      });
  }

  addUser(userData: UserType): void {
    this.http
      .post<any>(`${this.apiUrl}/users`, userData, { observe: 'response' })
      .subscribe({
        next: (response: HttpResponse<any>) => {
          console.log(response);
          if (response.status === 201 && response.statusText === 'OK') {
            const currentUsers = [...this.users.value];
            currentUsers.unshift(response.body);
            this.users.next(currentUsers);
            console.log('User added successfully!');
          } else {
            console.error('Add user failed with status code:', response.status);
          }
        },
        error: (error) => {
          console.error('There was an error!', error);
        },
      });
  }

  updateUser(updateData: UserType): void {
    this.http
      .put<UserType>(`${this.apiUrl}/users/${updateData.id}`, updateData, {
        observe: 'response',
      })
      .subscribe({
        next: (response: HttpResponse<any>) => {
          console.log(response);
          if (response.status === 200 && response.statusText === 'OK') {
            const currentUsers = [...this.users.value];
            const index = currentUsers.findIndex(
              (user) => user.id === updateData.id
            );
            if (index !== -1) {
              currentUsers[index] = updateData;
              this.users.next(currentUsers);
            }
          } else {
            console.error('Add user failed with status code:', response.status);
          }
        },
        error: (error) => {
          console.error('There was an error!', error);
        },
      });
  }

  deleteUser(userId: number): void {
    this.http
      .delete<any>(`${this.apiUrl}/users/${userId}`, { observe: 'response' })
      .subscribe({
        next: (response: HttpResponse<any>) => {
          console.log(response);
          if (response.status === 200 && response.statusText === 'OK') {
            const userList = this.users.getValue();
            const index = userList.findIndex((user) => user.id === userId);
            if (index !== -1) {
              userList.splice(index, 1);
              this.users.next(userList);
            }
            console.log('Delete successful!');
          } else {
            console.error('Delete failed with status code: ', response.status);
          }
        },
        error: (error) => {
          console.error('There was an error!', error);
        },
      });
  }
}
