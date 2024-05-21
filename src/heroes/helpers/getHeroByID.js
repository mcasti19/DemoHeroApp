import { heroes } from '../data';

export const getHeroByID = ( id ) => {
    return heroes.find( hero => hero.id === id );
}
