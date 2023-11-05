import { StatusModel } from "./status.model";

export interface DeliveryTypeModel {
    id?: number;
    deliveryType: string;
    status: StatusModel;
    createdAt?: Date;
    updatedAt?: Date;
  }