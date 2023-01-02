import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/CartModal';
import { useState } from 'react';
import CartProvider from './store/CartProvider';

function App() {
  const [cartIsShown, setCartIsshown] = useState(false);

  const showCartHandler = () => {
    setCartIsshown(true);
  }

  const hideCartHandler = () => {
    setCartIsshown(false);
  }

  return (
    <CartProvider>
      { cartIsShown && <Cart hideCard={hideCartHandler}/>}
      <Header showCard={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
