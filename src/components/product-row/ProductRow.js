import { useEffect, useState } from "react";
import { ProductCard } from "../cards/product-card/ProductCard";
import { FlexContainer } from "../containers/flex-row/FlexContainer";
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
  });
  if (!products) {
    return <p>loading...</p>;
  }
  return (
    <div className={styles.container}>
      <h6 className={styles.title}>{title}</h6>
      <FlexContainer>
        {products.map((p) => (
          <ProductCard
            product={p}
            width={"30%"}
            addToCart={addToCart}
            key={p.id}
          />
        ))}
      </FlexContainer>
    </div>
  );
}
