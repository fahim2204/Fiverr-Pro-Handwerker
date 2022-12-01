import Head from "next/head";
import Contact from "../components/contact";
import Navbar from "../components/header/navbar";

const Impressum = () => {
  return (
    <>
      <Head>
        <title>Impressum ❤️ Pro Handwerker</title>
        <meta name="robots" content="noindex,follow" />
        <meta
          name="description"
          content={`Herzlich willkommen bei Pro Handwerker – Ihrem Ansprechpartner für fachmännische Handwerksdienstleistungen. Wir bieten Ihnen mit unserer Erfahrung eine hohe Fachkompetenz und eine kostenlose Beratung bei ihrem Vorhaben.`}
        />
        <link rel="canonical" href="https://pro-handwerker.de/impressum/" />
      </Head>
      <header className="hero-img">
        <Navbar />
        <div className="container-fluid mt-5 pt-5">
          <div className="container">
            <h1 className="title-text display-3">
              Impressum
            </h1>
          </div>
        </div>
      </header>

      <div className="container pt-5">
        <h2 className="display-5 fw-bold mb-3">Impressum</h2>
        <p className="fs-5 mb-5">
          Sie können uns auch telefonisch erreichen oder eine E-Mail senden
        </p>
        <h2 className="fs-2 fw-bold mb-2">Telefon</h2>
        <p className="fs-5">Telefon : 0174 899-7115</p>
        <h2 className="fs-2 fw-bold mb-2">Addresse</h2>
        <p className="fs-5">Giuseppe Licopoli</p>
        <p className="fs-5">Neuenkamperstr. 32</p>
        <p className="fs-5">42657 Solingen</p>
        <h2 className="fs-2 fw-bold mb-2">Email</h2>
        <p className="nrltx">info@prohandwerker.de</p>
        <p className="fs-5 mb-5">
          Aufsichtsbehörde: Handwerkskammer Düsseldorf
        </p>

        <div className="col-12 col-md-10 col-lg-8">
          <h3 className="fs-2 fw-bold mb-2">EU-Streitschlichtung</h3>
          <p className="fs-5">
            Die Europäische Kommission stellt eine Plattform zur
            Online-Streitbeilegung (OS) bereit:
            <br />{" "}
            <a href="https://ec.europa.eu/consumers/odr" target={"_blank"}>
              https://ec.europa.eu/consumers/odr.
            </a>
            <br />
            Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </p>
          <h3 className="fs-2 fw-bold mb-2">
            Verbraucher­streit­beilegung Universal­schlichtungs­stelle
          </h3>
          <p className="fs-5">
            Wir sind nicht bereit oder verpflichtet, an
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </p>
          <h3 className="fs-2 fw-bold mb-2">Haftung für Inhalte</h3>
          <p className="fs-5">
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte
            auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
            §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
            verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
            überwachen oder nach Umständen zu forschen, die auf eine
            rechtswidrige Tätigkeit hinweisen.
            <br />
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
            Informationen nach den allgemeinen Gesetzen bleiben hiervon
            unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
            Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
            Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese
            Inhalte umgehend entfernen.
          </p>

          <h3 className="fs-2 fw-bold mb-2">Haftung für Links</h3>
          <p className="fs-5">
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren
            Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
            fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
            verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
            der Seiten verantwortlich. Die verlinkten Seiten wurden zum
            Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
            Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht
            erkennbar.
            <br />
            Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist
            jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
            zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir
            derartige Links umgehend entfernen.
          </p>
          <h3 className="fs-2 fw-bold mb-2">Urheberrecht</h3>
          <p className="fs-5 mb-5">
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
            diesen Seiten unterliegen dem deutschen Urheberrecht. Die
            Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
            Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
            schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            Downloads und Kopien dieser Seite sind nur für den privaten, nicht
            kommerziellen Gebrauch gestattet.
            <br />
            Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
            wurden, werden die Urheberrechte Dritter beachtet. Insbesondere
            werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie
            trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten
            wir um einen entsprechenden Hinweis. Bei Bekanntwerden von
            Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
          </p>
        </div>
      </div>
    </>
  );
};
export default Impressum;
