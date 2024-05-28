import {createContext, useState } from 'react'
import plantData from '../plantData.json'

export const CartContext = createContext();

export function CartProvider( {child} ) {
    const [itemsInCart, setItemsInCart] = useState([]);
    function addToCart(plantId){
        const plant = plantData.find((plant) => plant.id === plantId)
        setItemsInCart((prev) => [...prev, plant])
    }
    const contextValue = {
        itemsInCart,
        addToCart
    }
    return (
        <div>
            <CartContext.Provider value={contextValue} />{child}
        </div>
    )
}