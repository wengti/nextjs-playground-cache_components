export default async function Dynamic(){

    console.log('---[INFO] Loading Dynamic Page---')
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/10', {cache: 'no-store'})
    const data = await res.json()

    return (
        <section>
            <h1>This is a Dynamic Page</h1>
        </section>
    )
}