import { useState } from 'react';
import styles from './ProductFooter.module.css';

export function ProductFooter({addToCart, product, screenWidth}){

  const [itemNumber, setItemNumber] = useState(1);

  function handleInput(e) {
    e.preventDefault();
    if (e.target.value !== itemNumber) {
      setItemNumber(e.target.value);
    }
  }

  function handleAddToCart(e) {
    e.preventDefault();
    const item = {
      id: product.id,
      quantity: itemNumber,
      title: product.title,
      price: product.price,
      image: product.image,
    };
    addToCart(item);
  }

  return (
    <div className={styles.footer}>
      <div className={styles.price_container}>
        <div className={styles.price_sticky}>
          <p className={styles.price}>${product.price}</p>
        </div>
      </div>
      <div className={styles.buy}>
        <form className={styles.form}>
          <input type="text" value={itemNumber} onChange={handleInput}></input>
          <button
            style={
              screenWidth < 950 ? { fontSize: "12px", width: "50%" } : null
            }
            className={styles.button}
            onClick={handleAddToCart}
          >
            Add to cart
          </button>
        </form>
      </div>
    </div>
  );
}