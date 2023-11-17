import { Component } from '@angular/core';
import { ProductService } from 'src/app/core/services/product.service';
import { Product } from 'src/app/core/types/type';

@Component({
  selector: 'app-caretory-list',
  templateUrl: './caretory-list.component.html',
  styleUrls: ['./caretory-list.component.scss']
})
export class CaretoryListComponent {
  products!: Product[];
  constructor(private service: ProductService) {
  }
  ngOnInit(): void {
    this.service.listar().subscribe(
      res => {
        this.products = res.content;
      }
    )
  }
}
