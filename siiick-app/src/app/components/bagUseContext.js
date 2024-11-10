'use client'
import { useContext } from "react";
import { ShoppingBagContext } from "../context/ShoppingBagContext";
import { stringify } from "postcss";


export default function AddProductToBag({product})
{
    const { bagItems, addToBag, removeFromBag } =  useContext(ShoppingBagContext);
    const handleAddToBag = () => {
        addToBag(product);
        console.log(`Added ${product.productId} to bag. Bag itmes ${JSON.stringify(bagItems, null, 2)}`);
    };

    return <button className="border rounded-full text-neutral-50 font-semi-bold bg-zinc-950 p-2 px-4 mt-4 hover:bg-zinc-700" onClick={handleAddToBag}>Add to Bag</button>;
}