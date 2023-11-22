export interface Product {
  id: number,
  name: string,
  description: string,
  price: number,
  imageUrl: string,
  productType: ProductType;
}

export interface PaginatedResponse<T> {
  content: T[],
  totalElements: number,
  totalPages: number
}

export interface ProductType {
  id: number,
  type: string,
  description: string
}
