import { boardsProducts } from "@/app/productsData";
import SideFilter from "../../sidefilters";

const products = boardsProducts;

export default function Page(){
    return (
    <section>
        <SideFilter products={products}/>
    </section>)
}