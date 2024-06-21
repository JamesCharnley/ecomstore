import styles from './LineBreak.module.css';

export function LineBreak({width, margin}){
  return (
    <div style={{width: width, marginTop: margin, marginBottom: margin}} className={styles.line}></div>
  );
}