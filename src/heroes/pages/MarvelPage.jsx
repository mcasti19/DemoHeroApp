import { HeroList } from "../components"

const publisher = 'Marvel Comics';

export const MarvelPage = () => {

    return (
        <>
            <h1>Marvel Comics</h1>
            <hr />

            { <HeroList publisher={ publisher } /> }
        </>
    )
}
