import { useContext } from "react"
import { appContext } from "../App"

export const useAppContext = () => {
  const values = useContext(appContext)
  return { ...values }
}
