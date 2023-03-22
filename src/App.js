import Footer from "./layout/footer";
import Header from "./layout/header";
import Main from "./layout/main";
import { Data } from "./data";
import { useState } from "react";
import { useEffect } from "react";
import Cart from "./layout/cart";

function App() {
  const [category, setCategory] = useState("todos");
  const [isOnFilter, setIsOnFilter] = useState(false);
  const [cartItems, setCartItems] = useState(() => {
    const stickyValue = localStorage.getItem("shoppingCart");
    return stickyValue !== null ? JSON.parse(stickyValue) : [];
  });
  const [isOnOrder, setIsOnOrder] = useState(false);
  const [products, setProducts] = useState(Data);
  const [order, setOrder] = useState("default");
  const [name, setName] = useState("");
  const [maxPrice, setMaxPrice] = useState(0);
  const [minPrice, setMinPrice] = useState(0);
  const [screen, setScreen] = useState("default");
  const [totalItemCart, setTotalItemCart] = useState(0);
  const [totalCart, setTotalCart] = useState(0);

  const filterProducts = () => {
    let dataCopy = [...Data];

    if (category !== "todos") {
      dataCopy = Data.filter((e) => e.category === category);
    }

    dataCopy = dataCopy.filter((e) =>
      e.name.toLowerCase().includes(name.toLowerCase())
    );

    maxPrice = maxPrice === 0 ? Infinity : maxPrice

      dataCopy = dataCopy.filter(
        (e) => e.price >= minPrice && e.price <= maxPrice
      );

    setProducts(dataCopy);
    setOrder("default");
    setName("");
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

  useEffect(() => {
    localStorage.shoppingCart = JSON.stringify(cartItems);
  }, [cartItems]);

  useEffect(() => {
    let totalItems = 0;
    let totalValue = 0;
    cartItems.forEach((e) => {
      totalItems += e.amount;
      totalValue += e.amount * e.price;
    });
    setTotalItemCart(totalItems);
    setTotalCart(totalValue);
  }, [cartItems]);

  return (
    <div>
      <Header
        setIsOnFilter={setIsOnFilter}
        category={category}
        setCategory={setCategory}
        name={name}
        setName={setName}
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
        <Cart
          changeScreen={changeScreen}
          cartItems={cartItems}
          setCartItems={setCartItems}
          totalItemCart={totalItemCart}
          totalCart={totalCart}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
