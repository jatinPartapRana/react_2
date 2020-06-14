import React from 'react';
import GreenKart from '../../photos/nature.svg';
import  Cart from '../../photos/supermarket.svg';
import {Link} from 'react-router-dom';
import ToggleHeader from './ToggleHeader';
import './NavBar.scss';
const NavBar = () =>{
        return(
            <nav className="navbar navbar-light navbar-expand-lg bg-dark">
            <div className="container-fluid" style={{"padding":"0"}}>
            <Link className="navbar-brand  ml-5" to='/'><img src={GreenKart} alt="GreenKart" ></img></Link>
            <ToggleHeader></ToggleHeader>

  <div className="collapse navbar-collapse" id="header">
    <ul className="navbar-nav m-auto">
      <li className="nav-item active">
      <Link className="nav-link text-white text-uppercase ml-5 mt-2 mr-5"  to='/' >Home&nbsp;<i class="fas fa-home"></i> <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link text-white text-uppercase ml-5 mt-2  mr-5" to='/greenKartShopping'>SHOP</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link text-white text-uppercase ml-5 mt-2 mr-5" to='/signin'>LOGIN</Link>
    </li>
    <li className="nav-item">
    <Link className="navbar-brand  ml-5 mt-2" to='/cart'><img src={Cart} alt="Cart" ></img></Link>
  </li>
    </ul>
  </div>
  </div>
</nav>
        )
};

export default NavBar;