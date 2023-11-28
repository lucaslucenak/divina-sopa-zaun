import { ProductTypeService } from './../../core/services/product-type.service';
import { Component, HostListener, OnInit } from '@angular/core';
import { ProductType } from 'src/app/core/types/type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  productTypes: ProductType[] = [];
  activeType: string = '';

  constructor(private productTypeService: ProductTypeService) { }

  ngOnInit() {
    this.productTypeService.listTypes().subscribe(response => {
      this.productTypes = response.content;
    });
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    let currentActiveType = '';
    const threshold = window.innerHeight / 3; // Mudar o valor conforme necessário, para ajustar onde alterar o "active" da navbar.

    this.productTypes.forEach(type => {
      const section = document.getElementById(type.type);
      if (section) {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop > -threshold && sectionTop < threshold;

        if (isSectionVisible) {
          currentActiveType = type.type;
        }
      }
    });
    this.productTypeService.setActiveProductType(currentActiveType);
  }
}

