import Link from "next/link";
import Image from "next/image";

function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-transparent">
          <div className="container d-flex">
            <Link
              href={"/"}
              className="navbar-brand me-auto order-0"
            >
              <Image src="/img/logo.webp" alt="logo" height={75} width={99} />
            </Link>
  
            <div className="collapse navbar-collapse py-3  order-2 order-lg-1"
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
              </ul>
            </div>
            <button
              className="navbar-toggler order-3"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <Link className="text-white fs-5 order-1 order-lg-2 me-3 me-lg-0" href="tel:01748997115">Benötigen sie eine Beratung? &nbsp; 0174 899-7115</Link>
          </div>
        </nav>
    </>
  )
}

export default Navbar