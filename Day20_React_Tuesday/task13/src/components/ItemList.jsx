import React from "react";
import ItemCard from "./ItemCard";
import itemsData from '../itemsData.json'
// import "../style.css";

export default function ItemList() {
    return (
        <div className="items-grid">
            {itemsData.map((item) => (
                <ItemCard 
                key={item.id}
                id={item.id}
                symbol={item.symbol}
                name={item.name}
                price={item.price}
                />
            ))}
        </div>
    )
}