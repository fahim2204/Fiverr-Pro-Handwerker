import { CityList,GetCityName } from "../../components/data/cityList"
import Head from "next/head";
import Contact from "../../components/contact";
import Navbar from "../../components/header/navbar";
import Image from "next/image";


export async function getStaticPaths() {
    const paths = CityList.map(
        x => {
            return {
                params: { city: x.cityLink },
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
    return {
        props: { data: GetCityName(params.city), dataLink:params.city },
    }
}

const City = (context) => {
    return (
      <>
      <Head>
        <title>{`Terrassenbauer - Pflasterarbeiten in ${context.data} ❤️ Pro Handwerker`}</title>
        <meta name="robots" content="index,follow" />
        <meta name="description" content={`Herzlich willkommen bei Pro Handwerker – Ihrem Ansprechpartner für fachmännische Handwerksdienstleistungen in ${context.data}. Wir bieten Ihnen mit unserer Erfahrung eine hohe Fachkompetenz und eine kostenlose Beratung bei ihrem Vorhaben.`}/>
        <link rel="canonical" href={`https://pro-handwerker.de/garten-und-landschaftsbauer/${context.dataLink}`}/>
      </Head>
      <header className="hero-img">
        <Navbar />
        <div className="container-fluid mt-5 pt-5">
          <div className="container">
            <h1 className="title-text display-3">{`Terrassenbauer - Pflasterarbeiten in ${context.data}`}</h1>
            <h2 className="txt2">Terrassenbauer - Pflasterarbeiten | Kostenlose fachmännische Beratung | Faire Preis</h2>
            <h3 className="txt3 fs-1"><a href="tel:01748997115">0174 899-7115</a></h3>
          </div>
        </div>
      </header>
      <main>
        <div className="container pt-5">
          <h1 className="display-5 fw-bold mb-4">Garten und Landschaftsbauer Service in {context.data}<br/><span className="fs-2">innovative Gartengestaltung</span></h1>
          <div className="col-12 col-md-10 col-lg-8">
            <p className="fs-5">Terrassenbau - Terrassensanierung - Pflasterarbeiten - Garten und Landschaftsbauer Service in {context.data}</p>

            <p className="fs-5 mb-5">Wir erstellen ihnen ihre neue Traumterrasse nach ihren Wünschen</p>

            <ul className="uber-ul">
              <li className="fs-5">Pünktlich und zuverlässig</li>
              <li className="fs-5">Qualitativ hochwertige Arbeit</li>
              <li className="fs-5">100% Zufriedenheitsgarantie</li>
            </ul>
            <p className="fs-5 pt-3 pb-5">
            Unsere Handwerker Profis haben langjährige Erfahrung
            </p>

            {/* Another Section START */}
              <div className="row">
                <div className="col-4">
                <Image className="img-fluid rounded shadow-sm" src="/img/garten-und-landschaftsbauer/terassenbauer-pflasterarbeiten.jpg" alt="garten-und-landschaftsbauer" height={115} width={200}/>
                </div>
                <div className="col-2"></div>
                <div className="col-6">
                  <ul className="uber-ul">
                    <li className="fs-5">Handwersarbeiten vom Profi</li>
                    <li className="fs-5">Ihre Vorstellungen sind unser Projekt</li>
                    <li className="fs-5">Terrassenbau in {context.data}</li>
                    <li className="fs-5">Fachmännische Ausführung</li>
                  </ul>
                </div>
              </div>
    

            {/* Another Section START */}
            <h3 className="display-5 fw-bold my-4">Aufbau einer Terrasse: Die wichtigsten Fragen</h3>
            <p className="fs-5">Eine Terrasse dient als perfekte Erweiterung des Wohnraums im Sommer. Es verbessert Ihr Haus und Ihr Garten. Mit der Terrasse bieten Sie Ihrer Familie viel Platz für angenehme Stunden in der warmen Jahreszeit an. Der Bau einer Terrasse ist daher wert. Überlegen Sie sich vorsichtig über das, was Sie von Ihrer Terrasse erwarten. Dann behalten Sie auch die Kosten während des Baus unter Kontrolle.</p>

            <p className="fs-5">Die Ausrichtung der Terrasse ist ebenfalls wichtig, da dies Ihren Ertrag aus der Sonne beeinflusst. Genießen Sie die Morgenstrahlen nach Osten. Die Mittagssonne erwärmt Sie nach Süden, während Sie von der Abendsonne verwöhnt werden.</p>

            <p className="fs-5">Größe und Form Ihrer neuen Terrasse: Sowohl die Größe als auch die Form Ihrer Terrasse haben einen wichtigen Einfluss auf das, was Sie in Bezug auf Ausgaben budgetieren müssen. Für einen kleinen Raum benötigen Sie viel weniger Material und Wehen als für einen ziemlich umfangreichen Bereich. Grundrisse mit geraden Linien können auch etwas billiger als ovale oder gekrümmte Linien implementiert werden Kosten sind nicht alles. Die neue Terrasse sollte auch ihren Zweck gut erfüllen. Dies bedeutet, dass Sie, Ihre Familie und Ihre Gäste genug Platz haben müssen.</p>

            <p className="fs-5">Für die perfekte Größe empfehlen wir diese Richtlinien: Sitzbereich mit zwei Stühlen: sechs Quadratmeter - Sitzbereich mit vier Stühlen: neun Quadratmeter - Sitzbereich mit sechs Stühlen: vierzehn Quadratmeter</p>

            {/* Another Section START */}
            <h3 className="display-5 fw-bold my-4">Terrassenbau - Terrassensanierung - Pflasterarbeiten in {context.data}</h3>
            <ul className="uber-ul">
              <li className="nrltx">Neu- und Umgestaltung</li>
              <li className="nrltx">Terrassenbau,</li>
              <li className="nrltx">Terrassensanierung ,</li>
              <li className="nrltx">Pflasterarbeiten ( Gärtnerische Landschaftsarbeiten ) ,</li>
              <li className="nrltx">Zaunbau ,</li>
              <li className="nrltx">Einbau von Balkontüren,</li>
              <li className="nrltx">USW.</li>
            </ul>

            <h3 className="display-5 fw-bold my-4">Terrassenbau - Terrassensanierung - Pflasterarbeiten kosten</h3>
            <p className="fs-5">Natürlich beinhaltet ein Projekt wie die Terrassenkonstruktion Kosten. Ausgaben für das Material und für die Miete der erforderlichen Maschinen sind auf einer bestimmten Ebene immer erheblich. Es gibt auch Kosten für die Hilfe von Handwerkern. Es sei denn, Sie können die ganze Arbeit selbst erledigen. Die Erfahrung zeigt, dass viele Bauherren die Kosten für den Bau einer Terrasse falsch berechnen. Sie unterschätzen einfach die Kosten. Wir empfehlen Ihnen daher, die Kosten von Anfang an sorgfältig zu planen und sie nicht aus den Augen zu verlieren. Beim Bau einer Terrasse sind dies wichtige Kostenpunkte:</p>

            <p className="fs-5">das in der Unterstruktur verwendete Material - die Deckung für die Terrassen - Kosten für Handwerker - Maschinen und Werkzeuge ,</p>

            <h3 className="display-5 fw-bold my-4">Materialunterkonstruktion:</h3>
            <p className="fs-5">Eine stabile Basis sorgt für eine bessere Haltbarkeit. Trotz höherer Investitionen raten wir Ihnen daher immer, für die Unterstruktur etwas höhere Baumaterialien zu verwenden. Dann müssen Sie später nichts überarbeiten oder reparieren. Hier können Sie die Wahl entsprechend Ihrem Geschmack und Budget treffen. Naturstein mit einer polierten Oberfläche ist teurer. Berechnen Sie die Mengen genau. Auf diese Weise vermeiden Sie Überschüsse und unnötige Kosten. Ausgaben für Handwerker: Bewerten Sie Ihre eigenen Fähigkeiten realistisch. Natürlich spart man viel Geld, wenn man es selbst erledigt. Unangemessen ausgeführte Arbeiten verursachen jedoch zusätzliche hohe Kosten. Maschinen und Werkzeuge: Große Maschinen können günstig gemietet werden, wenn Sie Ihre Terrasse selbst bauen. Es ist noch wirtschaftlicher, wenn Sie Prozesse genau planen. Auf diese Weise vermeiden Sie Ausfallzeiten, für die Sie sonst bezahlen müssten.</p>
            
            <h3 className="display-5 fw-bold my-4">So implementieren Sie Ihre Terrassenkonstruktion</h3>
            <p className="fs-5">Feuchtigkeit schädigt die Oberfläche, der Regen sollte daher gut abfließen. Achten Sie also auf den Hang, wenn Sie die Terrasse -Unterstruktur bauen. Zwischen zwei und drei Prozent werden als optimal angesehen. Je rauer das Material der Terrasse, desto größer ist die Neigung. Wenn die Terrasse aus Holz besteht, folgt es am besten, der Legrichtung der Dielen zu folgen und immer von der Hausmauer wegzuführen. In jedem Fall ist Holz eine beliebte Deckung für Terrassen. Sein</p>

          </div>

        </div>

      </main>
      <Contact />
    </>
    )
}
export default City