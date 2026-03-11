
type PropsType = {
    params: Promise<{
        id: string
    }>
}

export function generateStaticParams(){
    return [{id: '2'}]
}

export default async function GspId({params}: PropsType){
    'use cache'

    const {id} = await params
    console.log(`---[INFO] Rendering GSP-ID ${id}...---`)

    return (
        <section className='my-4'>
            Here is the Page for ID {id}
        </section>
    )
}