import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/_auth/users.service';

@Component({
  selector: 'app-users-profile',
  templateUrl: './users-profile.component.html',
  styleUrls: ['./users-profile.component.css']
})
export class UsersProfileComponent implements OnInit {

  user: any={};
  username="prof";

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.getUserByUsername(this.username);
  }

  getUserByUsername(username: string){
    this.usersService.getUserByUsername(username)
    .subscribe(reslt=>{
      this.user = reslt
      console.log("user "+this.user.roles[0].name);
    })
  }

}
