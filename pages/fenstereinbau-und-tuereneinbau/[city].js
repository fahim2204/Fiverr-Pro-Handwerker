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
        <title>{`Fenstereinbau und Türeneinbau in ${context.data} - Pro Handwerker`}</title>
        <meta name="robots" content="index,follow" />
        <meta name="description" content={`Herzlich willkommen bei Pro Handwerker – Ihrem Ansprechpartner für fachmännische Handverkehrsdienstleistungen in ${context.data}. Wir bieten Ihnen mit unserer Erfahrung eine hohe Fachkompetenz. Tätig sind wir bundesweit. Für Ihr geplantes Vorhaben sind Sie bei uns genau Richtig.`}/>
        <link rel="canonical" href={`https://pro-handwerker.de/fenstereinbau-und-tuereneinbau/${context.data}`}/>
      </Head>
      <header className="hero-img">
        <Navbar />
        <div className="container-fluid mt-5 pt-5">
          <div className="container">
            <h1 className="text-center display-3 fw-bold text-white">{`Fenstereinbau und Türeneinbau in ${context.data}`}</h1>
            <h2 className="text-center fs-6 text-white mb-3">{`Fenstereinbau und Türeneinbau in ${context.data} | Kostenlose fachmännische Beratung | Faire Preis`}</h2>
            <h1 className="text-center fw-bold fs-1 text-white pt-4"><a href="tel:01748999213">0174 899-9213</a></h1>
          </div>
        </div>
      </header>
      <main>
        <div className="container pt-5">
          <h1 className="display-5 fw-bold mb-4">Fenstereinbau und Türeneinbau in {context.data}</h1>
          <div className="col-12 col-md-10 col-lg-8">
            <p className="fs-5"> „Wir können auch Fenster - und Türinstallationsdienste mit Ihren Produkten anbieten.</p>

            <p className="fs-5 mb-5">Pro Handwerker kann einen Installationsservice für alle Ihre Fenster- und Türprodukte anbieten. Wenn Sie Geld für den Kauf von Fenstern und Türen ausgegeben haben , müssen diese ordnungsgemäß installiert werden, um sicherzustellen, dass sie so lange wie möglich halten.</p>

            <ul className="uber-ul">
              <li className="fs-5">Pünktlich und zuverlässig</li>
              <li className="fs-5">Qualitativ hochwertige Arbeit</li>
              <li className="fs-5">100% Zufriedenheitsgarantie</li>
            </ul>
            <p className="fs-5 pt-3 pb-5">
              Unsere Handwerkerexperten haben so ziemlich alles gesehen – und repariert!
            </p>

            {/* Another Section START */}
              <div className="row">
                <div className="col-4">
                <img className="img-fluid rounded shadow-sm" src="img/fenstereinbau-und-tuereneinbau/türenbauer-fensterbauer.jpg" alt="Fenstereinbau-und-Türeneinbau" />
                </div>
                <div className="col-2"></div>
                <div className="col-6">
                  <ul className="uber-ul">
                    <li className="fs-5">Fenstereinbau und Türeneinbau in {context.data}</li>
                    <li className="fs-5">Ihre Vorstellungen sind unser Projekt</li>
                    <li className="fs-5">Preiswert und fachgerecht</li>
                    <li className="fs-5">Fachmännische Ausführung</li>
                  </ul>
                </div>
              </div>
    

            {/* Another Section START */}
            <h1 className="display-5 fw-bold my-4">Fenstereinbau und Türeneinbau in {context.data}</h1>
            <p className="fs-5">Wenn die Fenster und Türen richtig installiert werden, erhöhen sie den Wert Ihres Hauses und seine Sicherheit, während sie auch die Isoliereigenschaften Ihres Hauses verbessern, also müssen Sie die besten Fenster- und Türinstallateure wählen.</p>

            <p className="fs-5">Wenn Sie sich für unseren Montageservice für Türeinbau und Fenstereinbau in {context.data} entscheiden, entscheiden Sie sich dafür, Ihre Fenster und Türen von unserem hochspezialisierten Team von Fenster- und Türmonteuren einbauen zu lassen, das Ihnen höchste Servicequalität und Liebe zum Detail garantiert.</p>

            <p className="fs-5">Unsere ausgewählten Fenster und Türen sind einfach zu montieren und dank ihrer unkomplizierten Konstruktion lassen sich alle Fenster und Türen relativ schnell in Ihr Objekt einbauen.</p>

            <p className="fs-5">Unsere Installationen sind Bundesweit verfügbar, erkundigen Sie sich jedoch bitte, ob wir Ihr Gebiet abdecken.</p>

            {/* Another Section START */}
            <h1 className="display-5 fw-bold my-4">Wir bieten folgenden Fenstereinbau und Türeinbauservice an</h1>
            <ul className="uber-ul">
              <li className="fs-5 mb-2">Einbau von Kunststofffenster / PVC-Fenster</li>
              <li className="fs-5 mb-2">Einbau von Holzfenster,</li>
              <li className="fs-5 mb-2">Einbau von Aluminiumfenster,</li>
              <li className="fs-5 mb-2">Einbau von Schallschutzfenster,</li>
              <li className="fs-5 mb-2">Einbau von Haustüren,</li>
              <li className="fs-5 mb-2">Einbau von Balkontüren,</li>
              <li className="fs-5 mb-2">und vieles mehr!</li>
            </ul>

            <h1 className="display-5 fw-bold my-4">Fenster- und Türmontageservice in {context.data}</h1>
            <p className="fs-5">Wir verstehen, dass der Kauf von Ersatz- oder neuen Fenstern und Hartholztüren nur die halbe Miete ist, der Einbau Ihrer neuen Fenster und Türen die andere Hälfte.</p>

            <p className="fs-5">Bei Pro Handwerker ihrem Service für Türeinbau und Fenstereinbau in {context.data} können wir allen unseren Kunden einen vollständigen Fenster- oder Türinstallationsservice anbieten. Die Nutzung unseres Service ist nicht nur schneller, als selbst jemanden zu finden, sondern auch einfacher, da unser Team die Produkte bereits kennt, was den Installationsprozess für Sie so viel reibungsloser und problemloser macht.</p>

            <p className="fs-5">von der Installation einzelner Fenster bis hin zum Austausch von Fenstern und Türen im ganzen Haus. Unsere umfangreiche Erfahrung im Türeinbau und Fenstereinbau in {context.data} in dieser Branche bedeutet, dass wir nicht nur zuverlässig sind, sondern auch über einen etablierten, qualitativ hochwertigen und freundlichen Kundenservice verfügen, der eine reibungslose Kundenabwicklung von der Auswahl Ihres Fenster- oder Türdesigns bis hin zum Einbau Ihres neuen Fensters oder Ihrer neuen Tür gewährleistet.</p>


            <h1 className="display-5 fw-bold my-4">Professioneller Tür und Fenstereinbauservice in {context.data}</h1>
            <p className="fs-5">Unser hochqualifiziertes Montageteam in {context.data} sorgt dafür, dass alle Ihre Fenster und Türen fachgerecht eingebaut werden und garantiert Ihnen über Jahre hinweg ein wartungsfreies Fenster oder eine wartungsfreie Tür.</p>
            
            <p className="fs-5">Für ein genaues Angebot wenden Sie sich bitte an unser Team , das Ihnen den von uns angebotenen Installationsservice sowie die Preise für Fenster, Türen und Installationskosten erläutern wird.</p>

          </div>

        </div>

      </main>
      <Contact />
    </>
    )
}
export default City