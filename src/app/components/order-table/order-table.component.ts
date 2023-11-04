import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

export interface OrderModel {
  id: number;
  clientName: string;
}

const DATA: OrderModel[] = [
  {
    "id": 1,
    "clientName": "aaaaaaaa"
  },
  {
    "id": 2,
    "clientName": "bbbbbb"
  },
  {
    "id": 3,
    "clientName": "cccccccc"
  }
  ,
  {
    "id": 3,
    "clientName": "cccccccc"
  }
  ,
  {
    "id": 3,
    "clientName": "cccccccc"
  }
  ,
  {
    "id": 3,
    "clientName": "cccccccc"
  }
];


@Component({
  selector: 'app-order-table',
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.scss']
})
export class OrderTableComponent implements AfterViewInit{

  columns: string[] = ['id', 'clientName']
  dataSource = new MatTableDataSource(DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

}
