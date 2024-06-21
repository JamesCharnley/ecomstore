import { useState } from 'react';
import styles from './Banner.module.css';
import { CartItem } from '../cart-item/CartItem';

export function Banner({cartContent, removeItemFromCart}){
  const [cartOpen, setCartOpen] = useState(false);
  function handleToggleCart(){
    setCartOpen(!cartOpen);
  }
  return (
    <div className={styles.container}>
      <div style={{backgroundImage: `url(/banner.jpg)`}} className={styles.image}></div>
      <h1 className={styles.title}>Azure Attire</h1>
      <button onClick={handleToggleCart} className={styles.cart_button}>({cartContent.length}) Cart</button>
      {cartOpen && <div className={styles.cart_container}>
        {cartContent.map((i) => <CartItem item={i} removeItemFromCart={removeItemFromCart} key={i.id} />)}
        <div className={styles.cart_footer}>
          <button className={styles.checkout_button}>Checkout</button>
        </div>
      </div>}
    </div>
  );
}