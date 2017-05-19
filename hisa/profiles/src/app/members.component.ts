import { Component } from '@angular/core';
import { Member } from './member';
import {MemberService} from "./member-service";
import { OnInit } from '@angular/core';


@Component({
  selector: 'members-root',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
  providers:[MemberService]
})
export class MembersComponent implements OnInit{
  ngOnInit():void{
    this.getMembers();
  }
  title = 'MEMBERS!';
 members:Member[];
 selectedMember:Member;

 constructor(private memberService:MemberService){ }

 onSelect(member:Member):void{
   this.selectedMember=member;
 }

 getMembers():void{
   this.memberService.getMembers().then(members =>this.members=members);
 }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.memberService.create(name)
      .then(member => {
        this.members.push(member);
        this.selectedMember = null;
      });
  }

  /*delete(member: Member): void {
    this.memberService
      .delete(member.id)
      .then(() => {
        this.members = this.members.filter(h => h !== member);
        if (this.selectedMember === member) { this.selectedMember = null; }
      });
  }*/

}
