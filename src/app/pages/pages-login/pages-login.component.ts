import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/_auth/user-auth.service';
import { UsersService } from 'src/app/_auth/users.service';

@Component({
  selector: 'app-pages-login',
  templateUrl: './pages-login.component.html',
  styleUrls: ['./pages-login.component.css']
})
export class PagesLoginComponent implements OnInit {


  constructor(private usersService: UsersService,
    private userAuthService : UserAuthService,
    private router: Router) { }

  ngOnInit(): void {
  }

  login(loginForm:NgForm){
    
    
    this.usersService.login(loginForm.value)
    .subscribe(
      (response:any)=>{

        this.userAuthService.setRoles(response.role);
        this.userAuthService.setToken(response.access_token);
      

        console.log(response.role[0].authority);
        console.log(this.userAuthService.getToken());

        const role = response.role[0].authority;

        if(role === "teacher"){
         this.router.navigate(['/dashboard']);
        }else{
          console.log("you have not acces to this");
          
        }
      },
      (error)=>{
        console.log(error);
      }
    );
  }

}
