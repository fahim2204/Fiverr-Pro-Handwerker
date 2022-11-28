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
          <title>{`Fliesenleger in ${context.data} - Pro Handwerker`}</title>
          <meta name="robots" content="index,follow" />
          <meta name="description" content={`Herzlich willkommen bei Pro Handwerker – Ihrem Ansprechpartner für fachmännische Handverkehrsdienstleistungen in ${context.data}. Wir bieten Ihnen mit unserer Erfahrung eine hohe Fachkompetenz. Tätig sind wir bundesweit. Für Ihr geplantes Vorhaben sind Sie bei uns genau Richtig.`}/>
          <link rel="canonical" href={`https://pro-handwerker.de/fliesenleger/${context.data}`} />
        </Head>
        <header className="hero-img">
          <Navbar />
          <div className="container-fluid mt-5 pt-5">
            <div className="container">
              <h1 className="text-center display-3 fw-bold text-white">{`Fliesenleger in ${context.data}`}</h1>
              <h2 className="text-center fs-6 text-white mb-3">{`Fliesenleger Experte in ${context.data} | Kostenlose fachmännische Beratung | Faire Preis`}</h2>
              <h1 className="text-center fw-bold fs-1 text-white pt-4"><a href="tel:01748999213">0174 899-9213</a></h1>
            </div>
          </div>
        </header>
        <main>
          <div className="container pt-5">
            <p><span><Link className="text-yellow hov-cl-lightblue" href={"/fliesenleger"}>Fliesenleger</Link></span> / <span>{context.data}</span></p>
            <h1 className="display-5 fw-bold mb-4">Fliesenleger in {context.data}</h1>
            <div className="col-12 col-md-10 col-lg-8">
              <p className="fs-5"> Fliesenleger in {context.data} wir bieten Qualität für die Fliesenverlegung. Wir verfügen über ein breites Spektrum an Erfahrung in der Verlegung aller Arten von Fliesen, sowohl im privaten als auch im gewerblichen Bereich.</p>
              <p className="fs-5 mb-5">Unsere Arbeit zeichnet sich durch Präzision und Liebe zum Detail aus, um sicherzustellen, dass jede Fliese richtig verlegt Wird und gut aussieht.</p>
              <ul className="uber-ul">
                <li className="fs-5">Pünktlich und zuverlässig</li>
                <li className="fs-5">Qualitativ hochwertige Arbeit</li>
                <li className="fs-5">100% Zufriedenheitsgarantie</li>
              </ul>
              <p className="fs-5 pt-3 pb-5">
                Sie suchen einen professionellen Fliesenleger in {context.data}? Dann sind Sie bei unseren erfahrenen Profis von Pro Handwerker in {context.data} genau richtig!
              </p>
  
              {/* Another Section START */}
                <div className="row">
                  <div className="col-4">
                    <img className="img-fluid rounded shadow-sm" src="/img/fliesenleger/fliesenleger-badsanierung.jpg" alt="fliesenleger-badsanierung" />
                  </div>
                  <div className="col-2"></div>
                  <div className="col-6">
                    <ul className="uber-ul">
                      <li className="fs-5">Fliesenlegerarbeiten vom Profi</li>
                      <li className="fs-5">Ihre Vorstellungen sind unser Projekt</li>
                      <li className="fs-5">Wir verlegen Fliesen in jeglichen Designs und Format</li>
                      <li className="fs-5">Zeitlos Modernes Design</li>
                    </ul>
                  </div>
                </div>
      
  
              {/* Another Section START */}
              <h1 className="display-5 fw-bold my-4">Verlegen von Fliesenböden</h1>
              <p className="fs-5">Fliesen sind eine langlebige und gut aussehende Bodenbelagsoption, die Hausbesitzer lieben. Es ist perfekt für stark frequentierte Bereiche in Ihrem Zuhause und Räumen, die anfällig für Schmutz, Nässe oder Feuchtigkeit sind. Bestimmte Arten von Fliesenböden sind auch in Kombination mit strahlungsgeheizten Böden eine Wohltat für kalte Füße.</p>
              <p className="fs-5">Fliesenböden sollen lange halten – stellen Sie mit Pro Handwerker ihrem Fliesenleger aus {context.data} sicher, dass Verlegung und Reparatur gleich beim ersten Mal richtig ausgeführt werden. Mit unserm Service für die Verlegung von Fliesenböden bieten wir ihnen eine 100-prozentige Kunden Zufriedenheitsgarantie.</p>
              <p className="fs-5">Die Verlegung von Fliesenböden erfordert eine ordnungsgemäße Vorbereitung des Unterbodens, um Wasserschäden zu vermeiden und einen langlebigen Boden zu gewährleisten. Egal, ob es sich um eine Zementplatte oder eine Fliesenunterlage handelt, wir stellen sicher, dass wir alle notwendigen Materialien für die Installation haben. Bei schweren Fliesen wie Schiefer stellen wir sicher, dass der Boden über die notwendigen Verstärkungen für eine ordnungsgemäße Installation verfügt.</p>
              <p className="fs-5">Sobald die Fliese verlegt und der Mörtel ausgehärtet ist, füllen wir die Fugen. Da Fugen einige Wochen brauchen, um vollständig auszuhärten, kommen wir zurück und tragen bei Bedarf eine Fugenversiegelung auf, um Flecken zu vermeiden.</p>
  
              {/* Another Section START */}
              <h1 className="display-5 fw-bold my-4">Unsere Fliesenleger Profis aus {context.data} Verlegen für Sie:</h1>
              <ul className="uber-ul">
                <li className="fs-5 mb-2">Laminatbodenbelag,</li>
                <li className="fs-5 mb-2">Küchenspiegel ,</li>
                <li className="fs-5 mb-2">Zementfliesen ,</li>
                <li className="fs-5 mb-2">Terrasse Fliesen ,</li>
                <li className="fs-5 mb-2">Badezimmer Fliesen ,</li>
                <li className="fs-5 mb-2">Bodenbelag aus Keramikfliesen ,</li>
                <li className="fs-5 mb-2">Bodenbelag aus Schieferplatten ,</li>
                <li className="fs-5 mb-2">Bodenbelag aus Korkfliesen ,</li>
                <li className="fs-5 mb-2">Bodenbelag aus Feinsteinzeug ,</li>
                <li className="fs-5 mb-2">Fußböden aus Marmorfliesen ,</li>
                <li className="fs-5 mb-2">Fußböden aus Granitfliesen,</li>
                <li className="fs-5 mb-2">Metrofliesen ,</li>
                <li className="fs-5 mb-2">und vieles mehr!</li>
              </ul>
  
              <h1 className="display-5 fw-bold my-4">Reparatur von Fliesenböden</h1>
              <p className="fs-5">Das Schöne an Fliesenböden ist, dass sie im Vergleich zu Laminat-, Vinyl- oder Linoleumböden leicht zu reparieren sind. Wenn eine Fliese bricht, absplittert oder fleckig wird, kann Pro Handwerker ihr Fliesenleger aus {context.data} die Fliese ersetzen und die Fugen füllen, um sicherzustellen, dass sie zum Rest des Bodenbelags passt.</p>
  
  
              <h1 className="display-5 fw-bold my-4">Fliesenleger in {context.data}</h1>
              <p className="fs-5">Vertrauen Sie Pro Handwerker bei Ihrer nächsten Verlegung oder Reparatur von Fliesenböden. Finden Sie Ihren örtlichen Experten für die Verlegung von Fliesenböden in Wuppertal. Sie können uns auch unter 0174 899-9213 anrufen.</p>
  
            </div>
  
          </div>
  
        </main>
        <Contact />
      </>
    )
}
export default City