import "./App.css";
import { Route, Routes, useSearchParams } from "react-router-dom";
// import Allroutes from "./Components/Allroutes";
import CartContext, { Context } from "./Components/CartContext";
import Product from "./Components/Product";

import ShowCart from "./Components/ShowCart";
import Allroutes from "./Components/Allroutes";
import { useContext, useState } from "react";
function App() {
 
  return (
    <div className="App">
      <CartContext>
        {/* <Allroutes handle={ /> */}
        
           <Product />
           <ShowCart />
      </CartContext>
    </div>
  );
}

export default App;
