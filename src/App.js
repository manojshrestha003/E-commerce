import Navbar from './components/Navbar/Navbar';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShopCategory from './components/Pages/ShopCategory';
import Shop from './components/Pages/Shop';
import Product from './components/Pages/Product';
import Cart from './components/Pages/Cart';
import LoginSignup from './components/Pages/LoginSignup';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path = '/'element = {<Shop/>}/>
      <Route path = '/mens'element = {<ShopCategory category = "men"/>}/>
      <Route path = '/womens'element = {<ShopCategory category = "women" />}/>
      <Route path = '/kids'element = {<ShopCategory category = "kid" />}/>
      <Route path = '/product'element = {<Product/>}/>
      <Route path = ':productId' element = {<Product/>}/>
      <Route path='/cart ' element = {<Cart/>}/>
      <Route path='/login' element = {<LoginSignup/>}/>

      </Routes>
      
      
      </BrowserRouter>
      
    </div>
    
      
    
  );
}

export default App;
