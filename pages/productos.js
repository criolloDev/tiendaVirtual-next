import Layout from '../components/Layout'
import styles from "../styles/Productos.module.css"
import { ListadoProductos } from "../components/ListadoProductos";


const Productos = ({productos}) => {

  return (
    <Layout
      pagina="Productos"
    >
      <div className={styles.coleccion}>
        <h1 className={styles.produ}>PRODUCTOS</h1>
        <div className={styles.productos}>
          {productos.map((producto) => (
            <ListadoProductos
              key={producto.id}
              title={producto.title}
              image={producto.image}
              category={producto.category}
              price={producto.price}
              id={producto.id}
            />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Productos