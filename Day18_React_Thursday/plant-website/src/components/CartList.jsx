import { useContext } from "react";
import { CartContext } from "./CartProvider";

function CartList() {
    const { itemsInCart } = useContext(CartContext)
    return (
        <div>
           <h2>Cart</h2>
            <div className="cart-wrapper">
                {itemsInCart.map((plant) => (
                    <span>{plant.name}</span>
                ))}
            </div> 
        </div>
    )
}

export default CartList;