import { Component, ViewChild, AfterViewInit, Input } from '@angular/core';
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
    "id": 24543,
    "clientName": "Lucas Lucena",
    "clientCellphoneNumber": "(83) 98690 7270",
    "orderStatus": "PREPARING",
    "createdAt": new Date("2023-03-01T22:10:00"),
    "orderPrice": 10.50
  },
  {
    "id": 24544,
    "clientName": "Daniel Xavier",
    "clientCellphoneNumber": "(83) 12345 6789",
    "orderStatus": "FINISHED",
    "createdAt": new Date("2023-11-18T22:30:00"),
    "orderPrice": 40.53
  },
  {
    "id": 3,
    "clientName": "Fernando Alves",
    "clientCellphoneNumber": "(83) 32165 4879",
    "orderStatus": "DISPATCHED",
    "createdAt": new Date("2023-11-18T22:03:00"),
    "orderPrice": 100.54
  },
  {
    "id": 3,
    "clientName": "Mariluce Maria",
    "clientCellphoneNumber": "(83) 94526 7846",
    "orderStatus": "CANCELED",
    "createdAt": new Date("2023-11-18T22:00:00"),
    "orderPrice": 10.50
  },
  {
    "id": 4,
    "clientName": "Fernanda Aguiar",
    "clientCellphoneNumber": "(83) 54136 8784",
    "orderStatus": "ORDERED",
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
