import { StatusModel } from "./status.model";

export interface SizeModel {
    id?: number;
    size: string;
    status: StatusModel;
    createdAt?: Date;
    updatedAt?: Date;
  }
  