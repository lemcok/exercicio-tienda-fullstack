export interface Product {
  id: string,
  name: string,
  model: string,
  brand: string,
  description: string,
  price: number,
  image: string,
  qty: number,
}

export interface User {
  name: string,
  lastname: string,
  email: string,
  password: string,
}

export interface ProductosFavoritos {
  products: Product[],
  user: User
}
