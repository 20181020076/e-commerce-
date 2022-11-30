import NavBar from './components/NavBar/NavBar';
import Cart from './pages/Cart/Cart';
import Home from './pages/Home/Home';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
// import About from './pages/About/About';
// import Contact from './pages/Contact/Contact';

// import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './App.css';

import {BrowserRouter,Routes,Route} from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Cart' element={<Cart/>}/>
          <Route path='/Products/:categoryName' element={<ItemListContainer/>}/>
          <Route path='/Products' element={<ItemListContainer/>}/>
          <Route path='/detail/:id' element={<ItemListContainer/>}/>
          {/* <Route path='/Contact' element={<Contact/>}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
