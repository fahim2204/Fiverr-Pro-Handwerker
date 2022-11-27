import Head from "next/head";
import Navbar from "../../components/header/navbar";
import Link from "next/link";


const Region = () => {
    return (
        <>
            <Head>
                <title>Region - Pro Handwerker</title>
                <meta name="robots" content="index,follow" />
                <link rel="canonical" href="https://pro-handwerker.de/Region" />
            </Head>
            <header className="hero-img">
                <Navbar />
                <div className="container-fluid mt-5 pt-5">
                    <div className="container">
                        <h1 className="text-center display-3 fw-bold text-white">Region</h1>
                    </div>
                </div>
            </header>
            <div className="container py-5">
                <h1>Wich region you search fliesenleger</h1>
                <div className="row">
                    <div className="col-3 p-3"><p>Baden-Württemberg</p></div>
                    <div className="col-3 p-3"><p>Bayern</p></div>
                    <div className="col-3 p-3"><p>Berlin </p></div>
                    <div className="col-3 p-3"><p>Brandenburg </p></div>
                    <div className="col-3 p-3"><p>Hamburg</p></div>
                    <div className="col-3 p-3"><p>Hessen</p></div>
                    <div className="col-3 p-3"><p>Mecklenburg-Vorpommern</p></div>
                    <div className="col-3 p-3"><p>Niedersachsen</p></div>
                    <div className="col-3 p-3"><p><Link href={"/region/Nordrhein-Westfalen"}>Nordrhein-Westfalen</Link></p></div>
                    <div className="col-3 p-3"><p>Rheinland-Pfalz</p></div>
                    <div className="col-3 p-3"><p>Saarland</p></div>
                    <div className="col-3 p-3"><p>Sachsen</p></div>
                    <div className="col-3 p-3"><p>Sachsen-Anhalt</p></div>
                    <div className="col-3 p-3"><p>Schleswig-Holstein</p></div>
                    <div className="col-3 p-3"><p>Thüringen</p></div>
                </div>
            </div>
        </>
    )
}
export default Region