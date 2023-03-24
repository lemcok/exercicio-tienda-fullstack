import { ProductCard } from "./ProductCard"
import { Product } from "../interfaces"

interface props {
  products: Product[],
  isLoading: boolean
}
export const ProductList = ({products, isLoading}:props) => {
  return (
    <div className="container mx-auto grid grid-cols-3 gap-5 p-5 border border-red-400">
      { isLoading 
        ? ( <p>Loading....</p> )
        : (
            products.map( product => (
              <ProductCard 
                product={product} 
                key={product.id} 
              />
            ) )
          )
      }
    </div>
  )
}