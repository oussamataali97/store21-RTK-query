
import { Footer } from "./components/Footer";
import { useGetSingleUserQuery } from "./userSlice/userSlice";
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
import CreateUser from "./pages/CreateUser";
import ProfilePage from "./pages/ProfilePage";
import { getUser } from "./userSlice/userSlice";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import PrivateRoute from "./pages/PrivateRoute";

function App() {
  const [theme,setTheme]=useState(false)
  if(theme){
    window.localStorage.setItem('themess','dracula')
  }else {
    window.localStorage.setItem('themess','light')
  }

const dispatch=useDispatch()
useEffect(()=>{
  dispatch(getUser())
},[])

  return (
    <div className="App" data-theme={window.localStorage.getItem("themess")}>

      <Nav theme={setTheme} actualtheme={theme}/>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/products" element={<Products/>} />
      <Route path="/product/:id" element={<ProductDetail/>} />
      <Route path="/feature" element={<Features/>}/>
      <Route path="/pricing" element={<Pricings/>}/>
      <Route path='/category' element={<Catgory/>} />
      <Route path='/create' element={<CreateUser/>} />
      <Route path="/sign-in" element={<SignIn/>}/>
      <Route element={<PrivateRoute/>}>
        <Route path='/profile' element={<ProfilePage/>} />

      </Route>


      <Route  path="/category/:categoryproduct" element={<CategoryProducts/>}/>

      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
