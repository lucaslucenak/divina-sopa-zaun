import { StatusModel } from "./status.model";

export interface CouponModel {
    id?: number;
    description: string;
    couponValue: number;
    minimumOrderValue: number;
    maxUsages: number;
    startAt: Date;
    finishAt: Date;
    status: StatusModel;
    createdAt?: Date;
    updatedAt?: Date;
  }