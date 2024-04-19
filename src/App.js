import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import Area from './components/Area';
import BestSeller from './components/BestSeller';
import Testimonial from './components/Testimonial';
import TopRated from './components/TopRated';
import Brand from './components/Brand';
import Blog from './components/Blog';
import './App.css';
import Contact from './components/Contact';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Products from './components/Products';
import Dresses from './components/items/Dresses';
import Top from './components/items/Tops';
import OuterWear from './components/items/OuterWear';
import Activewear from './components/items/ActiveWear'
import Heels from './components/items/Heels';
import Sneakers from './components/items/Sneakers';
import Boots from './components/items/Boots';
import Sandals from './components/items/Sandals';
import HandBag from './components/items/HandBag';
import Jewellery from './components/items/Jewellery';
import Hats from './components/items/Hats';
import Scarves from './components/items/Scarves'
import Tshirts from './components/mens/Tshirts';
import Shirt from './components/mens/Shirt';
import Pants from './components/mens/Pants';
import Jeans from './components/mens/Jeans';
import DressShoe from './components/mens/DressShoe';
import CasualShoe from './components/mens/CasualShoe';
import SneakerMen from './components/mens/SneakerMen';
import BootsMen from './components/mens/BootsMen';
import Watches from './components/mens/Watches';
import Wallets from './components/mens/Wallets';
import Belts from './components/mens/Belts';
import HatsMen from './components/mens/HatsMen';
import Signup from './components/signup';
import Login from './components/Login';
import PrivateRoute from './components/includes/PrivateRoute';
import OrderList from "./components/OrderList";

export const UserContext = React.createContext();
function App() {

  const [userData, setUserData] = useState({});

  const updateUserData = (action) => {
    switch (action.type) {
      case 'LOGOUT':
        setUserData(null);
        localStorage.clear();
        break;
      case 'LOGIN':
        setUserData(action.payload);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem('user_data')));
  }, []);


  return (
    <UserContext.Provider value={{ userData, updateUserData }}>
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup/" element={<Signup />} />
        <Route path="/login/" element={<Login />} />

        <Route path="/area/" element={<Area />} />
        <Route path="/best/" element={<BestSeller />} />
        <Route path="/testimonial/" element={<Testimonial />} />
        <Route path="/top/" element={<TopRated />} />
        <Route path="/products/" element={<Products />} />
        <Route path="/brand/" element={<Brand />} />
        <Route path="/blog/" element={<Blog />} />
        <Route path="/contact/" element={<Contact />} />
        <Route path="/order_list/" element={<OrderList />} />
        <Route path='/product/:id/' element={<PrivateRoute />}>
          <Route path="/product/:id/" element={<ProductDetail />} />
          </Route>
        <Route path="/cart/" element={<Cart />} />
        
        {/* Items Start */}
        <Route path="/dress/" element={<Dresses />} />
        <Route path="/tops/" element={<Top />} />
        <Route path="/outer/" element={<OuterWear />} />
        <Route path="/active/" element={<Activewear />} />
        <Route path="/heels/" element={<Heels />} />
        <Route path="/sneakers/" element={<Sneakers />} />
        <Route path="/bootsW/" element={<Boots />} />
        <Route path="/sandals/" element={<Sandals />} />
        <Route path="/handbag/" element={<HandBag />} />
        <Route path="/jewel/" element={<Jewellery />} />
        <Route path="/hatW/" element={<Hats />} />
        <Route path="/scarves/" element={<Scarves />} />
        <Route path="/tshirt/" element={<Tshirts />} />
        <Route path="/shirt/" element={<Shirt />} />
        <Route path="/pants/" element={<Pants />} />
        <Route path="/jeans/" element={<Jeans />} />
        <Route path="/dressShoe/" element={<DressShoe />} />
        <Route path="/casualShoe/" element={<CasualShoe />} />
        <Route path="/sneakerMen/" element={<SneakerMen />} />
        <Route path="/boots/" element={<BootsMen />} />
        <Route path="/watches/" element={<Watches />} />
        <Route path="/wallets/" element={<Wallets />} />
        <Route path="/belts/" element={<Belts />} />
        <Route path="/hats/" element={<HatsMen />} />
      </Routes>
    </Router>
    </UserContext.Provider>
  );
}

export default App;

