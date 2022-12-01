import Head from "next/head";
import Contact from "../components/contact";
import Navbar from "../components/header/navbar";

const Kontakt = () => {
    return (
        <>
            <Head>
                <title>Kontakt ❤️ Pro Handwerker</title>
                <meta name="robots" content="noindex,follow" />
                <meta name="description" content={`Herzlich willkommen bei Pro Handwerker – Ihrem Ansprechpartner für fachmännische Handwerksdienstleistungen. Wir bieten Ihnen mit unserer Erfahrung eine hohe Fachkompetenz und eine kostenlose Beratung bei ihrem Vorhaben.`} />
                <link rel="canonical" href="https://pro-handwerker.de/kontakt/" />
            </Head>
            <header className="hero-img">
                <Navbar />
                <div className="container-fluid mt-5 pt-5">
                    <div className="container">
                        <h1 className="title-text display-3">Kontakt</h1>
                    </div>
                </div>
            </header>
            <div className="container pt-5">
                <h3 className="display-5 fw-bold mb-4">Bleiben Sie mit uns in Kontakt</h3>
                <p className="fs-5 mb-5">Sie können uns auch telefonisch erreichen oder eine E-Mail senden</p>
                <h3 className="display-6 fw-bold mb-2">Telefon</h3>
                <p className="fs-5">Telefon : 0174 899-7115</p>
                <h3 className="display-6 fw-bold mb-2 mt-2">Addresse</h3>
                <p className="fs-5 mb-1">Giuseppe Licopoli</p>
                <p className="fs-5 mb-1">Neuenkamperstr. 32</p>
                <p className="fs-5">42657 Solingen</p>
                <h3 className="display-6 fw-bold mb-2 mt-2">Email</h3>
                <p className="fs-5 mb-5">info@prohandwerker.de</p>
            </div>

        </>
    )
}
export default Kontakt