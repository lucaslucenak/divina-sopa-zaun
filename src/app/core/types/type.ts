export interface Product {
  id: number,
  name: string,
  description: string,
  price: number,
  imageUrl: string
}

export interface PaginatedResponse<T> {
  content: T[],
  totalElements: number,
  totalPages: number
}

