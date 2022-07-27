import { useRouter } from "next/router"
import { useEffect, useState } from 'react'
import { ListadoProductos } from "../../components/ListadoProductos";
import styles from "../../styles/Zapatilla.module.css"
import Layout from '../../components/Layout'



const Zapatilla = ({ productos, agregarAlCarrito }) => {

    const router = useRouter()
    const { id } = router.query;

    const [detalle, setDetalle] = useState([]);
    const [images, setImages] = useState('')
    const [url, setUrl] = useState(0)
    const [cantidad, setCantidad] = useState(1);

    let item = 0;

    useEffect(() => {
        item = 0;
        productos.map(producto => {
            if (producto.id === parseInt(id)) {
                setDetalle(producto)
                setUrl(0)
            }
        })
    }, [id, detalle])

    useEffect(() => {
        const values = `${detalle.img1}${url}${detalle.img2}`;
        setImages(values)
    }, [url, id])

    const handleInput = (e) => {
        const number = e.target.value.toString().padStart(2, '01')
        setUrl(number)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // Agregar al carrito
        const guitarraSeleccionada = {
            id,
            imagen: detalle.image,
            nombre: detalle.title,
            precio: detalle.price,
            cantidad,
        };

        agregarAlCarrito(guitarraSeleccionada);
    };

    if (detalle.length < 1) return null;

    return (
        <Layout
            pagina={detalle.title}
        >
            {
                <div className={styles.detalles}>
                    <h2>{detalle.title}</h2>
                    <p className={styles.price}>${detalle.price}</p>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.grid}>
                            <p className={styles.nuevo}>Nuevo</p>
                            <div className={styles.tamano}>
                                <select
                                    value={cantidad}
                                    onChange={(e) => setCantidad(parseInt(e.target.value))}
                                >
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                </select>
                                <p>Cantidad</p>
                            </div>
                        </div>
                        <button>
                            Agregar al carrito
                            <i className="fas fa-cart-arrow-down"></i>
                        </button>
                    </form>

                    {
                        url ? <img src={images} className="animate__animated animate__fadeInLeft" alt={detalle.title} /> : <img src={detalle.image} className="animate__animated animate__fadeInLeft" alt={detalle.title} />
                    }
                    <input type="range" min="1" max="36" step="1" value={url} onChange={handleInput} />
                    <div className={styles.description}>
                        <p><b>Description: </b> El Nike Air Rubber Dunk, diseñado por el fundador de Off-White,
                            Virgil Abloh, aterrizó en 2020, presentando el primer calzado deportivo exclusivo del
                            diseñador con el gigante de la ropa deportiva. Este colorway UNC es uno de los tres del
                            paquete.
                        </p>
                        <br />
                        <p>La parte superior de las Nike Air Rubber Dunk UNC está compuesta de caucho,
                            pieles sintéticas y malla. Los bordes sin rematar se pueden encontrar en la lengüeta,
                            trayendo un elemento deconstruido que Virgil Abloh es conocido por agregar a sus
                            colaboraciones con Nike. Finalmente, la entresuela continúa con el tema de la goma,
                            ya que se colocan cubiertas de goma alrededor de la unidad Air Bubble.
                        </p>
                    </div>
                </div>

            }
            <h2 className={styles.relacionados}>Productos relacionados</h2>
            <div className={styles.productos}>
                {
                    productos.map((producto) => {
                        if ((item < 6) && (detalle.category === producto.category)) {
                            item++;
                            return <ListadoProductos
                                key={producto.id}
                                title={producto.title}
                                image={producto.image}
                                category={producto.category}
                                price={producto.price}
                                id={producto.id}
                            />
                        }


                    })
                }

            </div>
        </Layout>
    )
}

export default Zapatilla