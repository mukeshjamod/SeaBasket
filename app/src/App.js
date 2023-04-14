
import './App.css';
import Login from './components/Layout/Login';
// import Body from './pages/Body';
// import Footer from './pages/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import RootLayout from './pages/Root';
import Checkout from './components/Cart/Checkout';
import PaymentMethods from './components/Cart/Payment';
import SingleProduct from './components/Product/SingleProduct';
import Address from './components/Product/Address';
import Profile from './components/Layout/Profile';
import ProductListingPage from './components/Product/ProductListingPage';



function App() {

  

  return (<><Router>
    <Routes>
      <Route path='/' element={<RootLayout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/products/:id' element={<SingleProduct />}/>
        <Route path='/products/:category' element={<ProductListingPage/>}/>
        
       
          <Route path='/login' element={<Login />} />
          <Route path='/checkout' element={<Checkout/>}>
            </Route>
            <Route path='/payment' element={<PaymentMethods/>}/>
            <Route path='/address' element={<Address/>}/>
            <Route path='/profile' element={<Profile/>}></Route>
            
      
      
      </Route>

    </Routes>
  </Router>

  
    {/* <Body></Body> */}

  </>


  );

}

export default App;


