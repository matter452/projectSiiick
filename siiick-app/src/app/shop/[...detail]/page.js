import MyButton from "@/app/components/button";
import Dropdown from "@/app/components/dropdown"
import { allProducts } from "@/app/productsData";

function fetchProductById(productId) {
    return new Promise((resolve, reject) => {
            const product = allProducts.find(item => item.productId === productId);
            if (product) {
                resolve(product);
            } else {
                reject(new Error("Product not found"));
            }
    });
}

export default async function Page({ params }){
    const detail = (await params).detail
    const product = await fetchProductById(detail[2])
    return (
    <section>
    
    <div className="flex flex-row justify-center text-black">
        <div className="flex flex-col min-h-40">
            <div>
                <img src={product.imgPath} fill={true} className="object-contain h-72 w-60 m-2"></img>
                <div className="flex flex-row">
                    <img className="size-20 m-2"></img>
                    <img className="size-20 m-2"></img>
                    <img className="size-20 m-2"></img>
                </div>
            </div>
        </div>
        <div className="flex flex-col m-16">
        <h1 className="text-3xl text-black font-black">{product.title}</h1>
        <span className="font-bold">{product.price}</span>
        <h2 className="font-bold mt-16">Description</h2>
        <p className="mb-16">{product.description}</p>
        <h3 className="font-bold">Styles Available</h3>
        <div className="flex flex-row mb-8">
            <img className="m-2 size-8"></img>
            <img className="m-2 size-8"></img>
            <img className="m-2 size-8"></img>
        </div>
        {/* <Dropdown list={styles}/> */}
        <MyButton text="Add to Bag" />
        </div>

    </div>
    </section>
)
}