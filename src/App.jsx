import Header from "./components/Layout/Header";
import classes from "./App.module.css";
import CartMeals from "./components/Cart/CartMeals";
import CartProvider from "./store/CartProvider";
import { AvailableMeals } from "./components/Meals";

const { app } = classes;

function App() {
  return (
    <CartProvider>
      <Header />
      <main className={app}>
        <CartMeals />
        <AvailableMeals />
      </main>
    </CartProvider>
  );
}

export default App;
