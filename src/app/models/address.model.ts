import { ClientAccountModel } from "./client-account.model";
import { NeighbourhoodModel } from "./neighbourhood.model";
import { StatusModel } from "./status.model";

export interface AddressModel {
    id?: number;
    streetName: string;
    houseNumber: string;
    city: string;
    cep: string;
    complement: string;
    referencePoint: string;
    neighbourhood: NeighbourhoodModel;
    clientAccount: ClientAccountModel;
    status: StatusModel;
    createdAt?: Date;
    updatedAt?: Date;
}