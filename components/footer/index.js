import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer className="bg-light">
        <div className="container pb-1 pt-5">
          <div className="row d-flex justify-content-center">
            <div className="col-12 col-md-4 mb-4 mb-md-0 d-flex justify-content-center">
              <Link href={"/"}><Image src="/img/logo.webp" alt="logo" height={75} width={99} /></Link>
            </div>
            <div className="col-6 col-md-4">
              <p className="fs-5">Dienstleistungen</p>
              <Link className="d-block mb-2" href={"/trockenbauer"}>
                Trockenbauer
              </Link>
              <Link className="d-block mb-2" href={"/fliesenleger"}>
                Fliesenleger
              </Link>
              <Link className="d-block mb-2" href={"/fenstereinbau-und-tuereneinbau"}>
                Türeneinbau und Fenstereinbau
              </Link>
              <Link className="d-block mb-2" href={"/garten-und-landschaftsbauer"}>
                Garten und Landschaftsbauer
              </Link>
            </div>
            <div className="col-6 col-md-4">
              <p className="fs-5">Quick Links</p>
              <Link className="d-block mb-2" href={"/kontakt"}>
                Kontakt
              </Link>
              <Link className="d-block mb-2" href={"/impressum"}>
                Impressum
              </Link>
              <Link className="d-block mb-2" href={"/datenschutzerklaerung"}>
                Datenschutzerklärung
              </Link>
              <Link className="d-block mb-2" href={"/ueber-uns"}>
                Über Uns
              </Link>
            </div>
          </div>
          <hr className="text-muted" />
          <p className="py-2">Copyright Pro Handwerker &#169; 2022</p>
        </div>
      </footer>
    </>
  )
}
export default Footer;