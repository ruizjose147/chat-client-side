import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../services/firebase';

function Header() {
  return (
    <header>
      <nav className="navbar navbar-dark bg-dark fixed-top">
        <Link className="navbar-brand mx-auto" to="/">Tu Chat...</Link>
        <div id="navbarNavAltMarkup">
            {auth().currentUser
            ? <div>
            
            <button className="btn btn-danger mr-5" onClick={() => auth().signOut()}>salir</button>
            </div>
            : <div>
            <Link className="btn mr-3 text-white" to="/login">Iniciar sesión</Link>
            <Link className="btn mr-3 text-white" to="/signup">Registrarse</Link>
            </div>}
        </div>
      </nav>
    </header>
  );
}

export default Header;