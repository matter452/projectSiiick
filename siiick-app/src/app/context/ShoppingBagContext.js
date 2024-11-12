'use client';
import { createContext } from "react";
import { useState, useEffect } from "react";

export const ShoppingBagContext = createContext();

export default function ShoppingBagProvider({ children }) {
    const [bagItems, setBagItems] = useState([]);
    const [itemsCount, setItemsCount] = useState(0);
    const [subTotal, setSubtotal] = useState(0);

    useEffect(() => {
        const totalItems = bagItems.reduce((count, item) => count + item.quantity, 0);
        const totalCost = bagItems.reduce((total, item) => total + item.price * item.quantity, 0);
        setItemsCount(totalItems);
        setSubtotal(totalCost);
    }, [bagItems]);
    

    const addToBag = (product) => {
        setBagItems((prevItems) => {
            const itemExists = prevItems.find(item => item.productId === product.productId);
            if (itemExists) {
                return prevItems.map(item =>
                    item.productId === product.productId ? { ...item, quantity: item.quantity + 1, price: product.price, title: product.title, brand: product.brand } : item
                );
            } else {return prevItems.length > 0 ? [...prevItems, { productId: product.productId, quantity: 1, price: product.price, title: product.title, brand: product.brand }] : [{ productId: product.productId, quantity: 1, price: product.price, title: product.title, brand: product.brand  }];
            }
        });
    };

    const removeFromBag = (productId) => {
        setBagItems((prevItems) =>
            prevItems.filter(item => item.productId !== productId)
        );
    };

    const decrementQuantity = (productId) => {
        setBagItems((prevItems) => {
            return prevItems.map(item => {
                if (item.productId === productId) {
                    return item.quantity > 1
                        ? { ...item, quantity: item.quantity - 1 }
                        : { ...item, quantity: item.quantity};
                }
                return item;
            }).filter(Boolean);
        });
    };

    return (
        <ShoppingBagContext.Provider value={{ bagItems, addToBag, removeFromBag, decrementQuantity, subTotal, itemsCount }}>
            {children}
        </ShoppingBagContext.Provider>
    );
}
