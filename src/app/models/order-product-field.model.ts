import { ProductModel } from "./product.model";

export interface OrderProductFieldModel {
    product: ProductModel;
    quantity: number;
    additions?: string;
    price: number;
}