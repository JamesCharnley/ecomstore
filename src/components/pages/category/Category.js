import { useParams } from "react-router-dom";
import { Banner } from "../../banner/Banner";
import { AutoGrid } from "../../containers/flex-row/grid/AutoGrid";
import { GridItem } from "../../containers/flex-row/grid/grid-item/GridItem";
import { useEffect, useState } from "react";
import { ProductCard } from "../../cards/product-card/ProductCard";


export function Category({ cartContent, removeItemFromCart, addItemToCart }) {

  let {category} = useParams();

  const [products, setProducts] = useState();
  useEffect(
    function () {
      async function fetchProducts() {
        const res = await fetch(
          `https://fakestoreapi.com/products/category/${category}`
        );
        const data = await res.json();
        setProducts(data);
      }
      fetchProducts();
    },
    [category]
  );

  if(!products){
    return <p>loading...</p>
  }

  return (
    <>
      <Banner
        cartContent={cartContent}
        removeItemFromCart={removeItemFromCart}
      />
      <div className={StyleSheet.title_section}>
        <h3 className={StyleSheet.title}>{category.toUpperCase()}</h3>
      </div>
      <AutoGrid>
        {products.map((p) => <GridItem key={p.id}><ProductCard product={p} width={"100%"} addToCart={addItemToCart}/></GridItem>)}
      </AutoGrid>
    </>
  );
}