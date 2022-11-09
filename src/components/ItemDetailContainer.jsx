import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";    /* npm install react router dom */
import { productosHC } from "./data";
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer({ greeting }) {

  const { iditem } = useParams();     /* Sacamos el ID de Item de la URL usando el HOOK de useParams */   
                                      
  const [producto, setProducto] = useState({});

  useEffect(() => {
    const productoPromise = new Promise((res, rej) => {
      setTimeout(() => {
        // devuelve todos Ya que no filtra,ps
        // res(productosHC);

        //devuelve uno
        res(productosHC.find((item) => item.id == iditem));  /* Usamos el find para solo filtrar el imtem con ID esoecifico */
      }, 2000);
    });

    productoPromise.then((res) => {
      setProducto(res);
    });
  }, [iditem]); /* Si cambia el ID de Item se ejecuta de nuevo el componente, por ende la promesa se ejecuta */

  return (
    <div style={{ border: "2px solid black", margin: "10px" }}>
      <ItemDetail producto={producto} />
      {/* { producto.id ? (
        <>
          {producto.id +
          " " +
          + " " +
          producto.name + 
          " " +
          producto.category +
          " " +
          producto.precio}
        </>
      ): (
        <>Loading...</>
      )} */}

    </div>
  );
}
