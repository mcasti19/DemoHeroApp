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
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2" >

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
        </nav>
    )
};

