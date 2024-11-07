'use client'
import Image from 'next/image';
import * as React from 'react';
import ItemGrid from './itemsGrid';

const mockProduct = {
    "productId": "09",
    "productCategory": "Skateboards",
    "special": "New Arrival",
    "price": "$100",
    "imgPath": "/img/drawer-hat.jpg",
    "title": "Siiick Pro Deck",
    "description": "A super siiick board for amateurs and aspiring pros.",
    "stylesCount": "2",
    "sizes": "8.2",
    "brand": "So Siiick",
    "color": "White",
    "tags": "Pro",
}

export default function ShopPage()
{
    return (
        <div className=''>
            <ItemGrid product={mockProduct}/>
        </div>
    )
}