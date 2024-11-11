import { allProducts, saleProducts } from "@/app/productsData";
import SideFilter from "../sidefilters";

const products = saleProducts(allProducts);

export default function Page(){
    return (
    <section>
        <SideFilter products={products} shop='sale'/>
    </section>)
}