import {Component, Input, OnInit} from '@angular/core';


import { MemberService } from './member-service';
import { Member } from './member';

@Component({
  selector: 'member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {
@Input()
member:Member;
  constructor(private memberService:MemberService) { }

  ngOnInit() {
  }

  save(): void {
    this.memberService.update(this.member)
      .then(() =>this.goBack());
  }


  goBack(): void {
    window.history.back();
  }

}
