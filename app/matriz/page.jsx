import { ListadeTareas__Cliente } from "./listaTareas";
import { info } from "@/app/data/emula.js";

const infoUser = info.filter((element) => element.createdBy == "Programador X");

const infoHacer = infoUser.filter(
  (element) => element.importancia && element.urgencia
);

const infoDecidir = infoUser.filter(
  (element) => element.importancia && element.urgencia == false
);

const infoDelegar = infoUser.filter(
  (element) => element.importancia == false && element.urgencia
);

const infoEliminar = infoUser.filter(
  (element) => element.importancia == false && element.urgencia == false
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
