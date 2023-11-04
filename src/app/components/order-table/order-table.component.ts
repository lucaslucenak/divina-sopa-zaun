import { Component } from '@angular/core';

@Component({
  selector: 'app-order-table',
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.scss']
})
export class OrderTableComponent {
  dados: any[] = [
    {
      "id": 1,
      "nome": "aaaaaaaa"
    },
    {
      "id": 2,
      "nome": "bbbbbb"
    }
  ];

  config = {
    itemsPerPage: 2,
    currentPage: 1
  }

}
