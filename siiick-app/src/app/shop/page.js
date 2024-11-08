import { allProducts } from "../productsData"
import SideFilter from "./sidefilters"

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
const products = allProducts;

export default function Page(){
    return (
    <section>
        <SideFilter products={products}/>
    </section>)
}