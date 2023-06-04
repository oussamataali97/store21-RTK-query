
import { Footer } from "./components/Footer";

import {Nav} from "./components/Nav";
import {Routes , Route} from 'react-router-dom'
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import { Features } from "./pages/Features";
import { Pricings } from "./pages/Pricings";
import SignIn from "./pages/SignIn";
import Catgory from "./pages/Catgory";
import CategoryProducts from "./pages/CategoryProducts";
function App() {


  return (
    <div className="App">

      <Nav/>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/products" element={<Products/>} />
      <Route path="/product/:id" element={<ProductDetail/>} />
      <Route path="/feature" element={<Features/>}/>
      <Route path="/pricing" element={<Pricings/>}/>
      <Route path="/sign-in" element={<SignIn/>}/>
      <Route path='/category' element={<Catgory/>} />
      <Route  path="/category/:categoryproduct" element={<CategoryProducts/>}/>

      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
