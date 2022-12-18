import { useEffect, useState } from "react"
import { ProductCard } from "./ProductCard"
import { Product } from "../interfaces"

export const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setisLoading] = useState(true)

  const getProducts = async () => {
    const res = await fetch('http://localhost:4000/products')
    const {data} = await res.json()
    console.log( data )
    setisLoading(false)
    return data
  }

  useEffect(() => {
    getProducts().then( setProducts )
  }, [])

  // if(isLoading) return <p>Loading....</p>; //tambien es muy buena idea
  
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