// const PlantCard = () => 
// this can also be written as a function: 

// import itemsData from '../itemsData.json'

function PlantCard({ name, price, imageUrl }) {
    return (
        <div className="card">
            <h1>{name}</h1>
            <h3>{price.toFixed(2)}</h3>
            <img className="card-image" src={imageUrl} alt="" />
        </div>
    );
}

export default PlantCard;

{/* {itemsData.map((item) => (
                <div key={item.id}>
                    <h1>{item.name}</h1>
                    <h3>{item.price.toFixed(2)}</h3>
                    <img className="card-image" src={item.imageUrl} alt="" />
                </div>
            ))} */}