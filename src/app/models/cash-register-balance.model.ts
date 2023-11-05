import { StatusModel } from "./status.model";

export interface CashRegosterBalanceModel {
    id?: number;
    registeredValue?: number | null;
    accountedValue?: number | null;
    status: StatusModel;
    createdAt?: Date;
    updatedAt?: Date;
  }