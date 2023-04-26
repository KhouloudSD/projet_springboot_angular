import { Component, OnInit } from '@angular/core';
import { Role, User } from 'src/app/models';
import { Member } from 'src/app/models/Member';
import { AuthenticationService } from 'src/app/services';
import { MemberService } from './membres.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-membres',
  templateUrl: './membres.component.html',
  styleUrls: ['./membres.component.scss']
})
export class MembresComponent implements OnInit {


  members!: Member[];
  public copy: string;
  action : string;
  selectedMember: Member = new Member();
  user!: User;



    constructor(private authenticationService: AuthenticationService, private memberService : MemberService) { 
      this.authenticationService.user.subscribe(x => this.user = x)
     }

     get isAdmin() {
      return this.user && this.user.role === Role.Admin;
  }
    
  ngOnInit() {
    this.getMembers();
  }


private getMembers(){
  this.memberService.getMembersList().subscribe(data => {
    this.members = data;
  })
}



onSubmit() {
  if (this.selectedMember.id === undefined) {
    this.memberService.createMember(this.selectedMember)
      .subscribe(member => {
        this.members.push(member);
        this.selectedMember = new Member();
      });
  } else {
    this.memberService.updateMember(this.selectedMember.id , this.selectedMember)
      .subscribe(() => {
        this.selectedMember = new Member();
      });
  }
}
// Delete an event
deleteMember(memberId: number) {
if (confirm(`Are you sure you want to delete the event ?`)) {
  this.memberService.deleteMember(memberId)
    .subscribe(() => {
      this.members = this.members.filter(e => e.id !== memberId);
      this.action = '';
    });
}
}


editMember(member: Member) {
this.selectedMember = member;
this.action = 'Edit';
}

cancel() {
this.selectedMember = new Member();
this.action = '';
}







}
