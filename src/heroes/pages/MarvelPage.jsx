import { HeroList } from "../components";

import '../heroes.css';

const publisher = 'Marvel Comics';

export const MarvelPage = () => {

    return (
        <>
            <div className="margel_page">
                <h1>Marvel Comics</h1>
                <hr />

                { <HeroList publisher={ publisher } /> }
            </div>

        </>
    )
}
