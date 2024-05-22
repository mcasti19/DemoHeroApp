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

    return (
        <>
            {/* <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2" >

                <Link className="navbar-brand" >Asociaciones</Link>

                <div className="navbar-collapse">
                    <div className="navbar-nav">

                        <NavLink to="marvel"
                            className={ ( { isActive } ) => `nav-item nav-link ${ isActive ? 'active' : '' }` }>Marvel
                        </NavLink>

                        <NavLink to="dc"
                            className={ ( { isActive } ) => `nav-item nav-link ${ isActive ? 'active' : '' }` }>DC
                        </NavLink>

                        <NavLink to="search"
                            className={ ( { isActive } ) => `nav-item nav-link ${ isActive ? 'active' : '' }` }>Search
                        </NavLink>

                    </div>
                </div>

                <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                    <ul className="navbar-nav ml-auto">
                        <span className='nav-item nav-link text-warning'><strong>Bienvenido:</strong> { user?.name }</span>

                        <button
                            className='nav-item nav-link btn'
                            onClick={ onLogout }
                        >Logout
                        </button>
                    </ul>
                </div>
            </nav> */}

            <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
                <div className="container-fluid">

                    <div className="collapse navbar-collapse text-center" id="navbarTogglerDemo03">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <Link className="navbar-brand" >Asociaciones</Link>
                            <li className="nav-item">
                                <NavLink to="marvel"
                                    className={ ( { isActive } ) => `nav-item nav-link ${ isActive ? 'active' : '' }` }>Marvel
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="dc"
                                    className={ ( { isActive } ) => `nav-item nav-link ${ isActive ? 'active' : '' }` }>DC
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="search"
                                    className={ ( { isActive } ) => `nav-item nav-link ${ isActive ? 'active' : '' }` }>Search
                                </NavLink>
                            </li>
                        </ul>
                        <div className="text-center">
                            <ul className="navbar-nav ml-auto">
                                <span className='nav-item nav-link text-warning'><strong>Bienvenido:</strong> { user?.name }</span>
                                <button
                                    className='nav-item nav-link btn'
                                    onClick={ onLogout }
                                >Logout
                                </button>
                            </ul>
                        </div>
                    </div>
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarTogglerDemo03"
                        aria-controls="navbarTogglerDemo03"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>
        </>

    )
};

