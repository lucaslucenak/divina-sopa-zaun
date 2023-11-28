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
    this.dialog.open(ProductDetailsComponent, {
      width: '250px',
      data: { product: this.product }
    })
  }
}
