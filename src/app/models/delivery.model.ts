import { DeliveryTaxCalculusEnum } from "../enums/delivery-tax-calculus.enum";
import { AddressModel } from "./address.model";
import { DeliveryTypeModel } from "./delivery-type.model";
import { DeliverymanModel } from "./deliveryman.model";
import { DistanceTaxModel } from "./distance-tax.model";
import { OrderModel } from "./order.model";
import { StatusModel } from "./status.model";

export interface DeliveryModel {
    id?: number | null;
    address?: AddressModel | null;
    deliveryman: DeliverymanModel;
    deliveryType: DeliveryTypeModel;
    deliveryTaxCalculus: DeliveryTaxCalculusEnum;
    distanceTax?: DistanceTaxModel | null;
    status: StatusModel;
    order?: OrderModel;
    tax?: number;
    distance?: number;
    createdAt?: Date;
    updatedAt?: Date;
  }
  