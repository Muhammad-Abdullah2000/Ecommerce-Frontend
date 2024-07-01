import { Route, BrowserRouter, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import Shop from "./pages/shop/Shop"
import Cart from "./pages/cart/Cart"
//import { ShopContextProvider } from "./context/ShopContextProvider";

import "./App.css";
import { ShopContextProvider } from "./context/ShopContextProvider";



function App() {
  

  return (
    <div className="App">
     <ShopContextProvider>
    <BrowserRouter>
   
  <Navbar/> 
 <Routes>
    <Route path='/' element={<Shop/>}></Route> 
   <Route path='/cart' element={<Cart/>} ></Route>
  
   </Routes>
    {/* <Footer/>  */}
 </BrowserRouter>
 </ShopContextProvider>
  {/* </ShopContextProvider>   */}
    </div>
  );
}

export default App;
