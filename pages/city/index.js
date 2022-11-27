import Head from "next/head";
import Navbar from "../../components/header/navbar";
import Link from "next/link";


const City = () => {
    return (
        <>
            <Head>
                <title>City - Pro Handwerker</title>
                <meta name="robots" content="index,follow" />
                <link rel="canonical" href="https://pro-handwerker.de/city" />
            </Head>
            <header className="hero-img">
                <Navbar />
                <div className="container-fluid mt-5 pt-5">
                    <div className="container">
                        <h1 className="text-center display-3 fw-bold text-white">City</h1>
                    </div>
                </div>
            </header>
            <div className="container py-5">
                <div className="row">
                    <div className="col-3 p-3"><p>City 1</p></div>
                    <div className="col-3 p-3"><p>Nuremberg</p></div>
                    <div className="col-3 p-3"><p>Dusseldorf</p></div>
                    <div className="col-3 p-3"><p>Stuttgart</p></div>
                    <div className="col-3 p-3"><p><Link href={"/city/bd"}>City 1</Link></p></div>
                </div>
            </div>
        </>
    )
}
export default City