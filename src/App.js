import './App.css';
import Footer from './customer/components/footer/Footer';
import Navigation from './customer/components/navigation/Navigation';
import Products from './customer/components/product/Products';

function App() {
  return (
    <div className="">
      <Navigation/>
      <div>
        {/* <HomePage/> */}
        <Products/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
