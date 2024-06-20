import styles from './Banner.module.css';

export function Banner(){
  return (
    <div className={styles.container}>
      <div style={{backgroundImage: `url(/banner.jpg)`}} className={styles.image}></div>
      <h1 className={styles.title}>Azure Attire</h1>
    </div>
  );
}