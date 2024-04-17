"use client";

import { useEffect } from "react";

export const ListadeTareas__Cliente = ({ dataFiltered, title }) => {
  useEffect(() => {
    console.log("Hola");
  }, [dataFiltered]);

  return (
    <section>
      <div className={title}>
        <strong>{title}</strong>
      </div>

      <ol className="list__container">
        {dataFiltered.map((element, index) =>
          element.active ? (
            <li key={index}>
              <strong>{element.concepto}</strong>
              <p>{element.detalles}</p>
            </li>
          ) : (
            <li key={index} className="archived">
              <strong>{element.concepto}</strong>
              <p>{element.detalles}</p>
            </li>
          )
        )}
      </ol>
    </section>
  );
};
