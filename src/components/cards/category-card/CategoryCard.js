import styles from './CategoryCard.module.css';

export function CategoryCard({imageUrl, title, href, width}){
  return (
    <div style={{width: width}}  className={styles.container}>
      <a className={styles.link_wrapper} href={href}>
        <div style={{backgroundImage: `url(${imageUrl})`}} className={styles.image}></div>
        <h3 className={styles.title}>{title}</h3>
      </a>
    </div>
  );
}