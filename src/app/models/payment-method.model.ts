import { PaymentMethodEnum } from "../enums/payment-method.enum";
import { StatusModel } from "./status.model";

export interface PaymentMethodModel {
    id?: number;
    paymentMethod: PaymentMethodEnum;
    status: StatusModel;
    createdAt?: Date;
    updatedAt?: Date;
  }