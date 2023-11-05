import { ProductTypeModel } from "./product-type.model";
import { SizeModel } from "./size.model";
import { StatusModel } from "./status.model";

export interface ProductModel {
    id?: number;
    name: string;
    description?: string;
    price: number;
    size: SizeModel;
    productType: ProductTypeModel;
    status: StatusModel;
    createdAt?: Date;
    updatedAt?: Date;
}