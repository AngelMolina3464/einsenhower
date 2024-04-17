import Link from "next/link";
import Image from "next/image"; 

export default function Navegation() {
  return (
    <nav className="nav__container">
      <div>
        <Image src="" alt="Logo" width={30} height={30} />
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
