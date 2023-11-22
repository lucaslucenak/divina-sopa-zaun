import { Component, OnInit } from '@angular/core';
import { ProductTypeService } from 'src/app/core/services/product-type.service';
import { ProductService } from 'src/app/core/services/product.service';
import { Product, ProductType } from 'src/app/core/types/type';

@Component({
  selector: 'app-caretory-list',
  templateUrl: './caretory-list.component.html',
  styleUrls: ['./caretory-list.component.scss']
})
export class CaretoryListComponent implements OnInit {

  products: Product[] = [];
  productTypes: ProductType[] = [];

  constructor(
    private productService: ProductService,
    private productTypeService: ProductTypeService    ) {
  }

  ngOnInit(): void {

    // Buscar todos os produtos
    this.productService.listar().subscribe(response => {
      this.products = response.content;
    })

    // Buscar todos os tipos de produtos
    this.productTypeService.listTypes().subscribe(response => {
      this.productTypes = response.content;
    });
  }

  getProductsType(typeId: number): Product[] {
    return this.products.filter(product => product.productType.id === typeId);
  }

}
