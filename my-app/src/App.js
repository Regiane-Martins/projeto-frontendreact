import Footer from "./layout/footer";
import Header from "./layout/header";
import Main from "./layout/main";
import { Data } from "./data";
import { useState } from "react";
import Cart from "./layout/cart";

function App() {
  const [category, setCategory] = useState("todos");
  const [isOnFilter, setIsOnFilter] = useState(false);
  const [isOnCart, setIsOnCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [isOnOrder, setIsOnOrder] = useState(false);
  const [products, setProducts] = useState(Data);
  const [order, setOrder] = useState("default");
  const [name, setName] = useState("");
  const [maxPrice, setMaxPrice] = useState(0);
  const [minPrice, setMinPrice] = useState(0);
  const [screen, setScreen] = useState("default");

  const filterProducts = () => {
    let dataCopy = [...Data];

    if (category !== "todos") {
      dataCopy = Data.filter((e) => e.category === category);
    }

    dataCopy = dataCopy.filter((e) =>
      e.name.toLowerCase().includes(name.toLowerCase())
    );

    if (minPrice >= 0 && maxPrice > 0) {
      dataCopy = dataCopy.filter(
        (e) => e.price >= minPrice && e.price <= maxPrice
      );
    }

    setProducts(dataCopy);
    setOrder("default");
  };

  function changeScreen(screen) {
    setScreen(screen);
  }

  const orderProducts = () => {
    const productsCopy = [...products];

    switch (order) {
      case "min":
        productsCopy.sort((a, b) => a.price - b.price);
        break;

      case "max":
        productsCopy.sort((a, b) => b.price - a.price);
        break;

      default:
        productsCopy.sort((a, b) => a.id - b.id);
    }

    setProducts(productsCopy);
  };

  const quantityProducts = () => {
    return products.length;
  };

  if (isOnFilter) {
    filterProducts();
    setIsOnFilter(false);
  }

  if (isOnOrder) {
    orderProducts();
    setIsOnOrder(false);
  }

  return (
    <div>
      <Header
        setIsOnFilter={setIsOnFilter}
        category={category}
        setCategory={setCategory}
        name={name}
        setName={setName}
        isOnCart={isOnCart}
        setIsOnCart={setIsOnCart}
        changeScreen={changeScreen}
      />
      {screen === "default" ? (
        <Main
          products={products}
          setIsOnOrder={setIsOnOrder}
          setIsOnFilter={setIsOnFilter}
          order={order}
          setOrder={setOrder}
          quantityProducts={quantityProducts}
          setMaxPrice={setMaxPrice}
          setMinPrice={setMinPrice}
          minPrice={minPrice}
          maxPrice={maxPrice}
          cartItems={cartItems}
          setCartItems={setCartItems}
        />
      ) : (
        <Cart changeScreen={changeScreen} cartItems={cartItems}/>
      )}
      <Footer />
    </div>
  );
}

export default App;
