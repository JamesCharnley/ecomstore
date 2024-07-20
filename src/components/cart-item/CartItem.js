import { LineBreak } from '../line-break/LineBreak';
import styles from './CartItem.module.css';

export function CartItem({item, removeItemFromCart}){

  function handleRemoveItem(){
    removeItemFromCart(item);
  }
  return (
    <>
    <div className={styles.container}>
      <div
        style={{ backgroundImage: `url(${item.image})` }}
        className={styles.image}
      ></div>
      <div className={styles.item_info}>
        <h6 className={styles.title}>{item.title}</h6>
        <div className={styles.item_info_footer}>
          <p className={styles.item_quantity}>quantity: {item.quantity}</p>
          <p className={styles.price}>${item.price * item.quantity}</p>
        </div>
      </div>
      <button className={styles.remove_button} onClick={handleRemoveItem}>
        X
      </button>
    </div>
    <LineBreak width={"95%"} margin={"10px"}/>
    </>
  );
}