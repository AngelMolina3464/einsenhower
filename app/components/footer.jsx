import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer__container">
      <div className="footer__container__position">
        <div>
          <p className="poweredby">Tech</p>
          <Image src="/nodejs.png" alt="NodeJs" width={25} height={25}></Image>
          <Image src="/js.png" alt="js" width={25} height={25}></Image>
          <Image src="/next.png" alt="NextJs" width={25} height={25}></Image>
          <Image src="/react.png" alt="React" width={25} height={25}></Image>
          <Image src="/ts.png" alt="Ts" width={25} height={25}></Image>
          <Image
            src="/firebase.png"
            alt="Firebase"
            width={25}
            height={25}
          ></Image>
        </div>
        <p className="poweredby">
          Developed by{" "}
          <span>
            <Link href="/contacto">Molina Dev</Link>
          </span>{" "}
          2024
        </p>
      </div>
    </footer>
  );
}
