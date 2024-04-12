import Link from "next/link";

export default function Navegation() {
  return (
    <nav className="nav__container">
      <div>
        <img src="" alt="Logo" />
        <p>Name Proyect</p>
      </div>

      <div>
        <ul className="nav__container__navegation">
          <li>
            <Link href="/crearTarea">Crear Tareas</Link>
          </li>
          <li>
            <Link href="/matriz">Matriz Einsehower</Link>
          </li>
          <li>
            <Link href="/contacto">Contacto</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
