import { types } from "../types/types";

export const authReducer = ( state = {}, action ) => {

    switch ( action.type ) {
        case types.login:
            return {
                ...state, // Se exparse todo el state por si el dia de mañana hay mas propiedades y no se desea perderlas al cambiar el state
                logged: true,
                user: action.payload
            };

        case types.logout:
            return {
                logged: false,
            };
        
        default:
            return state;
    }
}; 