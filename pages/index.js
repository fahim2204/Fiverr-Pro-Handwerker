import Head from "next/head";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.css";
import Help from "../components/help";
import Contact from "../components/contact";
import Navbar from "../components/header/navbar";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Impressum ❤️ Pro Handwerker</title>
        <meta name="robots" content="index,follow" />
        <meta
          name="description"
          content={`Herzlich willkommen bei Pro Handwerker – Ihrem Ansprechpartner für fachmännische Handwerksdienstleistungen. Wir bieten Ihnen mit unserer Erfahrung eine hohe Fachkompetenz und eine kostenlose Beratung bei ihrem Vorhaben.`}
        />
        <link rel="canonical" href="https://pro-handwerker.de" />
      </Head>
      <header className="hero-img">
        <Navbar />
        <div className="container-fluid mt-5 pt-5">
          <div className="container">
            <p className="text-center text-white fs-6">
              Eine Komplettlösung für Ihre Handwerksarbeiten.
            </p>
            <p className="text-center text-white display-3 fw-bold">
              Willkommen bei Pro Handwerker
              <br />
              ihrem Handwerkerprofi
            </p>
          </div>
        </div>
      </header>
      <Help />
      <section className="mt-5">
        <div className="container">
          <div className="col-10 d-flex flex-column mx-auto justify-content-center mb-3">
            <h1 className="text-center">Dienstleistungen, die wir anbieten</h1>
            <p className="text-center fs-5">
              Unsere Designdienstleistungen beginnen und enden mit einer
              erstklassigen Erfahrung und einer Strategie, die aufbaut.
            </p>
          </div>
          <div className="row my-5 boxs">
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
              <Link href={"/fliesenleger"}>
                <div className="rounded-1 shadow-sm border p-3">
                  <div className="">
                    <Image src="img/bild-2.svg" alt="fliesenleger" height={80} width={126}/>
                  </div>
                  <p className="fw-semibold fs-5 text-center">Fliesenleger</p>
                </div>
              </Link>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
              <Link href={"/trockenbauer"}>
                <div className="rounded-1 shadow-sm border p-3">
                  <div className="">
                    <Image className="w-100" src="img/bild-1.svg" alt="" height={80} width={126}/>
                  </div>
                  <p className="fw-semibold fs-5 text-center">Trockenbau</p>
                </div>
              </Link>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
              <Link href={"/fenstereinbau-und-tuereneinbau"}>
                <div className="rounded-1 shadow-sm border p-3">
                  <div className="">
                    <Image src="img/bild-3.svg" alt="tueren-und-fenster" height={80} width={126}/>
                  </div>
                  <p className="fw-semibold fs-5 text-center">
                    Türen und Fenster
                  </p>
                </div>
              </Link>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
              <Link href={"/garten-und-landschaftsbauer"}>
                <div className="rounded-1 shadow-sm border p-3">
                  <div className="">
                    <Image src="/img/bild-4.webp" alt="garten-und-landschaftsbau" height={80} width={126}/>
                  </div>
                  <p className="fw-semibold fs-5 text-center">
                    Garten und Landschaftsbau
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
              <div className="col-4">
                <Image
                  className="img-fluid rounded shadow-sm"
                  src="/img/bild-5.webp"
                  alt="ueber-pro-handwerker"
                  height={100} width={152}
                />
              </div>
            </div>
            <div className="col-12 col-md-6 d-flex flex-column px-5 px-md-0">
              <p className="mb-2 text-muted">
                <small>Warum Sie uns wählen</small>
              </p>
              <h3 className="fs-1 fw-bold pb-4 mb-4 border-bottom">
                Über Pro Handwerker
              </h3>
              <p className="fs-5 pb-4 mb-4 border-bottom">
                Pro Handwerker bietet professionelle Handwerkdienstleistungen.
                Unsere Handerker Experten ermöglichen es, einen
                branchenführenden Service zu bieten, wir haben Lösungen für
                Gewerbe- und Privatkunden..
              </p>
              <ul className="uber-ul">
                <li className="fs-6">Pünktlich und zuverlässig</li>
                <li className="fs-6">Qualitativ hochwertige Arbeit</li>
                <li className="fs-6">100% Zufriedenheitsgarantie.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
}
