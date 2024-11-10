import { menProducts } from "@/app/productsData";
import SideFilter from "../sidefilters";

const products = menProducts;

export default function Page(){
    return (
    <section>
        <SideFilter products={products}/>
    </section>)
}