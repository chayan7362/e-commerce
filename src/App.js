import './App.css';
import HomePage from './customer/pages/Homepage/HomePage';
import Footer from './customer/components/Footer/Footer';
import Navigation from './customer/components/Navigation/Navigation';
import Product from './customer/components/Product/Product';

function App() {
  return (
    <div className="">
      <Navigation/>
      <div>
        <HomePage/>
        {/* <Product/> */}
      </div>
      <Footer/>
    </div>
  );
}

export default App;
