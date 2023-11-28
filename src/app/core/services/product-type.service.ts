import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PaginatedResponse, ProductType } from '../types/type';

@Injectable({
  providedIn: 'root'
})
export class ProductTypeService {

  private apiUrl: string = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  listTypes(): Observable<PaginatedResponse<ProductType>> {
    return this.httpClient.get<PaginatedResponse<ProductType>>(`${this.apiUrl}/product-type`)
  }

  private activeProductTypeSource = new BehaviorSubject<string>('');

  setActiveProductType(type: string) {
    this.activeProductTypeSource.next(type);
  }

  getActiveProductType(): Observable<string> {
    return this.activeProductTypeSource.asObservable();
  }

}
