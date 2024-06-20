import styles from './LineBreak.module.css';

export function LineBreak({width}){
  return (
    <div style={{width: width}} className={styles.line}></div>
  );
}