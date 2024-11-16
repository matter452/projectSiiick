import Link from "next/link"

export default function Page(){
    return (
        <>
        <section className="flex flex-col space-y-4 text-neutral-900 text-center mt-8">
            <h1 className="text-4xl font-black text-neutral-900">Success</h1>
            <p className="text-xl text-emerald-700 font-semibold">Your order has been successfully placed</p>
            <h2 className="font-semibold">Thank you for your purchase.</h2>
            <p> Estimated delivery on Nov 26</p>
            <p>An email has been sent to your email address with confirmation.</p>
            <Link href={'/shop'}><button className="border rounded-full text-neutral-50 font-semi-bold bg-zinc-950 p-2 px-4 mt-4 hover:bg-zinc-700">Back to Store</button></Link>
        </section>
        </>
    )
}