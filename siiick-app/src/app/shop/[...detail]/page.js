import { allProducts } from "@/app/productsData";
import AddProductToBag, { addToBag } from '@/app/components/bagUseContext';

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
    const detail = (await params).detail;
    const product = await fetchProductById(detail[2]);


    return (
    <section className='mt-4'>
    <div className="flex flex-row justify-center text-black">
        <div className="flex flex-col min-h-40">
            <div>
                <img alt={product.title} src={product.imgPath} fill={true} className="object-contain h-72 w-60 m-2"></img>
                <div className="flex flex-row">
                    <img className="size-20 m-2"></img>
                    <img className="size-20 m-2"></img>
                    <img className="size-20 m-2"></img>
                </div>
            </div>
        </div>
        <div role='contentinfo' className="flex flex-col m-16">
        <h1 className="text-3xl text-black font-black mb-2">{product.title}</h1>
        <span className="font-bold">${product.price}</span>
        <h2 className="font-bold mt-16">Description</h2>
        <p aria-label={`Product description: ${product.description}`} className="mb-16">{product.description}</p>
        <h3 className="font-bold">Styles Available</h3>
        <div className="flex flex-row mb-8">
            <img className="m-2 size-8"></img>
            <img className="m-2 size-8"></img>
            <img className="m-2 size-8"></img>
        </div>
        <AddProductToBag product={product}/>
        </div>

    </div>
    </section>
)
}