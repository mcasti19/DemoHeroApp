import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context";
import { useForm } from "../../hooks/userForm";


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
        <div className="container mt-5 d-flex flex-column align-items-center justify-content-center" style={{height:'100vh'}}>

            <h1 className="">Login</h1>
            <hr />

            <form action="" onSubmit={ onLogin } className="d-flex flex-column">
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
    )
}
