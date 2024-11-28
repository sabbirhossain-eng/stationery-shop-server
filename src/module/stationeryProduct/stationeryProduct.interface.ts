export interface IProduct {
  name: string
  brand: string
  price: number
  category:
    | 'Writing'
    | 'Office Supplies'
    | 'Art Supplies'
    | 'Educational'
    | 'Technology'
  description?: string | null
  quantity: number
  inStock: boolean
  createdAt?: Date
  updatedAt?: Date
}
