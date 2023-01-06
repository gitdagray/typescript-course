import { useContext } from "react"
import CartContext from "../context/CartProvider"
import { UseCartContextType } from "../context/CartProvider"

const useCart = (): UseCartContextType => {
    return useContext(CartContext)
}

export default useCart