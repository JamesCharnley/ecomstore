import { Banner } from '../../banner/Banner';
import { FlexContainer } from '../../containers/flex-container/FlexContainer';
import { ProductFooter } from '../../cards/product-card/ProductFooter';
import styles from './Product.module.css';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { LineBreak } from '../../line-break/LineBreak';
import { ProductRow } from '../../product-row/ProductRow';

export function Product({cartContent, removeItemFromCart, addItemToCart}){

  let {id} = useParams();

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

  const [product, setProduct] = useState();
  useEffect(
    function () {
      async function fetchProduct() {
        const res = await fetch(
          `https://fakestoreapi.com/products/${id}`
        );
        const data = await res.json();
        setProduct(data);
      }
      fetchProduct();
    },
    [id]
  );

  if(!product) return <p>loading...</p>
  
  return (
    <>
      <Banner
        cartContent={cartContent}
        removeItemFromCart={removeItemFromCart}
      />
      <br></br>
      <Link
        style={{ paddingLeft: "20px", textDecoration: "underLine" }}
        to={`/category/${product.category}`}
      >{`<- back to ${product.category}`}</Link>
      <br></br>
      <br></br>
      <br></br>
      <div
        style={screenWidth < 1000 ? { width: "100vw" } : { width: "80vw" }}
        className={styles.container}
      >
        <FlexContainer transitionWidth={650} gap={"25px"}>
          <div
            style={
              screenWidth < 650
                ? { backgroundImage: `url(${product.image})`, width: "100%" }
                : { backgroundImage: `url(${product.image})`, width: "55%" }
            }
            className={styles.image}
          ></div>
          <div
            style={screenWidth < 650 ? { width: "100%" } : { width: "45%" }}
            className={styles.product_info}
          >
            <div className={styles.title_desc}>
              <h3 className={styles.title}>{product.title}</h3>
              <p className={styles.description}>{product.description}</p>
            </div>
            <ProductFooter
              addToCart={addItemToCart}
              product={product}
              screenWidth={screenWidth}
            />
          </div>
        </FlexContainer>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <LineBreak width={"95%"} margin={"25px"} />
      <ProductRow
        title={"Best Sellers"}
        category={product.category}
        maxProducts={5}
        addToCart={addItemToCart}
      />
      <LineBreak width={"95%"} margin={"25px"} />
    </>
  );
}