import { womenProducts } from "@/app/productsData";
import SideFilter from "../sidefilters";

const products = womenProducts;

export default function Page(){
    return (
    <section>
        <SideFilter products={products} shop='apparel' />
    </section>)
}