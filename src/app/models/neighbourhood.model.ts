import { StatusModel } from "./status.model";

export interface NeighbourhoodModel {
    id?: number;
    neighbourhood: string;
    deliveryTax: number;
    status: StatusModel;
    createdAt?: Date;
    updatedAt?: Date;
  }