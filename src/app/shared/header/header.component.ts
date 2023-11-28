import { Component, HostListener, OnInit, ElementRef  } from '@angular/core';
import { ProductTypeService } from 'src/app/core/services/product-type.service';
import { ProductType } from 'src/app/core/types/type';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showHeaderInfo = true;
  showSearchBar = false;
  searchTerm: string = '';
  productTypes: ProductType[] = [];
  isFixed: boolean = false;
  activeType: string = '';

  constructor(
    private productTypeService: ProductTypeService,
    private el: ElementRef
  ) { }

  ngOnInit(): void {
    this.productTypeService.listTypes().subscribe(
      response => {
        this.productTypes = response.content;
      }
    );

    this.productTypeService.getActiveProductType().subscribe(activeType => {
      this.activeType = activeType;
    })
  }

  // selectProductType(typeId: number): void {
  //   this.sharedSelectionService.selectProductType(typeId);
  // }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    // const threshold = 100; // Exemplo de limite de rolagem para mudar a visibilidade
    // this.showHeaderInfo = (window.pageYOffset < threshold);
    const offset = window.pageYOffset || document.documentElement.scrollTop;
    this.isFixed = offset > this.el.nativeElement.offsetTop;
  }

  toggleSearch(): void {
    this.showSearchBar = !this.showSearchBar;
    // Lógica
  }

  scrollToType(event: MouseEvent, type: string): void {
    event.preventDefault(); // Evita voltar a rolagem para o ínicio.
    const section = document.getElementById(type);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
