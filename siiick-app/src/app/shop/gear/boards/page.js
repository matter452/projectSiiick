import { allProducts, boardsProducts, gearProducts } from "@/app/productsData";
import SideFilter from "../../sidefilters";

const products = boardsProducts(gearProducts);

export default function Page(){
    return (
    <section>
        <SideFilter products={products} shop='boards' />
    </section>)
}