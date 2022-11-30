
function Contact() {
  return (
    <>
    <section className="mt-5 bg-warning">
        <div className="container py-5">
          <h3 className="fw-bold display-5 mb-3 text-center">
            Wir beraten sie kostenlos
          </h3>
          <p className="fs-5 text-center">
            Rufen Sie jetzt an, um eine fachmännische Beratung zu erhalten
          </p>
          <div className="d-flex align-items-center justify-content-center">
            <svg
              className="me-2"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="m20.487 17.14-4.065-3.696a1.001 1.001 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 0 0 .648-.291l1.86-2.171a.997.997 0 0 0-.085-1.39z"></path>
            </svg>
            <span className="fs-4 fw-bold"><a href="tel:01748997115">0174 899-7115</a></span>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact