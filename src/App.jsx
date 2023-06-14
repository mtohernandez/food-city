import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

import classes from "./App.module.css";
import CartMeals from "./components/Cart/CartMeals";
import CartProvider from "./store/CartProvider";

const { app } = classes;

function App() {
  return (
    <>
      <CartProvider>
        <Header />
        <main className={app}>
          <CartMeals />
          <Meals />
        </main>
      </CartProvider>
      <footer>Footer</footer>
    </>
  );
}

export default App;
