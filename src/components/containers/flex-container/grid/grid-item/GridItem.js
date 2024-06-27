import styles from "./GridItem.module.css";

export function GridItem({ children }) {
  return ( 
    <div className={styles.grid_item}>
      {children}
    </div>
  );
}
