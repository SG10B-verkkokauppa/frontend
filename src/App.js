import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import{
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import NotFound from './pages/NotFound';
import Konsolit from './pages/Konsolit';
import Lautapelit from './pages/Lautapelit';
import Pelit from './pages/Pelit';
import Oheistuotteet from './pages/Oheistuotteet';
import Order from './pages/Order';
import Tuotteet from './pages/Tuotteet';
import Cart from './pages/ShoppingCart';

const URL = "http://localhost/webshop/"

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contactus' element={<ContactUs />}></Route>
          <Route path='/konsolit' element={<Konsolit />}></Route>
          <Route path='/lautapelit' element={<Lautapelit />}></Route>
          <Route path='/pelit' element={<Pelit />}></Route>
          <Route path='/oheistuotteet' element={<Oheistuotteet />}></Route>
          <Route path='/ShoppingCart' element={<Cart />}></Route>
          <Route path='*' element={<NotFound />}></Route>
          <Route path='/products/:id' element={<Tuotteet />}></Route>
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;