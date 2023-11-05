import { StatusModel } from "./status.model";

export interface AdditionalTypeModel {
    id?: number;
    type: string;
    description?: string;
    status: StatusModel;
    createdAt?: Date;
    updatedAt?: Date;
}