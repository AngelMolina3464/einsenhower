"use client";

import { useEffect } from "react";

export const ListadeTareas__Cliente = ({ dataFiltered, title }) => {
  useEffect(() => {console.log("Hola")}, [dataFiltered]);

  return (
    <section>
      <div className={title}>
        <strong>{title}</strong>
      </div>

      <ol className="list__container">
        {dataFiltered.map((element) =>
          element.active ? (
            <li>
              <strong>{element.concepto}</strong>
              <p>{element.detalles}</p>
            </li>
          ) : (
            <li className="archived">
              <strong>{element.concepto}</strong>
              <p>{element.detalles}</p>
            </li>
          )
        )}
      </ol>
    </section>
  );
};
