import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Auth from '../../lib/Auth';

const Navbar = ({ history }) => {

  function logout(e) {
    e.preventDefault();

    Auth.logout();
    history.push('/');
  }

  return(
    <nav>
      <div className="left">
        {Auth.isAuthenticated() && <Link to="/message" className="nav-link">Trade Your Card</Link>}
        {Auth.isAuthenticated() && <Link to="/profile" className="nav-link">Profile</Link>}
      </div>
      <Link to="/cards" className="traid">CONTACT</Link>
      <div className="right">
        {!Auth.isAuthenticated() && <Link to="/login" className="nav-link">Login</Link>}
        {!Auth.isAuthenticated() && <Link to="/register" className="nav-link">Register</Link>}
        {Auth.isAuthenticated() && <a href="#" onClick={logout} className="nav-link">Logout</a>}
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
