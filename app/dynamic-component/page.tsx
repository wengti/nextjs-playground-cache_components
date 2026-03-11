import { Suspense } from "react";
import DynamicComponent from "./DynamicComponent";

export default async function Dynamic(){

    console.log('---[INFO] The Dynamic Component Page is Loading...')

    return (
        <section>
            <h1>This is a Dynamic Component Page</h1>
            <Suspense fallback={<h1>Waiting for data...</h1>}>
                <DynamicComponent />
            </Suspense>
        </section>
    )
}