import { CityList } from "../../components/data/cityList"
import Head from "next/head";
import Contact from "../../components/contact";
import Navbar from "../../components/header/navbar";
import Link from "next/link";


export async function getStaticPaths() {
    const paths = CityList.map(
        x => {
            return {
                params: { city: x.city },
            }
        }
    )
    return {
        paths,
        fallback: false,
    }
}
export async function getStaticProps(context) {
    const { params } = context;
    // console.log(context)
    return {
        props: { data: params.city },
    }
}

const City = (context) => {
    return (
      <>
      <Head>
        <title>{`Trockenbauer in ${context.data} - Pro Handwerker`}</title>
        <meta name="robots" content="index,follow" />
        <meta name="description" content={`Herzlich willkommen bei Pro Handwerker – Ihrem Ansprechpartner für fachmännische Handverkehrsdienstleistungen in ${context.data}. Wir bieten Ihnen mit unserer Erfahrung eine hohe Fachkompetenz. Tätig sind wir bundesweit. Für Ihr geplantes Vorhaben sind Sie bei uns genau Richtig.`}/>
        <link rel="canonical" href={`https://pro-handwerker.de/trockenbauer/${context.data}`}/>

      </Head>
      <header className="hero-img">
        <Navbar />
        <div className="container-fluid mt-5 pt-5">
          <div className="container">
            <h1 className="text-center display-3 fw-bold text-white">{`Trockenbauer in ${context.data}`}</h1>
            <h2 className="text-center fs-6 text-white mb-3">{`Trockenbauer Experte in ${context.data} | Kostenlose fachmännische Beratung | Faire Preis`}</h2>
            <h1 className="text-center fw-bold fs-1 text-white pt-4"><a href="tel:01748999213">0174 899-9213</a></h1>
          </div>
        </div>
      </header>
      <main>
        <div className="container pt-5">
          <h1 className="display-5 fw-bold mb-4">Trockenbauer in {context.data}</h1>
          <div className="col-12 col-md-10 col-lg-8">
            <p className="fs-5"> Trockenbauer in {context.data}. Reparieren, Fertigstellen, Installieren, Montieren und mehr.</p>
            <p className="fs-5 mb-5">Nichts ist greller als ein Loch in Ihrer Wand. Darüber hinaus kann die Vernachlässigung von Trockenbauprojekten später zu weiteren Schäden führen. Egal ob Sie einem kürzlich durchgeführten Umbauprojekt den letzten Schliff geben oder Verschleiß ausbessern, unsere Trockenbauer in {context.data} können die Arbeit erledigen. Erfahren Sie mehr über unsere spezifischen Handwerkerleistungen im Trockenbau.</p>
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
                  <img className="img-fluid rounded shadow-sm" src="/img/trockenbauer/trockenbauer.jpg" alt="trockenbauer" />
                </div>
                <div className="col-2"></div>
                <div className="col-6">
                  <ul className="uber-ul">
                    <li className="fs-5">Trockenbauarbeiten vom Profi</li>
                    <li className="fs-5">Ihre Vorstellungen sind unser Projekt</li>
                    <li className="fs-5">Trockenbauarbeiten in {context.data}</li>
                    <li className="fs-5">Fachmännische Ausführung</li>
                  </ul>
                </div>
              </div>
    

            {/* Another Section START */}
            <h1 className="display-5 fw-bold my-4">Trockenbauarbeiten in {context.data}</h1>
            <p className="fs-5">Die richtigen Regale können einen Raum wirklich zusammenbringen. Bei Regalen trifft Aufbewahrung auf Stil. Unser erfahrenes Team von Handwerkern kann eine Vielzahl von Regaloptionen bauen und/oder installieren, die jeden Raum in Ihrem Haus aufwerten..</p>

            <p className="fs-5">Je nach Größe und Gewicht kann das Aufhängen eines Rahmens schwierig sein. Bei schwereren Spiegeln und Bilderrahmen müssen Sie möglicherweise einen Bolzen ausfindig machen oder einen Trockenbauanker verwenden. Ihr Trockenbauer in {context.data} stellt vor Ort sicher, dass alle Ihre Fotos, Poster, Spiegel und Kunstwerke eben und sicher sind. Wir reparieren sogar die Nagellöcher früherer Halterungen..</p>

            <p className="fs-5">Wandverkleidung ist eine Mischung aus Fußleiste, Wandverkleidung, Stuhlschiene und Formteil, die jedem Raum oder Flur einen optisch ansprechenden, klassischen Look verleiht. Ihr Trockenbauer in {context.data} kann Ihnen vor Ort bei der Planung und Installation der perfekten Wandverkleidung für Flure und Zimmer in Ihrem ganzen Haus helfen. Auf unsere Sorglos-Garantie können Sie sich verlassen..</p>

            <p className="fs-5">Reparaturen und Endbearbeitung von Trockenbauwänden.</p>

            {/* Another Section START */}
            <h1 className="display-5 fw-bold my-4">Unsere Trockenbauer in {context.data} können Reparaturen und Neuinstallationen durchführen!</h1>
            <ul className="uber-ul">
              <li className="fs-5 mb-2">Risse vom Absetzen</li>
              <li className="fs-5 mb-2">Verschleiß,</li>
              <li className="fs-5 mb-2">Türklinkenlöcherel ,</li>
              <li className="fs-5 mb-2">Feuchtigkeitsschaden ,</li>
              <li className="fs-5 mb-2">Kinderschaden ,</li>
              <li className="fs-5 mb-2">Mäuse Schaden ,</li>
              <li className="fs-5 mb-2">Dartlöcher werfen ,</li>
              <li className="fs-5 mb-2">Trockenbau-Ankerlöcher ,</li>
              <li className="fs-5 mb-2">Q1-Q4 ,</li>
              <li className="fs-5 mb-2">Trockenbauaufhängung (inkl. Deckenmontage) ,</li>
              <li className="fs-5 mb-2">Herstellen von Unterkostruktion ,</li>
              <li className="fs-5 mb-2">Rigipsplatten an Decke und Wand,</li>
              <li className="fs-5 mb-2">Rigipsplatten, grüne Platten, Spachtelarbeiten, Feinschliff ,</li>
              <li className="fs-5 mb-2">und vieles mehr!</li>
             
            </ul>

            <h1 className="display-5 fw-bold my-4">Installation und Reparatur von Kronenformteilen</h1>
            <p className="fs-5">Die richtige Installation von Zierleisten ist wichtig, um Ihrem Zuhause sowohl Wert als auch Stil zu verleihen. Es ist auch eine unserer Spezialitäten. Von kolonial bis modern und mehr, unsere erfahrenen Handwerker Trockenbau Experten in {context.data} sorgen dafür, dass Ihre Zierleiste den Stil Ihres Hauses widerspiegelt..</p>


            <h1 className="display-5 fw-bold my-4">Trockenbauer in {context.data}</h1>
            <p className="fs-5">Wenn es an der Zeit ist, Trockenbauwände in Ihrem Haus zu installieren, machen wir die schwierige Aufgabe einfach. Von der Entfernung alter, beschädigter Teile bis zum Aufhängen neuer Trockenbauwände kümmern sich unsere professionellen Trockenbauer in {context.data} um das Projekt von Anfang bis Ende..</p>

          </div>

        </div>

      </main>
      <Contact />
    </>
    )
}
export default City