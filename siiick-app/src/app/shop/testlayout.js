'use client'
import Image from 'next/image';
import * as React from 'react';
import ItemGrid from './itemsGrid';
import SideFilter from './sidefilters';

const mockProduct = {
    "productId": "09",
    "productCategory": "Skateboards",
    "subCategory": "Completes",
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

export default function ShopPage({children})
{
    return (
        <div className=''>
            {children}
            <SideFilter products={mockProduct}/>
           {/* <ItemGrid product={mockProduct}/> */}
        </div>
    )
}