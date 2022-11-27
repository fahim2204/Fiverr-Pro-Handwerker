import '../styles/globals.css'
import "bootstrap/dist/css/bootstrap.css";
import Footer from '../components/footer';
import {useEffect} from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return(
    <>
    <Component {...pageProps} />
    <Footer/>
    </>
  ) 
}

export default MyApp
