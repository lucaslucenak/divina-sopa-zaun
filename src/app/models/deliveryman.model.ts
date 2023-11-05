import { StatusModel } from "./status.model";

export interface DeliverymanModel {
    id?: number;
    name: string;
    cellphoneNumber: string;
    status: StatusModel;
    createdAt?: Date;
    updatedAt?: Date;
  }