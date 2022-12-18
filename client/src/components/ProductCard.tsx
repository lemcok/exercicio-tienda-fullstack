import { useContext } from "react";
import { appContext } from "../App";
import { Product } from "../interfaces";

interface ProductCardProps {
 product: Product,
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { cart, setCart} = useContext(appContext)
  
  const { name, model, brand, price, description, image  } = product;
  
  const handleAddCart = ( product: Product ) => {
    if (cart.length >= 3 ) return;
    setCart((cart: Product[]) => [...cart, product])   
  }

  return (
    <div className="border border-rose-400 py-3 px-2 rounded-md max-w-xs">
      <img src={`http://localhost:4000/images/${image}`} alt={name} />
      <div className="flex flex-col space-y-3">
        <h2 className="text-2xl">{`${name} - ${model}`}</h2>
        <h4 className="text-right">{brand}</h4>
        <p>{ description }</p>
        <span className="text-right">${price}</span>
        <button 
          className="block w-full text-center max-w-full border py-2 px-6 border-black rounded-sm"
          onClick={ () => handleAddCart(product) }
        >
          Add to Cart <i className="bx bxs-shopping-bag"></i>
        </button>
      </div>
    </div>
  )
}