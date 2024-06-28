import './App.css';
import HomePage from './customer/pages/Homepage/HomePage';
import Footer from './customer/components/Footer/Footer';
import Navigation from './customer/components/Navigation/Navigation';
import Product from './customer/components/Product/Product';
import ProductDetails from './customer/components/ProductDetails/ProductDetails';
import Cart from './customer/components/Cart/Cart';
import Checkout from './customer/components/Checkout/Checkout';
import Order from './customer/components/Order/Order';
import OrderDetails from './customer/components/Order/OrderDetails';
import { Routes, Route } from 'react-router-dom';
import CustomerRoutes from './Routers/CustomerRouters';
import HomeSectionCard from './customer/components/HomeSectionCard/HomeSectionCard';

function App() {
  return (
    <div className="">

      <Routes>
        <Route path="/*" element={<CustomerRoutes />}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
