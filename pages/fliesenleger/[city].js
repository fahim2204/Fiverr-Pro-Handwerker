import { CityList, GetCityName } from "../../components/data/cityList";
import Head from "next/head";
import Contact from "../../components/contact";
import Navbar from "../../components/header/navbar";
import Link from "next/link";
import Image from "next/image";

export async function getStaticPaths() {
  const paths = CityList.map((x) => {
    return {
      params: { city: x.cityLink },
    };
  });
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps(context) {
  const { params } = context;
  return {
    props: { data: GetCityName(params.city), dataLink: params.city },
  };
}

const City = (context) => {
  return (
    <>
      <Head>
        <title>{`Fliesenleger Service in ${context.data} ❤️ Pro Handwerker`}</title>
        <meta name="robots" content="index,follow" />
        <meta
          name="description"
          content={`Herzlich willkommen bei Pro Handwerker – Ihrem Ansprechpartner für fachmännische Handwerksdienstleistungen in ${context.data}. Wir bieten Ihnen mit unserer Erfahrung eine hohe Fachkompetenz und eine kostenlose Beratung bei ihrem Vorhaben.`}
        />
        <link
          rel="canonical"
          href={`https://pro-handwerker.de/fliesenleger/${context.dataLink}/`}
        />
      </Head>
      <header className="hero-img">
        <Navbar />
        <div className="container-fluid mt-5 pt-5">
          <div className="container">
            <h1 className="title-text display-3">{`Fliesenleger Service in ${context.data}`}</h1>
            <h2 className="txt2">{`Fliesenleger Experte in ${context.data} | Kostenlose fachmännische Beratung | Faire Preis`}</h2>
            <h3 className="txt3 fs-1">
              <a href="tel:01748997115">0174 899-7115</a>
            </h3>
          </div>
        </div>
      </header>
      <main>
        <div className="container pt-5">
          <p>
            <span>
              <Link
                className="text-yellow hov-cl-lightblue"
                href={"/fliesenleger"}
              >
                Fliesenleger
              </Link>
            </span>{" "}
            / <span>{context.data}</span>
          </p>
          <h3 className="display-5 fw-bold mb-4">
            Fliesenleger Service in {context.data}
          </h3>
          <div className="col-12 col-md-10 col-lg-8">
            <p className="fs-5">
              {" "}
              Fliesenleger Service in {context.data} wir bieten Qualität für die
              Fliesenverlegung. Wir verfügen über ein breites Spektrum an
              Erfahrung in der Verlegung aller Arten von Fliesen, sowohl im
              privaten als auch im gewerblichen Bereich.
            </p>
            <p className="fs-5 mb-5">
              Unsere Arbeit zeichnet sich durch Präzision und Liebe zum Detail
              aus, um sicherzustellen, dass jede Fliese richtig verlegt Wird und
              gut aussieht.
            </p>
            <ul className="uber-ul">
              <li className="fs-5">Pünktlich und zuverlässig</li>
              <li className="fs-5">Qualitativ hochwertige Arbeit</li>
              <li className="fs-5">100% Zufriedenheitsgarantie</li>
            </ul>
            <p className="fs-5 pt-3 pb-5">
              Sie suchen einen professionellen Fliesenleger Service in{" "}
              {context.data}? Dann sind Sie bei unseren erfahrenen Profis von
              Pro Handwerker in {context.data} genau richtig!
            </p>

            {/* Another Section START */}
            <div className="row">
              <div className="col-4">
                <Image
                  className="img-fluid rounded shadow-sm"
                  src="/img/fliesenleger/fliesenleger-badsanierung.jpg"
                  alt="fliesenleger-badsanierung"
                  height={115} width={200}
                />
              </div>
              <div className="col-2"></div>
              <div className="col-6">
                <ul className="uber-ul">
                  <li className="fs-5">Fliesenlegerarbeiten vom Profi</li>
                  <li className="fs-5">
                    Ihre Vorstellungen sind unser Projekt
                  </li>
                  <li className="fs-5">
                    Wir verlegen Fliesen in jeglichen Designs und Format
                  </li>
                  <li className="fs-5">Zeitlos Modernes Design</li>
                </ul>
              </div>
            </div>

            {/* Another Section START */}
            <h3 className="display-5 fw-bold my-4">
              Verlegen von Fliesenböden
            </h3>
            <p className="fs-5">
              Fliesen sind eine langlebige und gut aussehende Bodenbelagsoption,
              die Hausbesitzer lieben. Es ist perfekt für stark frequentierte
              Bereiche in Ihrem Zuhause und Räumen, die anfällig für Schmutz,
              Nässe oder Feuchtigkeit sind. Bestimmte Arten von Fliesenböden
              sind auch in Kombination mit strahlungsgeheizten Böden eine
              Wohltat für kalte Füße.
            </p>
            <p className="fs-5">
              Fliesenböden sollen lange halten – stellen Sie mit Pro Handwerker
              ihrem Fliesenleger aus {context.data} sicher, dass Verlegung und
              Reparatur gleich beim ersten Mal richtig ausgeführt werden. Mit
              unserm Service für die Verlegung von Fliesenböden bieten wir ihnen
              eine 100-prozentige Kunden Zufriedenheitsgarantie.
            </p>
            <p className="fs-5">
              Die Verlegung von Fliesenböden erfordert eine ordnungsgemäße
              Vorbereitung des Unterbodens, um Wasserschäden zu vermeiden und
              einen langlebigen Boden zu gewährleisten. Egal, ob es sich um eine
              Zementplatte oder eine Fliesenunterlage handelt, wir stellen
              sicher, dass wir alle notwendigen Materialien für die Installation
              haben. Bei schweren Fliesen wie Schiefer stellen wir sicher, dass
              der Boden über die notwendigen Verstärkungen für eine
              ordnungsgemäße Installation verfügt.
            </p>
            <p className="fs-5">
              Sobald die Fliese verlegt und der Mörtel ausgehärtet ist, füllen
              wir die Fugen. Da Fugen einige Wochen brauchen, um vollständig
              auszuhärten, kommen wir zurück und tragen bei Bedarf eine
              Fugenversiegelung auf, um Flecken zu vermeiden.
            </p>

            {/* Another Section START */}
            <h3 className="display-5 fw-bold my-4">
              Unsere Fliesenleger Profis aus {context.data} Verlegen für Sie:
            </h3>
            <ul className="uber-ul">
              <li className="nrltx">Laminatbodenbelag,</li>
              <li className="nrltx">Küchenspiegel ,</li>
              <li className="nrltx">Zementfliesen ,</li>
              <li className="nrltx">Terrasse Fliesen ,</li>
              <li className="nrltx">Badezimmer Fliesen ,</li>
              <li className="nrltx">Bodenbelag aus Keramikfliesen ,</li>
              <li className="nrltx">Bodenbelag aus Schieferplatten ,</li>
              <li className="nrltx">Bodenbelag aus Korkfliesen ,</li>
              <li className="nrltx">Bodenbelag aus Feinsteinzeug ,</li>
              <li className="nrltx">Fußböden aus Marmorfliesen ,</li>
              <li className="nrltx">Fußböden aus Granitfliesen,</li>
              <li className="nrltx">Metrofliesen ,</li>
              <li className="nrltx">und vieles mehr!</li>
            </ul>

            <h3 className="display-5 fw-bold my-4">
              Reparatur von Fliesenböden
            </h3>
            <p className="fs-5">
              Das Schöne an Fliesenböden ist, dass sie im Vergleich zu Laminat-,
              Vinyl- oder Linoleumböden leicht zu reparieren sind. Wenn eine
              Fliese bricht, absplittert oder fleckig wird, kann Pro Handwerker
              ihr Fliesenleger aus {context.data} die Fliese ersetzen und die
              Fugen füllen, um sicherzustellen, dass sie zum Rest des
              Bodenbelags passt.
            </p>

            <h3 className="display-5 fw-bold my-4">
              Fliesenleger Service in {context.data}
            </h3>
            <p className="fs-5">
              Vertrauen Sie Pro Handwerker bei Ihrer nächsten Verlegung oder
              Reparatur von Fliesenböden. Fliesenleger Service für die Verlegung
              von Fliesenböden in {context.data}. Sie können uns auch unter 0174
              899-7115 anrufen.
            </p>
          </div>
        </div>
      </main>
      <Contact />
    </>
  );
};
export default City;
