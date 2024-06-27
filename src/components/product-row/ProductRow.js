import { useEffect, useState } from "react";
import { ProductCard } from "../cards/product-card/ProductCard";
import { FlexContainer } from "../containers/flex-container/FlexContainer";
import styles from "./ProductRow.module.css";

export function ProductRow({ title, category, maxProducts, addToCart }) {
  const [products, setProducts] = useState();
  useEffect(function () {
    async function fetchProducts() {
      const res = await fetch(
        `https://fakestoreapi.com/products/category/${category}?limit=${maxProducts}`
      );
      const data = await res.json();
      setProducts(data);
    }
    fetchProducts();
  }, [category, maxProducts]);

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

  
  if (!products) {
    return <p>loading...</p>;
  }

  let displayProducts = [];
  if (screenWidth < 700) {
    displayProducts = [...products.slice(0, 2)];
  } else {
    displayProducts = [...products.slice(0, 3)];
  }

  return (
    <div className={styles.container}>
      <h6 className={styles.title}>{title}</h6>
      <FlexContainer>
        {displayProducts.map((p) => (
          <ProductCard
            product={p}
            width={screenWidth > 700 ? "30%" : screenWidth < 450 ? "95%" : "45%"}
            addToCart={addToCart}
            key={p.id}
          />
        ))}
      </FlexContainer>
    </div>
  );
}
