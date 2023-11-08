import { StatusModel } from "./status.model";

export interface DistanceTaxModel {
    id?: number;
    tax: number;
    initialDistance: number;
    finalDistance: number;
    status: StatusModel;
    createdAt?: Date;
    updatedAt?: Date;
  }