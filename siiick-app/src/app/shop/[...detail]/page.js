import Dropdown from "@/app/components/dropdown"

export default async function Page({ params }){
    const detail = (await params).detail
    return (
    <section>
    
    <div className="flex flex-row">
        <div className="flex flex-col">
            <div>
                <img src={product.imgPath} fill={true} className="object-contain"></img>
                <div className="flex flex-row">
                    <img></img>
                    <img></img>
                    <img></img>
                </div>
            </div>
        </div>
        <div className="flex flex-col">
        <h1 className="text-color-red">Hello this is {detail[0]}</h1>
        <span>{product.styles}</span>
        <span className="font-bold"></span>
        <h2 className="font-bold">Description</h2>
        <p>{product.description}</p>
        <h3 className="font-bold">Styles</h3>
        <div className="flex flex-row">
            <img></img>
            <img></img>
            <img></img>
        </div>
        <Dropdown list={styles}/>
        </div>
    </div>
    </section>
)
}