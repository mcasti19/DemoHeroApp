import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroByID } from "../helpers";

import '../heroes.css';

export const HeroPage = () => {

    const { id } = useParams();
    const hero = useMemo( () => getHeroByID( id ), [id] );
    const navigate = useNavigate();

    const onNavigateBack = () => {
        navigate( -1 );
    }

    if ( !hero ) {
        return <Navigate to="/marvel" />
    }
    //TODO arreglar el efecto del scroll al entrar en la HeroPage ya que los heroes de la 2da linea hacia abajo abren su info en diagonal 

    return (
        <div className="hero_page">
            <div className="hero_page_content row">


                <div className="col-12 col-md-4 col-lg-4">
                    <img
                        src={ `./heroes/${ id }.jpg` }
                        alt={ hero.superhero }
                        className="img-thumbnail animate__animated animate__fadeInLeft"
                    />
                </div>


                <div className="col-lg-8 col-md-8 col-12 animate__animated animate__fadeInUp">
                    <h3>{ hero.superhero }</h3>

                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><b>Alter ego:</b> { hero.alter_ego }</li>
                        <li className="list-group-item"><b>First appearance:</b> { hero.first_appearance }</li>
                        <li className="list-group-item"><b>Publisher: </b> { hero.publisher }</li>
                    </ul>

                    <h4 className="mt-3">Characters</h4>
                    <p>{ hero.characters }</p>

                    <button
                        className="btn btn-outline-primary"
                        onClick={ onNavigateBack }
                    >
                        Back
                    </button>
                </div>

            </div>
        </div>
    )
};
