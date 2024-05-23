import PlantData from '../plantData.json';

const ShopPage = () => {
    return (
        <div className="flex card">
            <h1 class="green-text">Our plants</h1>
            {PlantData.map((Plant)=> (
                <figure>
                    <img src={Plant.imageUrl} alt="" />
                    <h3 class="green-text">{Plant.name}</h3>
                    <h5 class="green-text">£{Plant.price.toFixed(2)}</h5>
                    <input className="button" type="button" value="Add to cart"></input>
                </figure>
            ))}
        </div>
    );
}

export default ShopPage;