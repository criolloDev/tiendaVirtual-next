import '../styles/globals.css'
import { useState, useEffect } from 'react'
import Data from "../Data";

function MyApp({ Component, pageProps }) {

  const [productos, setProductos] = useState([]);
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    const producto = Data.items
    if (producto) {
      setProductos(producto)
    } else {
      setProductos([])
    }
  }, []);

  const agregarAlCarrito = (producto) => {
    if (carrito.some((zapatilla) => zapatilla.id === producto.id)) {
      const carritoActualizado = carrito.map((zapatilla) => {
        if (zapatilla.id === producto.id) {
          zapatilla.cantidad = producto.cantidad;
          alert("El producto ya existe en el carrito")
        }
        return zapatilla;
      })
      setCarrito(carritoActualizado)
    } else {
      setCarrito([...carrito, producto])
      alert("Producto agregado con exito")
    }
  }

  const actualizarCantidad = (producto) => {
    const carritoActualizado = carrito.map((zapatilla) => {
      if (zapatilla.id === producto.id) {
        zapatilla.cantidad = producto.cantidad;
      }
      return zapatilla;
    })
    setCarrito(carritoActualizado);
  } 

  const eliminarProducto = (id) => {
    const carritoActualizado = carrito.filter((zapatilla) => zapatilla.id !== id);
    setCarrito(carritoActualizado);
  }



  return <Component {...pageProps}
    productos={productos}
    carrito={carrito}
    agregarAlCarrito={agregarAlCarrito}
    actualizarCantidad = {actualizarCantidad}
    eliminarProducto={eliminarProducto}
  />
}

export default MyApp
