'use client';
import { createContext } from "react";
import { useState } from "react";

export const ShoppingBagContext = createContext();

export default function ShoppingBagProvider({ children }) {
    const [bagItems, setBagItems] = useState([]);

    const addToBag = (product) => {
        setBagItems((prevItems) => {
            const itemExists = prevItems.find(item => item.productId === product.productId);
            if (itemExists) {
                return prevItems.map(item =>
                    item.productId === product.productId ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {return prevItems.length > 0 ? [...prevItems, { productId: product.productId, quantity: 1 }] : [{ productId: product.productId, quantity: 1 }];
            }
        });
    };

    const removeFromBag = (productId) => {
        setBagItems((prevItems) =>
            prevItems.filter(item => item.id !== productId)
        );
    };

    return (
        <ShoppingBagContext.Provider value={{ bagItems, addToBag, removeFromBag }}>
            {children}
        </ShoppingBagContext.Provider>
    );
}
