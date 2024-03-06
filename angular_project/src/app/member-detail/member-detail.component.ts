import { Component, OnInit } from '@angular/core';
import { MemberType } from '../shared/interface/member.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { MemberService } from '../shared/service/member.service';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrl: './member-detail.component.scss',
})
export class MemberDetailComponent implements OnInit {
  member: MemberType | undefined;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private memberService: MemberService
  ) {}

  ngOnInit(): void {
    const memberId = this.route.snapshot.params['id'];
    this.member = this.memberService.getMemberById(memberId);
  }

  deleteHero(): void {
    if (this.member) {
      this.memberService.deleteMember(this.member.id);
      this.router.navigate(['/home']);
    }
  }

  backToHome(): void {
    this.router.navigate(['/home']);
  }
}
