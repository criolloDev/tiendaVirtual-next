import Link from "next/link";
import styles from "../styles/ListadoP.module.css"


export const ListadoProductos = ({title, image, category, price, id}) => {

  return (
    
    <div key={id} className={`${styles.producto} mb-3 animate__animated animate__fadeIn`}>
      <Link href={`/zapatillas/${id}`}>
      <div className={styles.producto__img}>
        <img src={image} alt={title} />
      </div>
      </Link>
      <div className={styles.producto__footer}>
        <h1>{title}</h1>
        <p>{category}</p>
        <p className={styles.price}>${price} </p>
      </div>
      <div className={styles.bottom}>
        <Link href={`/zapatillas/${id}`} className={styles.btn}>Detalles del producto</Link>
      </div>
    </div>
  );
};
