import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import CartWidget from './CartWidget';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Dico E-Commerce</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav mx-auto">
        <li className="nav-item">
          <a className="nav-link" href="#">Nike</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Adidas</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Puma</a>
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