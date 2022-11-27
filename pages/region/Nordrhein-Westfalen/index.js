import Head from "next/head";
import Navbar from "../../../components/header/navbar";
import Link from "next/link";


const NordrheinWestfalen = () => {
    return (
        <>
            <Head>
                <title>Nordrhein-Westfalen - Pro Handwerker</title>
                <meta name="robots" content="index,follow" />
                <link rel="canonical" href="https://pro-handwerker.de/Nordrhein-Westfalen" />
            </Head>
            <header className="hero-img">
                <Navbar />
                <div className="container-fluid mt-5 pt-5">
                    <div className="container">
                        <h1 className="text-center display-3 fw-bold text-white">Nordrhein-Westfalen</h1>
                    </div>
                </div>
            </header>
            <div className="container py-5">
                <h1>Wich Nordrhein-Westfalen you search fliesenleger</h1>
                <div className="row">
                    <div className="col-3 p-3"><Link href={"/region/Nordrhein-Westfalen/Aachen"}>Aachen</Link></div>
                    <div className="col-3 p-3">Ahaus</div>
                    <div className="col-3 p-3">Ahlen</div>
                    <div className="col-3 p-3">Aldenhoven</div>
                    <div className="col-3 p-3">Alfter</div>
                    <div className="col-3 p-3">Alpen</div>
                </div>
            </div>
        </>
    )
}
export default NordrheinWestfalen