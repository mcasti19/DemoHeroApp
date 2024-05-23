import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context";
import { useForm } from "../../hooks/userForm";

import '../auth.css';

export const LoginPage = () => {

    const { user, password, onInputChange } = useForm( {
        user: '',
        password: '',

    } );
    const { login } = useContext( AuthContext );
    const navigate = useNavigate();

    const onLogin = () => {

        const lastPath = localStorage.getItem( 'lastPath' ) || '/';
        login( user );
        navigate( lastPath, {
            replace: true
        } );
    }

    return (
        <>
            <div className="login_page">
                <img src="./marvelVSdc.jpg" alt="" className="img_logo_large" />
                <img src="./fondologin2.jpeg" alt="" className="img_logo_small" />
                <div className="content_login">
                    <h1 className="title_bienvenido">Bienvenido</h1>
                    <hr />

                    <form action="" onSubmit={ onLogin } className="form_login">
                        <input
                            type="text"
                            name="user"
                            id="user"
                            placeholder="Ingresa tu Usuario"
                            className="form-control mb-2"
                            autoComplete="off"
                            value={ user }
                            onChange={ onInputChange }
                            required
                        />

                        <input
                            type="password"
                            name="password"
                            id="password"
                            className="form-control mb-2"
                            placeholder="Ingresa tu password"
                            value={ password }
                            onChange={ onInputChange }
                            required
                        />

                        <button className="btn btn-primary">
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}
