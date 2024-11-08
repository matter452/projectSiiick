export default async function Page({ params }){
    const detail = (await params).detail
    return <h1 className="text-color-red">Hello this is {detail[0]}</h1>
}