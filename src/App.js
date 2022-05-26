import React, {useState} from 'react';

// Import components
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {
  const [cartVisibility, setCartVisibility] = useState(false);

  const showCartHandler = () => {
    setCartVisibility(true);
  };
  const hideCartHandler = () => {
    setCartVisibility(false);
  }

  return (
    <CartProvider>
      {cartVisibility && <Cart onCloseCart={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}></Header>
      <Meals></Meals>
    </CartProvider>
  );
}

export default App;
