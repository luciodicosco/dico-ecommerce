import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand"><Link to="./">Dico E-Commerce</Link></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav mx-auto">
        <li className="nav-item">
          <a className="nav-link"><Link to="./category/:id">Categoria 1</Link></a>
        </li>
        <li className="nav-item">
          <a className="nav-link"><Link to="./category/:id">Categoria 2</Link></a>
        </li>
        <li className="nav-item">
          <a className="nav-link"><Link to="./category/:id">Categoria 3</Link></a>
        </li>
      </ul>
      <CartWidget></CartWidget>
    </div>
  </div>
</nav>
    </div>
  );
}

export default Navbar;