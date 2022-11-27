import Link from "next/link";

function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-transparent">
          <div className="container d-flex">
            <Link
              href={"/"}
              className="navbar-brand me-auto"
            >
              <img className="ps-3" src="/img/logo.png" alt="logo" height={75} />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse py-3"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0 text-white">
                <li className="nav-item">
                  <Link
                    className="nav-link text-white fs-5 mx-3 active"
                    aria-current="page"
                    href={"/"}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white fs-5 mx-3" href={"/ueber-uns"}>
                    Über uns
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle text-white fs-5 mx-3"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dienstleitungen
                  </Link>
                  <ul className="dropdown-menu bg-white">
                    <li>
                      <Link className="dropdown-item fs-5"  href={"/fliesenleger"}>
                        Fliesenleger
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item fs-5" href={"/trockenbauer"}>
                      Trockenbauer
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item fs-5" href={"/fenstereinbau-und-tuereneinbau"}>
                        Fenstereinbau und Türeneinbau
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item fs-5" href={"/garten-und-landschaftsbauer"}>
                        Garten und Landschaftsbau
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white fs-5 mx-3" href={"/kontakt"}>
                    Kontakt
                  </Link>
                </li>
              </ul>
            </div>
            <Link className="text-white fs-5" href="tel:01748999213">0174 899-9213</Link>
          </div>
        </nav>
    </>
  )
}

export default Navbar