import CartList from '../components/CartList';
import { CartProvider } from '../components/CartProvider';
import PlantCard from '../components/PlantCard'

const ShopPage = () => {
    return (
        <div>
            <CartProvider>
                <CartList />
            </CartProvider>
            <PlantCard />
        </div>
        
    );
}

export default ShopPage;