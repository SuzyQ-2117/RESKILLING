import PlantData from '../plantData.json';
import { useState } from 'react';
import AddToCartButton from './AddToCartButton';
// import { useContext } from "react";
// import { CartContext } from "./CartProvider";

const PlantCard = ({ id, name, price, imageUrl }) => {
    const [quantity, setQuantity] = useState(1);
    const [inCartAmnt, setInCartAmnt] = useState(0);
    
    // const { addToCart } = useContext(CartContext)
    // function handleAddToCart() {
    //     addToCart(id)
    // }

    function handleIncrease() {
        setQuantity(quantity + 1) 
    }

    function handleDecrease() {
        if(quantity===1){
            setQuantity(1)
        } else {
        setQuantity(quantity - 1) }
    }

    function emptyCart() {
        setQuantity(1)
        setInCartAmnt(0);
    }

    function handleAddToCart() {
        setInCartAmnt(quantity+inCartAmnt)
        setQuantity(1)
    }

    return (
        <div className="center maxwidth">
            <br/>
            <h1 class="green-text">Our plants</h1>
            <br/>
            <div className="flex card">
                {PlantData.map((Plant)=> (
                    <div className="plant">
                        <img src={Plant.imageUrl} alt="" />
                        <h3 class="green-text">{Plant.name}</h3>
                        <h5 class="green-text">£{Plant.price.toFixed(2)}</h5>
                        <div className="flex">
                        <button onClick={handleDecrease}>-</button>
                        <p>Quantity: {quantity}</p>
                        <button onClick={handleIncrease}>+</button>
                        </div>
                            <AddToCartButton add={handleAddToCart}/>
                        <div className="flex">
                            <p>In cart: {inCartAmnt}</p>
                            <button onClick={emptyCart}>🗑</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PlantCard;