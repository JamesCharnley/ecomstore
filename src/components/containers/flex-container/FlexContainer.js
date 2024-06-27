import { useEffect, useState } from "react";
import styles from "./FlexContainer.module.css";

export function FlexContainer({ children, transitionWidth }) {
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
    <div
      style={screenWidth < transitionWidth ? {flexDirection: "column"} : null} className={styles.flex_container}
    >
      {children}
    </div>
  );
}
