import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth';

export const Navbar = ( pros ) => {

    const navigate = useNavigate();
    const { user, logout } = useContext( AuthContext );

    const onLogout = () => {
        logout();
        navigate( 'login', {
            replace: true
        } );
    }

    const logoMarvel = `./marvel.png`;
    const logoDc = `./dc.png`;

    //TODO arreglar el efecto del scroll al entrar en la HeroPage ya que los heroes de la 2da linea hacia abajo abren su info en diagonal 

    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2 sticky-top">
                <div className="container-fluid">

                    <div className="collapse navbar-collapse text-center" id="navbarTogglerDemo03">

                        <ul className="navbar-nav me-auto mb-lg-0 d-flex align-items-center">
                            <li className="nav-item">
                                <NavLink to="marvel"

                                    className={ ( { isActive } ) => `nav-item nav-link ${ isActive ? 'active' : '' }` }>
                                    <img src={ logoMarvel } alt="Logo Marvel" className='imglogo' width="70" />
                                </NavLink>

                            </li>
                            <li className="nav-item">
                                <NavLink to="dc"
                                    className={ ( { isActive } ) => `nav-item nav-link ${ isActive ? 'active' : '' }` }>
                                    <img src={ logoDc } alt="Logo Marvel" className='imglogo' width="50" />
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="search"
                                    className={ ( { isActive } ) => `nav-item nav-link ${ isActive ? 'active' : '' }` }>
                                    <i className="fa-solid fa-magnifying-glass fa-beat-fade fa-lg" style={ { color: '#B197FC' } }></i>

                                </NavLink>
                            </li>
                        </ul>

                        <div className="text-center">
                            <ul className="navbar-nav ml-auto">
                                <span className='nav-item nav-link text-danger'><strong>Bienvenido: </strong>{ user?.name }</span>
                                <button
                                    className='nav-item nav-link btn'
                                    onClick={ onLogout }
                                ><i className="fa-solid fa-right-from-bracket fa-lg" style={ { color: '#ec9d28' } }></i>
                                </button>
                            </ul>
                        </div>
                    </div>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarTogglerDemo03"
                        aria-controls="navbarTogglerDemo03"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>
        </>
    )
};

