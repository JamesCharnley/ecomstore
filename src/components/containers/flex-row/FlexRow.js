import styles from './FlexRow.module.css';

export function FlexRow({children}){
  return (
    <div className={styles.flex_row}>
      {children}
    </div>
  );
}