import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product, PaginatedResponse } from '../types/type';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl: string = environment.apiUrl;

  constructor(
    private httpCliente: HttpClient
  ) { }

  listar(): Observable<PaginatedResponse<Product>> {
    return this.httpCliente.get<PaginatedResponse<Product>>(`${this.apiUrl}/product`);
  }
}
