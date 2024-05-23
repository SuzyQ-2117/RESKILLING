import PlantData from '../plantData.json';

const ShopPage = () => {
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
                        <input className="button2" type="button" value="Add to cart"></input>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ShopPage;