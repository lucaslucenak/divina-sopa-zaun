import { StatusModel } from "./status.model";

export interface BusinessConfigurationModel {
    id?: number;
    configKey: string;
    configValue: string;
    configDescription: string;
    status: StatusModel;
    createdAt?: Date;
    updatedAt?: Date;
}