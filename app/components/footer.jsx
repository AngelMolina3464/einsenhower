import Link from "next/link"

export default function Footer() {
  return (
    <footer className="footer__container">
      <div className="footer__container__position">
        <div>
          <p className="poweredby">Tech</p>
          <img src="/nodejs.png" alt="NodeJs" />
          <img src="/js.png" alt="Js" />
          <img src="/next.png" alt="NextJs" />
          <img src="/react.png" alt="React" />
          <img src="/ts.png" alt="Ts" />
          <img src="/firebase.png" alt="Firebase" />
        </div>
        <p className="poweredby">
          Developed by <span><Link href="/contacto">Molina Dev</Link></span> 2024
        </p>
      </div>
    </footer>
  );
}
