import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginDto } from 'src/app/models/dtos/login.dto';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  userLogin: LoginDto = {
    "cpf": '',
    "password": ''
  };
  
  momentForm!: FormGroup;

  constructor(private router: Router, private authenticationService: AuthenticationService) {}


  onSignIn() {
    this.authenticationService.login(this.userLogin);
    this.router.navigate(['delivery'])
  }

}
