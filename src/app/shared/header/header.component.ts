import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  showHeaderInfo = true;
  showSearchBar = false;
  searchTerm: string = '';

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const threshold = 100; // Exemplo de limite de rolagem para mudar a visibilidade
    this.showHeaderInfo = (window.pageYOffset < threshold);
  }

  toggleSearch(): void {
    this.showSearchBar = !this.showSearchBar;
    // Lógica
  }
}
