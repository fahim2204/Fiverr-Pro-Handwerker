import { CityList, GetCityName } from "../../components/data/cityList";
import Head from "next/head";
import Contact from "../../components/contact";
import Navbar from "../../components/header/navbar";
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
  // console.log(context)
  return {
    props: { data: GetCityName(params.city), dataLink: params.city },
  };
}

const City = (context) => {
  return (
    <>
      <Head>
        <title>{`Trockenbauer Service in ${context.data} ❤️ Pro Handwerker`}</title>
        <meta name="robots" content="index,follow" />
        <meta
          name="description"
          content={`Herzlich willkommen bei Pro Handwerker – Ihrem Ansprechpartner für fachmännische Handwerksdienstleistungen in ${context.data}. Wir bieten Ihnen mit unserer Erfahrung eine hohe Fachkompetenz und eine kostenlose Beratung bei ihrem Vorhaben.`}
        />
        <link
          rel="canonical"
          href={`https://pro-handwerker.de/trockenbauer/${context.dataLink}`}
        />
      </Head>
      <header className="hero-img">
        <Navbar />
        <div className="container-fluid mt-5 pt-5">
          <div className="container">
            <h3 className="title-text display-3">{`Trockenbauer Service in ${context.data}`}</h3>
            <h2 className="txt2">{`Trockenbauer Experte in ${context.data} | Kostenlose fachmännische Beratung | Faire Preis`}</h2>
            <h3 className="txt3 fs-1">
              <a href="tel:01748997115">0174 899-7115</a>
            </h3>
          </div>
        </div>
      </header>
      <main>
        <div className="container pt-5">
          <h1 className="display-5 fw-bold mb-4">
            Trockenbauer Service in {context.data}
          </h1>
          <div className="col-12 col-md-10 col-lg-8">
            <p className="fs-5">
              {" "}
              Trockenbauer Service in {context.data}. Reparieren, Fertigstellen,
              Installieren, Montieren und mehr.
            </p>
            <p className="fs-5 mb-5">
              Nichts ist greller als ein Loch in Ihrer Wand. Darüber hinaus kann
              die Vernachlässigung von Trockenbauprojekten später zu weiteren
              Schäden führen. Egal ob Sie einem kürzlich durchgeführten
              Umbauprojekt den letzten Schliff geben oder Verschleiß ausbessern,
              unsere Trockenbauer Service in {context.data} können die Arbeit
              erledigen. Erfahren Sie mehr über unsere spezifischen
              Handwerkerleistungen im Trockenbau.
            </p>
            <ul className="uber-ul">
              <li className="fs-5">Pünktlich und zuverlässig</li>
              <li className="fs-5">Qualitativ hochwertige Arbeit</li>
              <li className="fs-5">100% Zufriedenheitsgarantie</li>
            </ul>
            <p className="fs-5 pt-3 pb-5">
              Sie haben so ziemlich alles gesehen – und repariert!
            </p>

            {/* Another Section START */}
            <div className="row">
              <div className="col-4">
                <Image
                  className="img-fluid rounded shadow-sm"
                  src="/img/trockenbauer/trockenbauer-verputzer.jpg"
                  alt="trockenbauer"
                  height={115} width={200}
                />
              </div>
              <div className="col-2"></div>
              <div className="col-6">
                <ul className="uber-ul">
                  <li className="fs-5">Trockenbauarbeiten vom Profi</li>
                  <li className="fs-5">
                    Ihre Vorstellungen sind unser Projekt
                  </li>
                  <li className="fs-5">Trockenbauarbeiten in {context.data}</li>
                  <li className="fs-5">Fachmännische Ausführung</li>
                </ul>
              </div>
            </div>

            {/* Another Section START */}
            <h2 className="display-5 fw-bold my-4">
              Trockenbauarbeiten in {context.data}
            </h2>
            <p className="fs-5">
              Die richtigen Regale können einen Raum wirklich zusammenbringen.
              Bei Regalen trifft Aufbewahrung auf Stil. Unser erfahrenes Team
              von Handwerkern kann eine Vielzahl von Regaloptionen bauen
              und/oder installieren, die jeden Raum in Ihrem Haus aufwerten..
            </p>

            <p className="fs-5">
              Je nach Größe und Gewicht kann das Aufhängen eines Rahmens
              schwierig sein. Bei schwereren Spiegeln und Bilderrahmen müssen
              Sie möglicherweise einen Bolzen ausfindig machen oder einen
              Trockenbauanker verwenden. Ihr Trockenbauer Service in{" "}
              {context.data} stellt vor Ort sicher, dass alle Ihre Fotos,
              Poster, Spiegel und Kunstwerke eben und sicher sind. Wir
              reparieren sogar die Nagellöcher früherer Halterungen..
            </p>

            <p className="fs-5">
              Wandverkleidung ist eine Mischung aus Fußleiste, Wandverkleidung,
              Stuhlschiene und Formteil, die jedem Raum oder Flur einen optisch
              ansprechenden, klassischen Look verleiht. Ihr Trockenbauer Service
              in {context.data} kann Ihnen vor Ort bei der Planung und
              Installation der perfekten Wandverkleidung für Flure und Zimmer in
              Ihrem ganzen Haus helfen. Auf unsere Sorglos-Garantie können Sie
              sich verlassen..
            </p>

            <p className="fs-5">
              Reparaturen und Endbearbeitung von Trockenbauwänden.
            </p>

            {/* Another Section START */}
            <h3 className="display-5 fw-bold my-4">
              Unsere Trockenbauer Service in {context.data} können Reparaturen
              und Neuinstallationen durchführen!
            </h3>
            <ul className="uber-ul">
              <li className="nrltx">Risse vom Absetzen</li>
              <li className="nrltx">Verschleiß,</li>
              <li className="nrltx">Türklinkenlöcherel ,</li>
              <li className="nrltx">Feuchtigkeitsschaden ,</li>
              <li className="nrltx">Kinderschaden ,</li>
              <li className="nrltx">Mäuse Schaden ,</li>
              <li className="nrltx">Dartlöcher werfen ,</li>
              <li className="nrltx">Trockenbau-Ankerlöcher ,</li>
              <li className="nrltx">Q1-Q4 ,</li>
              <li className="nrltx">
                Trockenbauaufhängung (inkl. Deckenmontage) ,
              </li>
              <li className="nrltx">Herstellen von Unterkostruktion ,</li>
              <li className="nrltx">Rigipsplatten an Decke und Wand,</li>
              <li className="nrltx">
                Rigipsplatten, grüne Platten, Spachtelarbeiten, Feinschliff ,
              </li>
              <li className="nrltx">und vieles mehr!</li>
            </ul>

            <h3 className="display-5 fw-bold my-4">
              Installation und Reparatur von Kronenformteilen
            </h3>
            <p className="fs-5">
              Die richtige Installation von Zierleisten ist wichtig, um Ihrem
              Zuhause sowohl Wert als auch Stil zu verleihen. Es ist auch eine
              unserer Spezialitäten. Von kolonial bis modern und mehr, unsere
              erfahrenen Handwerker Trockenbau Experten in {context.data} sorgen
              dafür, dass Ihre Zierleiste den Stil Ihres Hauses widerspiegelt..
            </p>

            <h3 className="display-5 fw-bold my-4">
              Trockenbauer Service in {context.data}
            </h3>
            <p className="fs-5">
              Wenn es an der Zeit ist, Trockenbauwände in Ihrem Haus zu
              installieren, machen wir die schwierige Aufgabe einfach. Von der
              Entfernung alter, beschädigter Teile bis zum Aufhängen neuer
              Trockenbauwände kümmern sich unsere professionellen Trockenbauer
              Service in {context.data} um das Projekt von Anfang bis Ende..
            </p>
          </div>
        </div>
      </main>
      <Contact />
    </>
  );
};
export default City;
