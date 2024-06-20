import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { ProductCard } from './components/cards/product-card/ProductCard';
import { FlexRow } from './components/containers/flex-row/FlexRow';
import { CategoryCard } from './components/cards/category-card/CategoryCard';
import { Banner } from './components/banner/Banner';
import { ProductRow } from './components/product-row/ProductRow';
import { LineBreak } from './components/line-break/LineBreak';

export default function App() {
  return (
    <>
      <Banner />
      <FlexRow>
        <CategoryCard
          imageUrl={"/electronics.jpg"}
          title={"Electronics"}
          href={"/category/electronics"}
          width={"24%"}
        />
        <CategoryCard
          imageUrl={"/jewellery.jpg"}
          title={"Jewellery"}
          href={"/category/jewellery"}
          width={"24%"}
        />
        <CategoryCard
          imageUrl={"/mensclothes.jpg"}
          title={"Men's Clothing"}
          href={"/category/menclothing"}
          width={"24%"}
        />
        <CategoryCard
          imageUrl={"/womensclothes.jpg"}
          title={"Women's Clothing"}
          href={"/category/jewellery"}
          width={"24%"}
        />
      </FlexRow>
      <LineBreak width={"95%"} />
      <ProductRow
        title={"Best Sellers: Men's Clothing"}
        category={"men's clothing"}
        maxProducts={3}
      />
      <LineBreak width={"95%"} />
      <ProductRow
        title={"Best Sellers: Women's Clothing"}
        category={"women's clothing"}
        maxProducts={3}
      />
      <LineBreak width={"95%"} />
      <ProductRow
        title={"Best Sellers: Electronics"}
        category={"electronics"}
        maxProducts={3}
      />
      <LineBreak width={"95%"} />
      <ProductRow
        title={"Best Sellers: Jewelery"}
        category={"jewelery"}
        maxProducts={3}
      />
      <LineBreak width={"95%"} />
    </>
  );
}


function Test(){
  const [products, setProducts] = useState();
  useEffect(function () {
    async function fetchProducts(){
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    }
    fetchProducts();
  });

  if(!products){
    return <p>loading...</p>
  }

  return (
    <div>
      {products.map((p) => <ProductCard product={p} key={p.id}/>)}
    </div>
  );
}

function Product({product}){
  return (
    <div>
      <p>{product.id}</p>
      <p>{product.title}</p>
      <p>{product.price}</p>
      <p>{product.category}</p>
      <p>{product.description}</p>
      <img src={product.image} alt='dfd' />
    </div>
  );
}