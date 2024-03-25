import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MentorType } from '../../shared/interface/mentor.interface';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MentorService } from '../../shared/service/mentor.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mentor-table',
  templateUrl: './mentor-table.component.html',
  styleUrl: './mentor-table.component.scss',
})
export class MentorTableComponent implements OnInit, AfterViewInit {
  mentorList: MentorType[] = [];
  sortedMentor: MentorType[] = [];
  dataSource = new MatTableDataSource<MentorType>();

  searchValue: string = '';
  statusValue: string = '';
  civilityValue: string = '';

  selectedSearchType: string = 'name';

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = [
    '_id',
    'email',
    'name',
    'company',
    'user_status',
    'count_document',
    'action',
  ];

  constructor(private mentorService: MentorService, private router: Router) {}

  ngOnInit(): void {
    this.mentorService.mentor$.subscribe((mentors) => {
      this.mentorList = mentors;
      this.sortedMentor = mentors.slice();
      this.dataSource.data = this.sortedMentor;
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  filterMentors(): void {
    const filteredData = this.mentorList.filter((mentor) => {
      const searchValue = this.searchValue.trim().toLowerCase();
      const statusValue = this.statusValue.toLowerCase();
      const civilityValue = this.civilityValue.toLowerCase();

      const removeAccents = (str: string): string => {
        return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      };

      const normalizedFirstName = removeAccents(
        mentor.first_name.trim().toLowerCase()
      );
      const normalizedLastName = removeAccents(
        mentor.last_name.trim().toLowerCase()
      );
      const fullName = `${normalizedFirstName} ${normalizedLastName}`;

      const searchProps = {
        name: fullName,
        email: mentor.email.toLowerCase(),
        company: mentor.company.name.toLowerCase(),
        id: mentor._id.toLowerCase(),
      };

      const searchProp = searchProps[this.selectedSearchType];

      return (
        searchProp.includes(searchValue) &&
        (statusValue === '' ||
          mentor.user_status.toLowerCase() === statusValue) &&
        (civilityValue === '' ||
          mentor.civility.toLowerCase() === civilityValue)
      );
    });

    this.dataSource.data = filteredData;
  }

  sortMentor(sort: Sort) {
    const data = this.sortedMentor.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedMentor = data;
      return;
    }

    this.sortedMentor = data.sort((first, second) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'id':
          return this.compareNumber(
            parseInt(first._id),
            parseInt(second._id),
            isAsc
          );
        case 'email':
        case 'user_status':
          return this.compareString(
            first[sort.active],
            second[sort.active],
            isAsc
          );
        case 'name':
          return this.compareString(first.last_name, second.last_name, isAsc);
        case 'company':
          return this.compareString(
            first.company.name,
            second.company.name,
            isAsc
          );
        case 'count_document':
          return this.compareNumber(
            first[sort.active],
            second[sort.active],
            isAsc
          );
        default:
          return 0;
      }
    });
    this.dataSource.data = this.sortedMentor;
  }

  compareString(first: string, second: string, isAsc: boolean) {
    return (
      (first.toLowerCase() < second.toLowerCase() ? -1 : 1) * (isAsc ? 1 : -1)
    );
  }

  compareNumber(first: number, second: number, isAsc: boolean) {
    return (first - second) * (isAsc ? 1 : -1);
  }

  deleteMentor(mentorId: string) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this data!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it',
    }).then((result) => {
      if (result.isConfirmed) {
        this.mentorService.deleteMentor(mentorId);
        Swal.fire('Deleted!', 'Your data has been deleted.', 'success');
        this.router.navigate(['/home']);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Delete data has been cancelled.', 'error');
      }
    });
  }

  goToDetailMentor(id: string) {
    this.router.navigate(['mentor/mentor-detail', id]);
  }
}
