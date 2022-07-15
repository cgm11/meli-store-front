export interface ItemsInterface {
  author: Author
  categories: string[]
  items: Item
}

interface Author {
  name: string
  lastname: string
}

export interface ItemInterface {
  id: string
  title: string
  price: Price
  picture: string
  condition: string
  free_shipping: boolean
}

interface Price {
  currency: string
  amount: number
  decimals: number
}

export interface Category {
  id: string
  name: string
}

interface ItemDetails {
  author: Author
  categories: string[]
  item: ItemDescription
}

interface ItemDescription extends ItemInterface {
  sold_quantity: number
  description: string
}
