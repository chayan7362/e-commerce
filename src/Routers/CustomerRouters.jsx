import React from "react";
import { Route, Routes} from "react-router-dom";
import Homepage from "../customer/components/HomeCarosel/MainCarosel";
import Cart from "../customer/components/Cart/Cart";
import Navigation from "../customer/components/Navigation/Navigation";
import Footer from "../customer/components/Footer/Footer";
import Product from "../customer/components/Product/Product";
import ProductDetails from "../customer/components/ProductDetails/ProductDetails";
import Checkout from "../customer/components/Checkout/Checkout";
import Order from "../customer/components/Order/Order";
import OrderDetails from "../customer/components/Order/OrderDetails";

const CustomerRoutes = () => {
    // const location = useLocation();
    
  
    // Only show Navigation component when not on the NotFound page
    // const showNavigation = location.pathname !== "*";

    // const path=["/","/home","/about","/privacy-policy","/terms-condition","/contact","/men",`/product/${productId}`]
  return (
    <div>
    
    {/* <ThemeProvider theme={customerTheme}> */}
    {<Navigation />}
     <Routes>
     {/* <Route path="/login" element={<Homepage />}></Route> */}
     {/* <Route path="/register" element={<Homepage />}></Route> */}

        <Route path="/" element={<Homepage />}></Route>
        {/* <Route path="/about" element={<About />}></Route> */}
        {/* <Route path="/privaciy-policy" element={<PrivacyPolicy />}></Route> */}
        {/* <Route path="/terms-condition" element={<TearmsCondition />}></Route> */}
        {/* <Route path="/contact" element={<Contact />}></Route> */}
        <Route path="/:lavelOne/:lavelTwo/:lavelThree" element={<Product />}></Route>
        <Route path="/product/:productId" element={<ProductDetails />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/account/order" element={<Order />}></Route>
        <Route path="/account/order/:orderId" element={<OrderDetails />}></Route>
        {/* <Route path="/account/rate/:productId" element={<RateProduct />}></Route> */}
        <Route path="/checkout" element={<Checkout />}></Route>
        {/* <Route path="/payment/:orderId" element={<PaymentSuccess />}></Route> */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Footer/>
    {/* </ThemeProvider> */}
      
    </div>
  );
};

export default CustomerRoutes;