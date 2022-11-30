import Head from "next/head";
import Contact from "../components/contact";
import Navbar from "../components/header/navbar";

const UeberUns = () => {
    return (
        <>
            <Head>
                <title>Über uns ❤️ Pro Handwerker</title>
                <meta name="robots" content="index,follow" />
                <meta name="description" content={`Herzlich willkommen bei Pro Handwerker – Ihrem Ansprechpartner für fachmännische Handwerksdienstleistungen. Wir bieten Ihnen mit unserer Erfahrung eine hohe Fachkompetenz und eine kostenlose Beratung bei ihrem Vorhaben.`} />
                <link rel="canonical" href="https://pro-handwerker.de/ueber-uns" />
            </Head>
            <header className="hero-img">
                <Navbar />
                <div className="container-fluid mt-5 pt-5">
                    <div className="container">
                        <h1 className="title-text display-3">Über Uns</h1>
                    </div>
                </div>
            </header>
            <div className="container pt-5">
                <h3 className="display-5 fw-bold mb-4">Über uns</h3>
                <div className="col-12 col-md-10 col-lg-8">
                    <p className="fs-5"> Herzlich willkommen bei Pro Handwerker – Ihrem Ansprechpartner für fachmännische Handverkehrsdienstleistungen.</p>
                    <p className="fs-5"> Wir bieten Ihnen mit unserer Erfahrung eine hohe Fachkompetenz. Tätig sind wir bundesweit.<br />
                        Für Ihr geplantes Vorhaben sind Sie bei uns genau Richtig – von der Planung über Materialauswahl und notwendige Vorarbeiten bis hin zur Endausführung.<br />
                        Unsere Dienstleistungen beginnen und enden mit einer erstklassigen Erfahrung und einer Strategie, die aufbaut.</p>
                    <p className="fs-5">
                        Pro Handwerker bietet professionelle Handwerkerdienstleistungen und eine 100-prozentige Kundenzufriedenheitsgarantie
                        Unsere Handerker Experten ermöglichen es, einen branchenführenden Service zu bieten, wir haben Lösungen für Gewerbe- und Privatkunden…
                    </p>
                    <p className="fs-5 mb-5">
                        Unser Handwerkersservice bietet, faire Preise, qualitativ hochwertig Arbeit, fachgerecht und schnell ausführung
                    </p>
                </div>
            </div>

        </>
    )
}
export default UeberUns