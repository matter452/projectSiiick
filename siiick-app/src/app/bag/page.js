'use client'
import { useEffect, useState } from "react"
import { ShoppingBagContext } from "../context/ShoppingBagContext";
import { allProducts } from "../productsData";
import { useContext } from "react";
import { Button, Input } from "@mui/material";
import Link from "next/link";

export function BagItem({ product, removeFunc, subtractItemQuantity, addItemQuantity}){
    const [itemQuantity, setItemQuantity] = useState(product.quantity);

    useEffect(() => {
        setItemQuantity(product.quantity);
    }, [product.quantity]);

    return(
        <div className="border border-slate-400 bg-slate-50 mb-2 p-4 rounded-md">
            <div className="flex justify-evenly mb-4 p-2">
                <img src={product.imgPath} alt={`${product.title} image`} className="w-36 h-36 object-contain m-2 border" />
                <div className="m-2 flex-grow">
                    <p className="text-black text-2xl font-black block">{product.title}</p>
                    <p className="text-black">{product.brand}</p>
                </div>
                <p className="m-2 text-black font-bold text-xl p-2">${product.price}</p>
            </div>
            <div className="flex items-center justify-between my-2 px-4">
                <div className="flex items-center mx-4 border border-black rounded-full">
                    <button onClick={subtractItemQuantity} className="text-black font-bold rounded-l-full px-2 border border-black hover:bg-slate-200">-</button>
                    <div className="text-black mx-2">{itemQuantity}</div>
                    <button onClick={addItemQuantity} className="text-black font-bold rounded-r-full px-2 border border-black hover:bg-slate-200">+</button>
                </div>
                <button onClick={removeFunc} className="text-red-500 mx-4">Remove</button>
            </div>
        </div>
    );
}

export default function Page(){
    const { bagItems, addToBag, removeFromBag, decrementQuantity, subTotal, itemsCount } =  useContext(ShoppingBagContext);
    const [validCode, setValidCode] = useState(false);
    const validCodeExp = /siiick15/;
    const isValidCode = (e) => {validCodeExp.test(e.target.value) ? setValidCode(true) : setValidCode(false)}

/*     useEffect(() => {
        setSubtotal(bagItems.reduce((total, item) => total + item.price * item.quantity, 0));
    }, [bagItems]); */

    return(
    <section className="flex p-8 justify-evenly">
        <div className="flex flex-col w-2/3 px-8">
        <h1 className="text-3xl mb-6 text-black font-black">Your Shopping Bag</h1>
            {bagItems.length === 0 ? (<p className="text-black">Your bag is empty.</p>) : (
                bagItems.map((item) => (

                    <BagItem key={item.productId} product={item} 
                        removeFunc={() => {
                            removeFromBag(item.productId);
                        }} 
                        subtractItemQuantity={()=> {
                            decrementQuantity(item.productId);
                        }}
                        addItemQuantity={() => {
                            addToBag(item);
                        }}/>
                    )
                )
            )}
        </div>
        <div className="flex flex-col mx-4 p-2">
            <h2 className="pb-4 text-lg">Summary</h2>
            <label className="text-medium font-semibold text-black">Promo Code</label>
            <Input type="text" placeholder="PROMOCODE" onChange={isValidCode}></Input>
            {validCode ? <p className="text-lime-700">Promocode applied!</p> : <p className="text-red-700">Invalid code</p>}
            <div className="flex flex-row justify-between text-black mt-4">
                <p className="font-semibold">Subtotal</p>
                <p className="font-semibold">${subTotal.toFixed(2)}</p>
            </div>
            <div className="flex flex-row justify-between text-black">
                <p className="font-semibold">Estimated shipping</p>
                <p className="font-semibold"> -- </p>
            </div>
            <div className="flex flex-row justify-between text-black">
                <p className="font-semibold">Estimated Tax</p>
                <p className="font-semibold"> -- </p>
            </div>
            <Link href={'/checkout'}><button className="border rounded-full text-neutral-50 font-semi-bold bg-zinc-950 p-2 px-4 mt-4 hover:bg-zinc-700">Checkout</button></Link>
        </div>
    </section>
    );
}