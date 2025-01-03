import React , {useContext,useRef, useState}from 'react';
import './Navbar.css'; 
import logo from '../assets/logo.png';
import cart_icon from '../assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
import nav_dropdowns from '../assets/nav_dropdowns.png'


const Navbar = () => {
  const [menu , setMenu ] = useState("shop");
  const {getTotalCartItems} = useContext(ShopContext)
  const menuRef = useRef();
  const dropdownToggle =(e)=>{
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');

  }
  return (
    <div className='navbar'>
      <div className='navLogo'>
        <img src={logo} alt="Logo" />
        <p>SHOPPER</p>
      </div>
      <img  className='navDropDown' onClick={dropdownToggle} src= {nav_dropdowns} alt="" />
      <ul ref= {menuRef} className="nav-menu">
        <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration: 'none'}} to = '/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("mens")}}><Link  style={{textDecoration: 'none'}} to = '/mens'>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration: 'none'}} to = '/womens'>women</Link>{menu==="womens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("kids")}}><Link  style={{textDecoration: 'none'}} to = '/Kids'>Kid</Link>{menu==="kids"?<hr/>:<></>}</li>
       
        
      </ul>
      <div className="nav-login-cart">

      {localStorage.getItem('auth-token')?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Log out</button>:<Link to = '/login'><button>Login</button></Link> }
       
       <Link to = '/cart'><img src={cart_icon} alt="Cart" /></Link> 
        <div className="nav-cart-count">
          {getTotalCartItems()}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
