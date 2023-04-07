
import './App.css';
import Login from './components/Layout/Login';

// import Body from './pages/Body';
// import Footer from './pages/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import RootLayout from './pages/Root';
import Checkout from './components/Cart/Checkout';


function App() {
  return (<><Router>
    <Routes>
      <Route path='/' element={<RootLayout/>}>
        <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login />} />
          <Route path='/checkout' element={<Checkout/>}/>
      
      </Route>

    </Routes>




  </Router>
    {/* <Body></Body> */}

  </>


  );
}

export default App;
