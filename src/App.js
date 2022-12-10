import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Cart from './pages/Cart/Cart';
import Home from './pages/Home/Home';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './pages/ItemDetailsContainer/ItemDetailContainer';
// import About from './pages/About/About';
// import Contact from './pages/Contact/Contact';
import CartProvider  from './context/CartProvider';

// import ItemListContainer from './components/ItemListContainer/ItemListContainer';


import {BrowserRouter,Routes,Route} from 'react-router-dom';



function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Products' element={<ItemListContainer/>}/>
          <Route path='/Products/:categoryName' element={<ItemListContainer/>}/>
          <Route path='/Item/:id' element={<ItemDetailContainer/>}/>
          <Route path='/Cart' element={<Cart/>}/>
          
          {/* <Route path='/Contact' element={<Contact/>}/> */}
        </Routes>
        <Footer/>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
