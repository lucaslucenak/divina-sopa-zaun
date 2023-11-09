import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'targon';

  constructor(private auth: AuthenticationService) {
    // auth.login('108.917.264-89', '@1234');
    // const token = localStorage.getItem('jwtToken');
    // console.log(token)
  }

}
