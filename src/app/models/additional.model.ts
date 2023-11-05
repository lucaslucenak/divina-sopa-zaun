import { AdditionalTypeModel } from "./additional-type.model";
import { StatusModel } from "./status.model";

export interface AdditionalModel {
    id?: number;
    name: string;
    description?: string;
    price: number;
    additionalType: AdditionalTypeModel;
    status: StatusModel;
    createdAt?: Date;
    updatedAt?: Date;
}