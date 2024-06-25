import { FlexContainer } from "../../containers/flex-row/FlexContainer";
import { CategoryCard } from "../../cards/category-card/CategoryCard";
import { Banner } from "../../banner/Banner";
import { ProductRow } from "../../product-row/ProductRow";
import { LineBreak } from "../../line-break/LineBreak";
import { useEffect, useState } from "react";
export function Home({ cartContent, removeItemFromCart, addItemToCart }) {
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
  console.log(screenWidth);

  return (
    <>
      <Banner
        cartContent={cartContent}
        removeItemFromCart={removeItemFromCart}
      />
      {screenWidth > 700 ? (
        <FlexContainer>
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
        </FlexContainer>
      ) : screenWidth > 450 ? (
        <>
          <FlexContainer>
            <CategoryCard
              imageUrl={"/electronics.jpg"}
              title={"Electronics"}
              href={"/category/electronics"}
              width={"45%"}
            />
            <CategoryCard
              imageUrl={"/jewellery.jpg"}
              title={"Jewellery"}
              href={"/category/jewellery"}
              width={"45%"}
            />
          </FlexContainer>
          <FlexContainer>
            <CategoryCard
              imageUrl={"/mensclothes.jpg"}
              title={"Men's Clothing"}
              href={"/category/menclothing"}
              width={"45%"}
            />
            <CategoryCard
              imageUrl={"/womensclothes.jpg"}
              title={"Women's Clothing"}
              href={"/category/jewellery"}
              width={"45%"}
            />
          </FlexContainer>
        </>
      ) : (
        <FlexContainer>
          <CategoryCard
            imageUrl={"/electronics.jpg"}
            title={"Electronics"}
            href={"/category/electronics"}
            width={"98%"}
          />
          <CategoryCard
            imageUrl={"/jewellery.jpg"}
            title={"Jewellery"}
            href={"/category/jewellery"}
            width={"98%"}
          />
          <CategoryCard
            imageUrl={"/mensclothes.jpg"}
            title={"Men's Clothing"}
            href={"/category/menclothing"}
            width={"98%"}
          />
          <CategoryCard
            imageUrl={"/womensclothes.jpg"}
            title={"Women's Clothing"}
            href={"/category/jewellery"}
            width={"98%"}
          />
        </FlexContainer>
      )}
      <LineBreak width={"95%"} margin={"25px"} />
      <ProductRow
        title={"Best Sellers: Men's Clothing"}
        category={"men's clothing"}
        maxProducts={5}
        addToCart={addItemToCart}
      />
      <LineBreak width={"95%"} margin={"25px"} />
      <ProductRow
        title={"Best Sellers: Women's Clothing"}
        category={"women's clothing"}
        maxProducts={5}
        addToCart={addItemToCart}
      />
      <LineBreak width={"95%"} margin={"25px"} />
      <ProductRow
        title={"Best Sellers: Electronics"}
        category={"electronics"}
        maxProducts={5}
        addToCart={addItemToCart}
      />
      <LineBreak width={"95%"} margin={"25px"} />
      <ProductRow
        title={"Best Sellers: Jewelery"}
        category={"jewelery"}
        maxProducts={5}
        addToCart={addItemToCart}
      />
      <LineBreak width={"95%"} margin={"25px"} />
    </>
  );
}
