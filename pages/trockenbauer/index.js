import Link from "next/link"
import Head from "next/head"
import Navbar from "../../components/header/navbar"
import { CityList } from "../../components/data/cityList"

let alpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V","W", "X", "Y", "Z"]


const Region = () => {
    return (
        <>
            <Head>
                <title>Trockenbauer -
                    Stadt wählen ❤️ Pro Handwerker</title>
                <meta name="robots" content="noindex, follow" />
                <meta name="description" content={`Herzlich willkommen bei Pro Handwerker – Ihrem Ansprechpartner für fachmännische Handverkehrsdienstleistungen. Wir bieten Ihnen mit unserer Erfahrung eine hohe Fachkompetenz. Tätig sind wir bundesweit. Für Ihr geplantes Vorhaben sind Sie bei uns genau Richtig.`} />
                <link rel="canonical" href={`https://pro-handwerker.de/trockenbauer`} />
            </Head>
            <header className="hero-img">
                <Navbar />
                <div className="container-fluid mt-5 pt-5">
                    <div className="container">
                        <h1 className="text-center display-3 fw-bold text-white">Trockenbauer -
                            Stadt wählen</h1>
                        <h2 className="text-center fs-6 text-white mb-3">Trockenbauer Experte -
                            Stadt wählen | Kostenlose fachmännische Beratung | Faire Preis</h2>
                        <h1 className="text-center fw-bold fs-1 text-white pt-4"><a href="tel:01748997115">0174 899-7115</a></h1>
                    </div>
                </div>
            </header>
            <div className="container">
                <h1 className="fs-2 py-4 mt-3 fw-bold">Finden Sie Ihren Trockenbauer Service in Ihrer Stadt</h1>
                <div id="alphaLink" className="d-flex bg-secondary text-white px-2 mb-4 align-items-center flex-wrap">
                    {
                        alpha.map(letter => {
                            return (
                                <>
                                    <Link className="alpha-pagination" href={`/trockenbauer#starWith_${letter}`}>{letter}</Link>

                                </>
                            )
                        })
                    }
                    <Link className="alpha-pagination" href={`/trockenbauer#starWith_idn`}>IDN</Link>
                </div>
                {
                    alpha.map((letter) => {
                        return (
                            <>
                                <div id={`starWith_${letter}`}>
                                    <div className="border-top border-bottom bg-light d-flex justify-content-between align-items-center">
                                        <div className=" fw-bold px-3 fs-4">{letter}</div>
                                        <div className="px-3"><Link className="text-decoration-underline hov-cl-yellow" href={`/trockenbauer#alphaLink`}>Back to list</Link></div>
                                    </div>
                                    <div className="row py-3">
                                        {
                                            CityList.filter(item => item.city.startsWith(letter)).map((item) => {
                                                return (
                                                    <>
                                                        <div className="city-box col-6 col-sm-4 col-md-3"><Link className="m-3 w-100 border-bottom" href={`/trockenbauer/${item.cityLink}`}>{item.city}</Link></div>
                                                    </>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
                <div id={`starWith_idn`}>
                <div className="border-top border-bottom bg-light d-flex justify-content-between align-items-center">
                                        <div className=" fw-bold px-3 fs-4">IDN</div>
                                        <div className="px-3"><Link className="text-decoration-underline hov-cl-yellow" href={`/trockenbauer#alphaLink`}>Back to list</Link></div>
                                    </div>
                <div className="row py-3">
                    {
                        CityList.filter(item => item.city.charAt(0).match(/[^a-z]/i)).map((item) => {
                            return (
                                <>
                                    <div className="col-3 mb-3 hov-cl-yellow d-flex justify-content-center align-items-center"><Link className="m-3 w-100 border-bottom" href={`/trockenbauer/${item.cityLink}`}>{item.city}</Link></div>
                                </>
                            )
                        })
                    }
                </div>
                </div>
                

            </div>

        </>
    )
}
export default Region