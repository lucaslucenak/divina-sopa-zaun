import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

export interface OrderModel {
  id: number;
  clientName: string;
  clientCellphoneNumber: string;
  orderStatus: string;
  createdAt: Date;
  orderPrice: number;
}

const DATA: OrderModel[] = [
  {
    "id": 1,
    "clientName": "aaaaaaaa",
    "clientCellphoneNumber": "222-888-3333",
    "orderStatus": "PREPARING",
    "createdAt": new Date("2023-03-01T22:10:00"),
    "orderPrice": 10.50
  },
  {
    "id": 2,
    "clientName": "bbbbbb",
    "clientCellphoneNumber": "222-888-3333",
    "orderStatus": "FINISHED",
    "createdAt": new Date("2023-11-18T22:30:00"),
    "orderPrice": 10.50
  },
  {
    "id": 3,
    "clientName": "cccccccc",
    "clientCellphoneNumber": "222-888-3333",
    "orderStatus": "DISPATCHED",
    "createdAt": new Date("2023-11-18T22:03:00"),
    "orderPrice": 10.50
  }
  ,
  {
    "id": 3,
    "clientName": "cccccccc",
    "clientCellphoneNumber": "222-888-3333",
    "orderStatus": "CANCELED",
    "createdAt": new Date("2023-11-18T22:00:00"),
    "orderPrice": 10.50
  }
];


@Component({
  selector: 'app-order-table',
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.scss']
})
export class OrderTableComponent implements AfterViewInit{

  columns: string[] = ['id', 'clientName', 'orderStatus', 'createdAt', 'orderPrice'];
  dataSource = new MatTableDataSource(DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

}
