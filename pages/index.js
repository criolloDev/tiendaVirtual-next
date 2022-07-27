import Layout from '../components/Layout'
import styles from "../styles/Index.module.css"

export default function Home() {
  return (
    <Layout
      pagina="Inicio"
    >
      <div className={styles.inicio}>
        <div>
          <h1 className={styles.text1}>Just do it</h1>
        </div>
      </div>

      <section className={styles.servicios}>
        <div className={styles.box_container}>
          <div className={styles.box}>
            <i className="fas fa-shipping-fast"></i>
            <h3>Entrega rapida</h3>
            <p>
              Trabajamos con las mejores empresas de trasporte del pais, para que
              tu pedido sea 100% seguro y rapido.
            </p>
          </div>

          <div className={styles.box}>
            <i className="fas fa-undo"></i>
            <h3>10 dias para cambios</h3>
            <p>
              Te damos hasta 10 dias habiles para solicitar cambios, ya sea por
              motivos de talla o algun imperfecto.
            </p>
          </div>

          <div className={styles.box}>
            <i className="fas fa-headset"></i>
            <h3>Soporte 24 x 7 </h3>
            <p>
              Tenemos a tu disposicion nuestro equipo de trabajo 24 x 7, para
              cualquier duda, asesoria o reclamo.
            </p>
          </div>
        </div>
      </section>

    </Layout>
  )
}
