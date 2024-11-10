import { gearProducts } from "@/app/productsData";
import SideFilter from "../sidefilters";

const products = gearProducts;

export default function Page(){
    return (
    <section>
        <SideFilter products={products}/>
    </section>)
}