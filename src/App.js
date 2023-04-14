import './App.scss';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Header } from './components/Header';
import Home from "./pages/Home/Home"
import Cart from "./pages/cart/Cart"

function App() {


  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
