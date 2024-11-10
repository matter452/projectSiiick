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

    return <button className='rounded m-2 bg-slate-900 py-2 px-4 text-md text-white font-black data-[hover]:bg-slate-500 data-[active]:bg-slate-700' onClick={handleAddToBag}>Add to Bag</button>
}