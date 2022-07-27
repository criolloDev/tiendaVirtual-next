import Image from 'next/image'
import { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import styles from '../styles/Carrito.module.css'

const Carrito = ({ carrito, actualizarCantidad, eliminarProducto }) => {

    const [total, setTotal] = useState(0);

    useEffect(() => {
        const calculoTotal = carrito.reduce(
            (total, producto) => total + (producto.cantidad * producto.precio),
            0
        );
        setTotal(calculoTotal);
    }, [carrito])

    return (
        <Layout
            pagina="carrito"
        >
            <h1 className={styles.heading}>CARRITO</h1>
            <main className={styles.contenedor}>
                <div className={styles.contenido}>
                    <div className={styles.carrito}>
                        <h2>Articulos</h2>
                        {carrito.length === 0 ? ""
                            : carrito.map((producto) => (
                                <div key={producto.id}
                                    className={styles.producto}>
                                    <div>
                                        <Image
                                            layout="responsive"
                                            width={50}
                                            height={50}
                                            src={producto.imagen}
                                            alt={producto.nombre}
                                        />
                                    </div>

                                    <div>
                                        <p className={styles.nombre}>{producto.nombre}</p>
                                        <div className={styles.cantidad}>
                                            <p>Cantidad:</p>
                                            <select
                                                value={producto.cantidad}
                                                className={styles.select}
                                                onChange={(e) =>
                                                    actualizarCantidad({
                                                        cantidad: e.target.value,
                                                        id: producto.id
                                                    })}
                                            >
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                                <option value="7">7</option>
                                            </select>
                                        </div>
                                        <p className={styles.precio}>${producto.precio}</p>
                                        <p className={styles.subtotal}>
                                            Subtotal: $
                                            <span>{producto.precio * producto.cantidad}</span>
                                        </p>
                                    </div>
                                    <button type="button" className={styles.eliminar}
                                        onClick={() => eliminarProducto(producto.id)}>
                                        x
                                    </button>
                                </div>
                            ))}
                    </div>
                    <div className={styles.resumen}>
                        {total > 0 ? (
                            <>
                                <h3>Resumen del pedido</h3>
                                <p>Total a pagar: ${total}</p>
                                <button>
                                    Pagar
                                    <i clasName="fas fa-credit-card"></i>
                                </button>
                            </>
                        ) : <p>No hay productos en el carrito</p>}
                    </div>
                </div>
            </main>
        </Layout>
    )
}

export default Carrito