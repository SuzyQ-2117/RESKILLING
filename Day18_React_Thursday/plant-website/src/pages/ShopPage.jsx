import PlantData from '../plantData.json';
import { useState } from 'react';
import IncreaseButton from '../components/IncreaseButton';
import DecreaseButton from '../components/DecreaseButton';
import EmptyCartButton from '../components/EmptyCartButton';
import AddToCartButton from '../components/AddToCartButton';


export default function ShopPage() {
    const [quantity, setQuantity] = useState(1);
    const [inCartAmnt, setInCartAmnt] = useState(0);

    function handleIncrease() {
        setQuantity(quantity + 1) 
    }

    function handleDecrease() {
        setQuantity(quantity - 1)
    }

    function emptyCart() {
        setQuantity(1)
        setInCartAmnt(0);
    }

    function handleAddCart() {
        setInCartAmnt(quantity+inCartAmnt)
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
                            <DecreaseButton decrease={handleDecrease}/>
                            <p>Quantity: {quantity}</p>
                            <IncreaseButton increase={handleIncrease}/>
                        </div>
                            <AddToCartButton add={handleAddCart}/>
                        <div className="flex">
                            <p>In cart: {inCartAmnt}</p>
                            <EmptyCartButton reset={emptyCart}/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
