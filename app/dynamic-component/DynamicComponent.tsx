export default async function DynamicComponent() {



    console.log('---[INFO] The Dynamic Component in the Page Begins to Load---')

    const result = await new Promise((resolve) => {
        setTimeout(async () => {
            console.log('5 seconds are loaded...')
            resolve('success')
        }, 5000)
    })

    const res = await fetch('https://jsonplaceholder.typicode.com/posts/10', { cache: 'no-store' })
    const data = await res.json()
    console.log('---[INFO] The Dynamic Component in the Page Completes Loading---')



    return (
        <h1>The loaded data: {data.title}</h1>
    )
}