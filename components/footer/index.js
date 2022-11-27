import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="bg-light">
        <div className="container pb-1 pt-5">
          <div className="row">
            <div className="col-4 d-flex justify-content-center">
              <Link href={"/"}><img src="img/logo.png" alt="" height={75} /></Link>
            </div>
            <div className="col-4">
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
            <div className="col-4">
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