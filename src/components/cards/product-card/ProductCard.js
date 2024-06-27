import { useEffect, useState } from 'react';
import styles from './ProductCard.module.css';
import { Link } from 'react-router-dom';
import { ProductFooter } from './ProductFooter';

export function ProductCard({product, width, addToCart}){

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
    <div style={screenWidth > 450 ? { width: width } : {width: width, marginTop: "30px"}} className={styles.container}>
      <Link to={`/product/${product.id}`}>
        <div
          style={{ backgroundImage: `url(${product.image})` }}
          className={styles.image}
        ></div>
        <div className={styles.title_container}>
          <h3 style={screenWidth >= 700 && screenWidth < 1000 ? {fontSize: "22px"} : {fontSize: "25px"}} className={styles.title}>{product.title}</h3>
        </div>
      </Link>
      <ProductFooter addToCart={addToCart} product={product} screenWidth={screenWidth} />
    </div>
  );
}