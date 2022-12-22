import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import { useState } from 'react';

function App() {
  const [cartIsShown, setCartIsshown] = useState(false);

  const showCartHandler = () => {
    setCartIsshown(true);
  }

  const hideCartHandler = () => {
    setCartIsshown(false);
  }

  return (
    <>
      { cartIsShown && <Cart hideCard={hideCartHandler}/>}
      <Header showCard={showCartHandler} />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
