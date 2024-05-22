import { HeroList } from "../components"

const publisher = 'DC Comics';

export const DCPage = () => {

    return (
        <>
            <div className="dc_page">
                <h1>DC Comics</h1>
                <hr />

                { <HeroList publisher={ publisher } /> }
            </div>
        </>
    )
};
