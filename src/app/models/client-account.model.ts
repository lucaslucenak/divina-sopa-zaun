import { RoleEnum } from "../enums/role.enum";
import { StatusModel } from "./status.model";

export interface ClientAccountModel {
    id?: number;
    firstName: string;
    lastName: string;
    cpf: string;
    email: string;
    cellphoneNumber: string;
    placedOrdersQuantity: number;
    password: string;
    role: RoleEnum;
    status: StatusModel;
    createdAt?: Date;
    updatedAt?: Date;
}