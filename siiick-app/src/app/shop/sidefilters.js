'use client'
import { useEffect } from 'react'
import { useState } from 'react'
import Select from '../components/select';
import ItemGrid from './itemsGrid';
import { accessoriesProducts, apparelProducts, boardsProducts, boardsSizeProducts, completesProducts, gearProducts, hardwareProducts, hoodiesProducts, menProducts, pantsAndBottomsProducts, safetyProducts, saleProducts, shoeProducts, topsAndTshirtProducts, trucksProducts, wheelsProducts, womenProducts } from '../productsData';


const sortOptions = [
    { name: 'Most Popular', href: '#', current: true },
    { name: 'Newest', href: '#', current: false },
    { name: 'Price: Low to High', href: '#', current: false },
    { name: 'Price: High to Low', href: '#', current: false },
  ]
  const subCategories = [
    { name: 'Shoes', href: '' },
    { name: 'Hoodies', href: '#' },
    { name: 'Tops & T-shirts', href: '#' },
    { name: 'Pants & Shorts', href: '#' },
    { name: 'Accessories', href: '#' },
    { name: 'All', href: '#' },
  ]
  const boardCategories = [{name: '8.2in'},{name: '8.0in'},{name: '8.25in'},{name: '8.5in'},{ name: 'All'},];
  const gearCategories = [{name: 'Complete Decks'},{name: 'Boards'},{name: 'Wheels'},{name: 'Trucks'},{name: 'Helmets & Pads'},{name: 'Hardware'},{ name: 'All'},];
  const saleCategories = [{name: 'Apparel'},{name: 'Gear'},{name: 'Boards'},{name: 'Men Apparel'},{name: 'Women Apparel'},{ name: 'All'},];


  const filters = [
    {
      id: 'category',
      name: 'Category',
      options: [
        { value: 'new-arrivals', label: 'New Arrivals', checked: false },
        { value: 'sale', label: 'Sale', checked: false },
        { value: 'limited-edition', label: 'Limited Edition', checked: true },
        { value: 'best-sellers', label: 'Best Sellers', checked: false },
        { value: 'vans-collab', label: 'Vans X Siiick', checked: false },
      ],
    },
    {
      id: 'size',
      name: 'Size',
      options: [
        { value: 'small', label: 'small', checked: false },
        { value: 'medium', label: 'medium', checked: false },
        { value: 'large', label: 'large', checked: false },
        { value: 'x-large', label: 'x-large', checked: false },
        { value: '2x-large', label: '2x-large', checked: false },
      ],
    },
  ]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function TopLevelLinks({ list, categorySelected, shop })
{
  const [activeLink, setActiveLink] = useState('');
  const handleClick = (itemName) => () => {categorySelected(itemName)
    setActiveLink(itemName)}
    return(
        <ul className=''>
            {list.map((item) => (<li className='text-black font-medium'><button className={`${activeLink === item.name ? 'underline font-semibold' : ''} hover:underline`} key={item.name} onClick={handleClick(item.name)}>{shop === 'boards' ? `${item.name}` : item.name}</button></li>))}
        </ul>);
}

export default function SideFilter({products, shop}) {
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
    const [shopProducts, setShopProducts] = useState(products);
    const [sortOption, setSortOption] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('');
    const [currentShop, setCurrentShop] = useState(shop);
    const [categoryList, setCategoryList] = useState([]);
    const [categoryName, setCategoryName] = useState('');

    const handleSortOption = (option) => {setSortOption(option.value)}
    const filterProducts = (filterChoice) => {setCategoryFilter(filterChoice)}

    useEffect(() => {
      switch (currentShop){
        case 'apparel':
          setCategoryList(subCategories)
          setCategoryName('Apparel');
          break;
        case 'sale':
          setCategoryList(saleCategories)
          setCategoryName('On Sale');
          break;
        case 'gear':
          setCategoryList(gearCategories)
          setCategoryName('Gear');
          break;
        case 'boards':
          setCategoryList(boardCategories)
          setCategoryName('Board Sizes');
          break;
      }

    },[currentShop, categoryList])

    useEffect(() => {
      switch (categoryFilter){
        case 'Shoes':
          setShopProducts(shoeProducts(products))
          break;
        case 'Hoodies':
          setShopProducts(hoodiesProducts(products))
          break;
        case 'Tops & T-shirts':
          setShopProducts(topsAndTshirtProducts(products))
          break;
        case 'Pants & Shorts':
          setShopProducts(pantsAndBottomsProducts(products))
          break;
        case 'Accessories':
          setShopProducts(accessoriesProducts(products))
          break;
        case 'Boards':
          setShopProducts(boardsProducts(products))
          break;
        case 'Wheels':
          setShopProducts(wheelsProducts(products))
          break;
        case 'Trucks':
          setShopProducts(trucksProducts(products))
          break;
        case 'Helmets & Pads':
          setShopProducts(safetyProducts(products))
          break;
        case 'Hardware':
          setShopProducts(hardwareProducts(products))
          break;
        case 'Complete Decks':
          setShopProducts(completesProducts(products))
          break;
        case 'Men Apparel':
          setShopProducts(saleProducts(menProducts))
          break;
        case 'Women Apparel':
          setShopProducts(saleProducts(womenProducts))
          break;
        case 'Apparel':
          setShopProducts(saleProducts(apparelProducts))
          break;
        case 'Gear':
          setShopProducts(saleProducts(gearProducts))
          break;
        case '8.2in':
          setShopProducts(boardsSizeProducts(products,"8.2"))
          break;
        case '8.0in':
          setShopProducts(boardsSizeProducts(products,"8.0"))
          break;
        case '8.25in':
          setShopProducts(boardsSizeProducts(products,"8.25"))
          break;
        case '8.5in':
          setShopProducts(boardsSizeProducts(products,"8.5"))
          break;
        default:
          setShopProducts(products)
      }
    },[categoryFilter, products])
    


    return (
      <section className='bg-white'>
        <div className='flex flex-row justify-between mx-8 py-8'>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 mx-4">{categoryName} | {categoryFilter}</h1>
              <Select className={'mx-8'} options={sortOptions} selectedValue={handleSortOption} />
        </div>
      <div className="flex flex-row bg-white">
          <div className="flex flex-col mx-4 px-8">
            <h2 className='font-semibold text-xl'>{categoryName}</h2>
            <TopLevelLinks list={categoryList} categorySelected={filterProducts}/>
            <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
              </div>
            </div>
  
            <section aria-labelledby="products-heading" className="pb-24 pt-6 flex flex-col w-2/3">
              <h2 id="products-heading" className="sr-only">
                Products
              </h2>
  
              <div className="">
                {/* Filters */}
                <ItemGrid products={shopProducts}/>
              </div>
            </section>
          </div>
          </section>
    )
  }