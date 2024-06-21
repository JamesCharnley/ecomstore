import { useEffect, useState } from "react";
import styles from "./FlexContainer.module.css";

export function FlexContainer({ children }) {
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
      className={styles.flex_container}
    >
      {children}
    </div>
  );
}
