import { useEffect, useState } from 'react';
import styles from './Banner.module.css';
import { CartItem } from '../cart-item/CartItem';

export function Banner({cartContent, removeItemFromCart}){
  const [cartOpen, setCartOpen] = useState(false);
  function handleToggleCart(){
    setCartOpen(!cartOpen);
  }

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      style={screenWidth < 450 ? { height: "180px" } : { height: "250px" }}
      className={styles.container}
    >
      <div
        style={
          screenWidth < 450
            ? { backgroundImage: `url(/banner.jpg)`, height: "180px" }
            : { backgroundImage: `url(/banner.jpg)`, height: "250px" }
        }
        className={styles.image}
      ></div>
      <h1 style={screenWidth > 450 ? {fontSize: "100px"} : {fontSize: "60px"}} className={styles.title}>Azure Attire</h1>
      <button onClick={handleToggleCart} className={styles.cart_button}>
        ({cartContent.length}) Cart
      </button>
      {cartOpen && (
        <div style={screenWidth > 450 ? {width: "400px"} : {width: "90%"}} className={styles.cart_container}>
          {cartContent.map((i) => (
            <CartItem
              item={i}
              removeItemFromCart={removeItemFromCart}
              key={i.id}
            />
          ))}
          <div className={styles.cart_footer}>
            <button className={styles.checkout_button}>Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
}