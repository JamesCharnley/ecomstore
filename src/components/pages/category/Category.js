import styles from './Category.module.css';
import { useParams } from "react-router-dom";
import { Banner } from "../../banner/Banner";
import { AutoGrid } from "../../containers/flex-container/grid/AutoGrid";
import { GridItem } from "../../containers/flex-container/grid/grid-item/GridItem";
import { useEffect, useState } from "react";
import { ProductCard } from "../../cards/product-card/ProductCard";


export function Category({ cartContent, removeItemFromCart, addItemToCart }) {

  let {category} = useParams();
  const [filter, setFilter] = useState("none");
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  useEffect(
    function () {
      async function fetchProducts() {
        const res = await fetch(
          `https://fakestoreapi.com/products/category/${category}`
        );
        const data = await res.json();
        setProducts(data);
        setFilteredProducts(data);
      }
      fetchProducts();
    },
    [category]
  );

  if(!filteredProducts){
    return <p>loading...</p>
  }

  setFilteredProducts(products);

  if(filter === "price-low"){
    filteredProducts.sort(function(a, b){
      return Number(a.price) - Number(b.price);
    })
  }

  if (filter === "price-high") {
    filteredProducts.sort(function (a, b) {
      return Number(b.price) - Number(a.price);
    });
  }

  if(filter === "az"){
    filteredProducts.sort(function(a, b){
      if(a.title.toLowerCase() < b.title.toLowerCase()) return -1;
      if(a.title.toLowerCase() > b.title.toLowerCase()) return 1;
      return 0;
    })
  }
  function handleFilterSelection(e){
    setFilter(e.target.value);
  }

  return (
    <>
      <Banner
        cartContent={cartContent}
        removeItemFromCart={removeItemFromCart}
      />
      <div className={styles.container}>
        <div className={styles.title_section}>
          <h3 className={styles.title}>
            {category.slice(0, 1).toUpperCase() +
              category.slice(1, category.length)}
          </h3>
        </div>
        <div className={styles.sort_container}>
          <label>sort: </label>
          <select onChange={handleFilterSelection} name="filter">
            <option value={"none"}>none</option>
            <option value={"price-low"}>lowest price</option>
            <option value={"price-high"}>highest price</option>
            <option value={"az"}>a-z</option>
          </select>
        </div>

        <AutoGrid>
          {filteredProducts.map((p) => (
            <GridItem key={p.id}>
              <ProductCard
                product={p}
                width={"100%"}
                addToCart={addItemToCart}
              />
            </GridItem>
          ))}
        </AutoGrid>
      </div>
    </>
  );
}