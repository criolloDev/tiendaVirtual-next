import Link from 'next/link'
import styles from "../styles/Header.module.css"

const Header = () => {
  return (
    <header className={styles.header}>
      <ul>
        <li>
          <Link href="/">
            <a>Inicio</a>
          </Link>
        </li>
        <li>
          <Link href="/productos">
            <a>Productos</a>
          </Link>
        </li>
      </ul>
      <div className={styles.cart}>
        <Link href="/carrito">
          <i className="fas fa-cart-arrow-down"></i>
        </Link>
      </div>
    </header>
  )
}

export default Header