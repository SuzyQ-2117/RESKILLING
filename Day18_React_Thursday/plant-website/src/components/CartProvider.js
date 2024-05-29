import {createContext, useState } from 'react'
import plantData from '../plantData.json'

export const CartContext = createContext();

export function CartProvider( { children } ) {
    const [itemsInCart, setItemsInCart] = useState([]);
    
    function addToCart(PlantId){
        const Plant = plantData.find((plant) => plant.id === PlantId)
        setItemsInCart((prev) => [...prev, Plant])
    }

    const contextValue = {
        itemsInCart,
        addToCart
    }

    return (
        <div>
            <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
        </div>
    )
}