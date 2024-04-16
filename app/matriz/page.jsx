import { ListadeTareas__Cliente } from "./listaTareas";
import { obtenerDatos } from "../data/getTareas.js";

const infoUser = await obtenerDatos("Tareas", "createdBy", "User Final");

const infoHacer = infoUser.filter(
  (element) => element.importancia == "Si" && element.urgencia == "Si"
);

const infoDecidir = infoUser.filter(
  (element) => element.importancia == "Si" && element.urgencia == "No"
);

const infoDelegar = infoUser.filter(
  (element) => element.importancia == "No" && element.urgencia == "Si"
);

const infoEliminar = infoUser.filter(
  (element) => element.importancia == "No" && element.urgencia == "No"
);

export default function Matriz() {
  return (
    <main>
      <section className="crafting__container">
        <div className="crafting__container__position">
          <div className="crafting__container__position__cell greenCell">
            <ListadeTareas__Cliente dataFiltered={infoHacer} title={"Hacer"} />
          </div>

          <div className="crafting__container__position__cell blueCell">
            <ListadeTareas__Cliente
              dataFiltered={infoDecidir}
              title={"Decidir"}
            />
          </div>

          <div className="crafting__container__position__cell yellowCell">
            <ListadeTareas__Cliente
              dataFiltered={infoDelegar}
              title={"Delegar"}
            />
          </div>

          <div className="crafting__container__position__cell redCell">
            <ListadeTareas__Cliente
              dataFiltered={infoEliminar}
              title={"Eliminar"}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
