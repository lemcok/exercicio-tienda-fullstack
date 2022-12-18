import { Dispatch, SetStateAction, createContext, useContext, useState } from "react"
import { ProductList } from "./components/ProductList"
import { SearchInput } from "./components/SearchInput"
import { Product } from "./interfaces"

export type AppContextType = {
  cart: Product[],
  setCart: Dispatch<SetStateAction<Product[]>>
} 

export const appContext = createContext({} as AppContextType);
const { Provider } = appContext

export const App = () => {
  const [cart, setCart] = useState<Product[]>([])

  return (
    <Provider value={{
      cart: [],
      setCart
    }}>
      <header className="flex container mx-auto items-center justify-between">
        <h2 className="text-red-400 text-4xl mb-5 p-3">Tienda</h2>
        <nav>
          <div className="relative">
            <i className="bx bxs-shopping-bag text-[35px] text-rose-500"></i>
            <span className="absolute bg-emerald-500 text-white font-bold rounded-full text-sm w-5 h-5 text-center -left-1">
              {cart.length}
            </span>
          </div>
        </nav>
      </header>

      <div>
        <SearchInput />
      </div>
      <div>
        <ProductList/>
      </div>
    </Provider>
  )
}