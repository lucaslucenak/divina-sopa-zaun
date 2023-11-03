import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {
    this.fullHeight();
    $('#sidebarCollapse').on('click', () => {
      $('#sidebar').toggleClass('active');
    });
  }

  private fullHeight(): void {
    const windowHeight = $(window).height();
    if (windowHeight !== undefined) {
      $('.js-fullheight').css('height', windowHeight.toString() + 'px');
      $(window).resize(() => {
        $('.js-fullheight').css('height', windowHeight.toString() + 'px');
      });
    }
  }

}
