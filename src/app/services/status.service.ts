import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  private noxusUrl = environment.noxusUrl;


  constructor(private httpClient: HttpClient) {
  }
}
