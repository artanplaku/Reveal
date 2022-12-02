import logo from "./logo.svg";
import "./App.css";
import Home from "./Home";
import { Route, Routes, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Products from "./Products";
import Product from "./Product";
import Cart from "./Cart";
import Example from "./Example";
import CheckOut from "./Checkout";

function App() {
  const [products, setProducts] = useState([]);

  const handleAddProduct = (product) => {
    const ProductExist = products.find((item) => item.id === product.id);
    if (ProductExist) {
      setProducts(
        products.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity + 1 }
            : item
        )
      );
    } else {
      setProducts([...products, { ...product, quantity: 1 }]);
    }
  };

  const getProduct = () => {
    axios
      .get("https://reveal-store-backend.herokuapp.com/products")
      .then((res) => {
        // console.log(res.data);

        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(getProduct, []);

  return (
    <div className="App">
      {/* <Navigation /> */}
      {/* <Home /> */}
      {/* <Products products={products}/> */}
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <Example
                products={products}
                handleAddProduct={handleAddProduct}
              />
            }
          />
          <Route path="/products" element={<Products products={products} />} />

          <Route
            path="/cart"
            element={
              <Cart products={products} handleAddProduct={handleAddProduct} />
            }
          />
          <Route
            path="/product/:id"
            element={<Product products={products} />}
          />

          <Route path="/home" element={<Home products={products} />} />
          <Route path="/checkout" element={<CheckOut />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
