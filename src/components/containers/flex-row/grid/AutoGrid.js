import styles from './AutoGrid.module.css';

export function AutoGrid({children}){
  return (
    <div className={styles.grid}>
      {children}
    </div>
  );
}