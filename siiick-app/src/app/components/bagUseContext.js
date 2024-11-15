'use client'
import { useContext } from "react";
import { ShoppingBagContext } from "../context/ShoppingBagContext";

export default function AddProductToBag({product})
{
    const { bagItems, addToBag, removeFromBag } =  useContext(ShoppingBagContext);
    const handleAddToBag = () => {
        addToBag(product);
    };

    return <button className="border rounded-full text-neutral-50 font-semi-bold bg-zinc-950 p-2 px-4 mt-4 hover:bg-zinc-700" onClick={handleAddToBag}>Add to Bag</button>;
}