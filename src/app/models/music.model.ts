export interface OrderModel {
    id?: number;
    clientName: string;
    clientCellphoneNumber: string;
    orderStatus: string;
    createdAt: Date;
    orderPrice: number;
}