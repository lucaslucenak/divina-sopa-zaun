import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { LoginDto } from '../models/dtos/login.dto';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private noxusUrl = environment.noxusUrl;

  constructor(private httpClient: HttpClient) { }

  login(loginDto: LoginDto) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    localStorage.setItem('jwtToken', Math.random().toString());

    // const body = {
    //   cpf: cpf,
    //   password: password
    // }

    // return this.httpClient.post<any>(`${this.noxusUrl}/authentication/login`, body, {headers})
    // .pipe(
    //   tap(response => {
    //     localStorage.setItem('jwtToken', response.jwtToken)
    //   })
    // );
  }
}
