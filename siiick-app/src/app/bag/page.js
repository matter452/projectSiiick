import { useState } from "react"
import { useShoppingBag } from "../context/ShoppingBagContext";

export function BagItem({product, quantity, removeFunc}){
    const [itemQuantity, setItemQuantity] = useState(quantity);
    const incrementQuantity = () => setItemQuantity((prevQuantity) => prevQuantity + 1);
    const decrementQuantity = () => {
        setItemQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    };

    return(
        <div className="flex items-center gap-4 mb-4 border p-2">
            <img src={product.imgPath} alt={`${product.title} image`} className="w-16 h-16" />
            <div className="flex-1">
                <p>{product.title}</p>
                <p>{product.brand}</p>
                <p>${product.price.toFixed(2)}</p>
            </div>
            <div className="flex items-center gap-2">
                <button onClick={decrementQuantity}>-</button>
                <div>{itemQuantity}</div>
                <button onClick={incrementQuantity}>+</button>
            </div>
            <button onClick={removeFunc} className="text-red-500">Remove</button>
        </div>
    );
}

export default function Page(){
    const { bagItems, removeFromBag } = useShoppingBag();

    return(
    <section className="p-8">
        <h1 className="text-2xl mb-6">Your Shopping Bag</h1>
        {bagItems.length === 0 ? (<p>Your bag is empty.</p>) : (
            bagItems.map((item) => (
                <BagItem key={item.id} product={item} quantity={item.quantity} removeFunc={() => removeFromBag(item.id)}/>
                )
            )
        )}
    </section>
    )
}