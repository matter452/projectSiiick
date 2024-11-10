import { saleProducts } from "@/app/productsData";
import SideFilter from "../sidefilters";

const products = saleProducts;

export default function Page(){
    return (
    <section>
        <SideFilter products={products}/>
    </section>)
}