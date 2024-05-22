
import { HeroCard } from "./";
import { getHeroesByPublisher } from "../helpers"
import { useMemo } from "react";

import '../heroes.css';


export const HeroList = ( { publisher } ) => {
    const heroes = useMemo( () => getHeroesByPublisher( publisher ), [publisher] );

    return (
        <div className="row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 g-4 hero_list" >
            {
                heroes.map( hero => (
                    <HeroCard key={ hero.id }
                        { ...hero }
                    />
                ) )
            }
        </div>
    )
}
