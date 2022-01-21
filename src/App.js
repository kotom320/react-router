import { Routes, Route } from "react-router-dom";
import { Fragment } from "react";
import Welcome from "./components/Welcome";
import Products from "./components/Products";

function App() {
  return (
    // <div>
    //   <Route path="/welcome">
    //     <Welcome />
    //   </Route>
    //   <Route path="/products">
    //     <Products />
    //   </Route>
    // </div>
    <div>
      <Routes>
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
