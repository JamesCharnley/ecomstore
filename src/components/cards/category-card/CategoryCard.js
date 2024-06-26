import { Link } from 'react-router-dom';
import styles from './CategoryCard.module.css';

export function CategoryCard({imageUrl, title, href, width, height}){
  return (
    <div style={{width: width, marginLeft: "auto", marginRight: "auto"}}  className={styles.container}>
      <Link className={styles.link_wrapper} to={href}>
        <div style={{backgroundImage: `url(${imageUrl})`}} className={styles.image}></div>
        <h3 className={styles.title}>{title}</h3>
      </Link>
    </div>
  );
}