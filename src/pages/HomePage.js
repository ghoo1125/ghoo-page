import { Greeting } from '../Greeting';

export const HomePage = () => {
    return (
        <div>
            <h1>The Home Page!</h1>
            <Greeting name="GHOO" numberOfMessages={123} />
        </div>
    )
}
