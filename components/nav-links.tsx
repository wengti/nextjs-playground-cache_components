import Link from "next/link";

export default function NavLinks(){
    return (
        <section className='underline text-violet-500'>
            <div className='flex flex-col gap-4'>
                <h1 className='no-underline text-white'>Experiment 1</h1>
                <Link href='/'>Go Home</Link>
                <Link href='/static'> Go to a static route </Link>
                <Link href='/dynamic'> Go to a dynamic route </Link>
                <Link href='/dynamic-component'> Go to a dynamic route that will spend 5s to return a dynamic component</Link>
                <Link href='/gsp/1'>Go to GSP ID-1</Link>
            </div>
        </section>
    )
}