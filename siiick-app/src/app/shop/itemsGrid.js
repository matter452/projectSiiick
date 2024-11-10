'use client'
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

export function Card({ product }){
    return (
    <div className='bg-slate-50 border-slate-100 border rounded p-1 border-slate-300 min-w-24 max-w-sm'>
        <Link aria-label={`View details for ${product.name} in ${product.productCategory} ${product.subCategory}`} href={{ pathname: `/shop/${product.productCategory}/${product.subCategory}/${product.productId}`}}>
        <div className='relative w-100 mb-4 p-8'>
        <img src={product.imgPath} fill={true} className="object-contain"></img>
        </div>
        <div className='p-4'>
        <span className='text-pink-700'>{product.special}</span>
        <h5 className='text-black font-black'>{product.title}</h5>
        <span className='text-black'>Available Styles: {product.stylesCount}</span>
        <br />
        <span className='text-black font-semibold'>${product.price}</span>
        </div>
        </Link>
    </div>
    )
};

export default function ItemGrid({ products }) {
    return (
        <div className='col-span-3 grid grid-cols-3 gap-x-4 place-content-center gap-y-2 m-2'>
            {products.map((product)=>(
                <Card product={product} />
            ))}
        </div>
    );
}