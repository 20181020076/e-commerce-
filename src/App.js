import NavBar from './components/NavBar/NavBar';
import Cart from './pages/Cart/Cart';
import Products from './pages/Products/Products';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';

// import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './App.css';

import {BrowserRouter,Routes,Route} from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/Cart' element={<Cart/>}/>
          <Route path='/Products' element={<Products/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Contact' element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
