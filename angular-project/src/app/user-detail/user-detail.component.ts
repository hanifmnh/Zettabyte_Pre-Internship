import { Component, OnInit } from '@angular/core';
import { UserType } from '../shared/interface/user.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../shared/service/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss',
})
export class UserDetailComponent implements OnInit {
  user: UserType | null = null;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    const userId = Number(this.route.snapshot.params['id']);
    this.userService.getUserById(userId);
    this.userService.selectedUser$.subscribe((selectedUser) => {
      this.user = selectedUser;
    });
  }

  onEditUser(): void {
    if (this.user) {
      this.router.navigate(['/form/user-form/edit'], {
        queryParams: { id: this.user.id },
      });
    }
  }

  onDeleteUser(): void {
    Swal.fire({
      title: `Are you sure want to delete ${this.user?.name}?`,
      text: 'You will not be able to recover this data!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes',
    }).then((result) => {
      if (result.isConfirmed) {
        if (this.user) {
          this.userService.deleteUser(this.user.id);
          Swal.fire({
            title: 'Deleted!',
            text: `${this.user?.name} has been deleted.`,
            icon: 'success',
          });
          this.router.navigate(['/home']);
        }
      }
    });
  }

  backToHome(): void {
    this.router.navigate(['/home']);
  }
}
