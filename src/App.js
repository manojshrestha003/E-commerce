import Navbar from './components/Navbar/Navbar';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShopCategory from './components/Pages/ShopCategory';
import Shop from './components/Pages/Shop';
import Product from './components/Pages/Product';
import Cart from './components/Pages/Cart';
import LoginSignup from './components/Pages/LoginSignup';
import Footer from './components/Footer/Footer';
import men_banner from './components/assets/banner_mens.png'
import women_banner from './components/assets/banner_women.png'

import kids_banner from './components/assets/banner_kids.png'
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path = '/'element = {<Shop/>}/>
      <Route path = '/mens'element = {<ShopCategory banner = {men_banner} category = "men"/>}/>
      <Route path = '/womens'element = {<ShopCategory banner = {women_banner} category = "women" />}/>
      <Route path = '/kids'element = {<ShopCategory banner = {kids_banner} category = "kid" />}/>
      <Route path = '/product'element = {<Product/>}/>
      <Route path = 'product/:productId' element = {<Product/>}/>
      <Route path='/cart ' element = {<Cart/>}/>
      <Route path='/login' element = {<LoginSignup/>}/>

      </Routes>
      <Footer/>
      
      </BrowserRouter>
      
    </div>
    
      
    
  );
}

export default App;
