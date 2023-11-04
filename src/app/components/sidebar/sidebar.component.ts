import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

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
