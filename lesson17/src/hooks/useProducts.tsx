import { useContext } from "react"
import ProductsContext from "../context/ProductsProvider"
import { UseProductsContextType } from "../context/ProductsProvider"

const useProducts = (): UseProductsContextType => {
    return useContext(ProductsContext)
}

export default useProducts