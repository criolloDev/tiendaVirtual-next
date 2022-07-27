import styles from "../styles/Footer.module.css"

const Footer = () => {
  return (
    <article className={styles.footer}>

      <div className={styles.box_container}>

        <div className={styles.box}>
          <i className="fas fa-envelope"></i>
          <h3>Nuestros emails</h3>
          <p>Horizonte@gmail.com</p>
          <p>Horizontesas@gmail.com</p>
        </div>

        <div className={styles.box}>
          <i className="fas fa-clock"></i>
          <h3>Horario de atencion</h3>
          <p>Lunes a viernes</p>
          <p>8:00am a 6:00pm</p>
        </div>

        <div className={styles.box}>
          <i className="fas fa-map-marker-alt"></i>
          <h3>Ubicacion</h3>
          <p>Ibague, Tolima - Cra. 4h #34</p>
        </div>

        <div className={styles.box}>
          <i className="fas fa-phone"></i>
          <h3>Lineas de atencion</h3>
          <p>3227867847</p>
          <p>3232810476</p>
        </div>

      </div>

    </article>
  )
}

export default Footer