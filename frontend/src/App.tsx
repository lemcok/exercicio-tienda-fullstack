import { Dispatch, SetStateAction, createContext, useEffect, useMemo, useState } from "react"
import { ProductList } from "./components/ProductList"
import { SearchInput } from "./components/SearchInput"
import { Product } from "./interfaces"
import { Header } from "./components/Header"
import { getProducts } from "./services/product.service"

export type AppContextType = {
  cart: Product[],
  setCart: Dispatch<SetStateAction<Product[]>>,
  totalPrice: number,
  setFavorites: Dispatch<SetStateAction<any>>,
  favorites: any
} 

export const appContext = createContext({} as AppContextType);
const { Provider } = appContext

export const App = () => {
  const [cart, setCart] = useState<Product[]>([])
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setisLoading] = useState(true)
  const [searchInput, setSearchInput] = useState('');
  const [favorites, setFavorites] = useState<Record<Product['id'], boolean>>({})

  
  const loadFavoritesLocalStorage = () => {
    const _favorites = localStorage.getItem('favorites')
    if(_favorites){
      setFavorites(JSON.parse(_favorites))
    }
  }

  const totalPrice = useMemo(() => cart.reduce((acc, product) => acc + product.price, 0), [cart]) 

  useMemo(() => {
    const filtrados = products.filter( product => product.name.toLocaleLowerCase().includes(searchInput) );
    setProducts(filtrados)
  }, [searchInput])


  useEffect(() => {
    if(searchInput === ''){
      getProducts().then( data => {
        setProducts(data)
      } )
    }
  }, [searchInput])

  useEffect(() => {
    getProducts().then( (data) => {
      setProducts(data)
      setisLoading(false)
    });

    loadFavoritesLocalStorage();
  }, [])

  
  return (
    <Provider value={{
      cart,
      setCart,
      totalPrice,
      setFavorites,
      favorites
    }}>
      
      <Header />
      <div>
        <SearchInput 
          setSearchInput={setSearchInput} 
          searchInput={searchInput}  
        />
      </div>
      <div>
        <ProductList 
          products={ products } 
          isLoading={ isLoading } 
        />
      </div>
    </Provider>
  )
}