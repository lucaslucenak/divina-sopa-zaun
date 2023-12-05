import { Component, Input } from '@angular/core';
import { Product } from 'src/app/core/types/type';
import { MatDialog } from '@angular/material/dialog';
import { ProductDetailsComponent } from '../product-details/product-details.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product!: Product;

  constructor(public dialog: MatDialog) {}

  openProductDetails(): void {

    let modalHeight = window.innerWidth > 768 ? '70%' : 'auto';
    let modalWidth = window.innerWidth > 768 ? '20%' : '100%';

    this.dialog.open(ProductDetailsComponent, {
      width: modalWidth,
      height: modalHeight,
      data: { product: this.product }
    })
  }
}
