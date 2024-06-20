import { useState } from 'react';
import styles from './ProductCard.module.css';

export function ProductCard({product, width}){
  const [itemNumber, setItemNumber] = useState(1);

  function handleInput(e){
    e.preventDefault();
    if(e.target.value !== itemNumber){
      setItemNumber(e.target.value);
    }
  }
  return (
    <div style={{ width: width }} className={styles.container}>
      <a href={`/product/${product.id}`}>
        <div
          style={{ backgroundImage: `url(${product.image})` }}
          className={styles.image}
        ></div>
        <div className={styles.title_container}>
          <h3 className={styles.title}>{product.title}</h3>
        </div>
      </a>
      <div className={styles.footer}>
        <div className={styles.price_container}>
          <div className={styles.price_sticky}>
            <p className={styles.price}>${product.price}</p>
          </div>
        </div>
        <div className={styles.buy}>
          <form className={styles.form}>
            <input
              type="text"
              value={itemNumber}
              onChange={handleInput}
            ></input>
            <button className={styles.button} type="submit">Add to cart</button>
          </form>
        </div>
      </div>
    </div>
  );
}