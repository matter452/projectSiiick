// DrawerNavMenu.js
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

function LinkList({ list, listName }) {
    return (
      <div className='flex flex-col'>
        <h4>{listName}</h4>
      <ul className='mx-2 list-none'>
      {list.map((element, index) => (
        <li key={index} className='hover:text-blue-500'><Link href="">{element}</Link></li>
      ))}
      </ul>
      </div>
    );
}

export default function DrawerNavMenu(){
  const shoes = ['Skate', 'Lifestyle', 'limited editions'];
  const tops = ['Graphic Tees', 'Long Sleeve', 'Collabs', 'Hoodies & Sweaters']; 
  const bottoms = ['Jeans', 'Shorts', 'Pants', 'Lounge'];
  return (
  <div className='flex flex-row justify-evenly w-screen'>
    <div className='flex flex-col mr-4'>
      <h3>New Drops</h3>
      <h3>Best Sellers</h3>
      <h3>Sales</h3>
    </div>
    <LinkList list={ shoes } listName={'Shoes'} />
    <LinkList list={tops} listName={'Tops'} />
    <LinkList list={bottoms} listName={'Bottoms'} />
    <div className='flex flex-col'>
      <div className='object-cover bg-drawer-hat min-h-24 min-w-24'></div>
    </div>
  </div>)
};
