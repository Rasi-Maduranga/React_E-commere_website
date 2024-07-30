
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory'
import Shop from './Pages/Shop';
import About from './Pages/About';
import Product from './Pages/Product'
import Contact from './Pages/Contact';
import Footer from './Component/Footer/Footer';
import Category from './Component/Category/Category';
import apple_banner from './Component/Assets/applebanner.jpg'
import samsung_banner from './Component/Assets/samsungbanner.jpg'
import LoginSignup from './Pages/LoginSignup';
import Cart from './Pages/Cart';
import Checkout from './Component/Checkout/Checkout';

function App() {
  return (
    <div>
      <BrowserRouter>
      
      <Navbar/>
      <Category/>
      <Routes>

        <Route path='/' element={<Shop/>}></Route>
        <Route path='/abouts' element={<About/>}></Route>
        <Route path='/contacts' element={<Contact/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/login' element={<LoginSignup/>}></Route>

        <Route path='/apples' element={<ShopCategory banner={apple_banner} category="apple"/>}></Route>
        <Route path='/samsungs' element={<ShopCategory banner={samsung_banner} category="samsung"/>}></Route>
        <Route path='/redmis' element={<ShopCategory banner={apple_banner} category="redmi"/>}></Route>
        <Route path='/sonys' element={<ShopCategory banner={apple_banner} category="sony"/>}></Route>
        <Route path='/realmes' element={<ShopCategory banner={apple_banner} category="realme"/>}></Route>
        <Route path='/oppos' element={<ShopCategory banner={apple_banner} category="oppo"/>}></Route>
        <Route path='/vivos' element={<ShopCategory banner={apple_banner} category="vivo"/>}></Route>
        <Route path='/pocos' element={<ShopCategory banner={apple_banner} category="poco"/>}></Route>
        
        <Route path='/product/:productId' element={<Product/>}></Route>

        <Route path='/checkout' element={<Checkout/>}></Route>

      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
