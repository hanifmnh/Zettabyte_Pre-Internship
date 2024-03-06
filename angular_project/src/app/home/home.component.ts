import { Component, OnInit } from '@angular/core';
import { MemberType } from '../shared/interface/member.interface';
import { MemberService } from '../shared/service/member.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  members: MemberType[] = [];

  constructor(private router: Router, private memberService: MemberService) {}

  ngOnInit(): void {
    this.memberService.members$.subscribe((data: MemberType[]) => {
      this.members = data;
    });
  }

  goToHeroForm(): void {
    this.router.navigate(['form/member-form']);
  }
}
