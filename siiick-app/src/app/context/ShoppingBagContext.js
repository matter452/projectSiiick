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
                    item.productId === product.productId ? { ...item, quantity: item.quantity + 1, price: product.price, title: product.title, brand: product.brand, imgPath: product.imgPath } : item
                );
            } else {return prevItems.length > 0 ? [...prevItems, { productId: product.productId, quantity: 1, price: product.price, title: product.title, brand: product.brand, imgPath: product.imgPath }] : [{ productId: product.productId, quantity: 1, price: product.price, title: product.title, brand: product.brand, imgPath: product.imgPath  }];
            }
        });
    };

    const removeQuantity = (product) => {
        setBagItems((items) => {
            return items
                .map((item) => {
                    // Only decrement quantity if the product matches
                    if (item.productId === product.productId) {
                        return { ...item, quantity: item.quantity - 1 };
                    }
                    return item;
                })
                .filter(item => item.quantity <= 0);
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
