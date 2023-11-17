import { Product } from 'src/app/core/types/type';
import { ProductService } from './../../core/services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: Product[] = [];

  constructor(private serviceProduct: ProductService) {}

  ngOnInit(): void {
    this.serviceProduct.listar().subscribe(
      resposta => {
        this.products = resposta.content;
      }
    )
  }
}
