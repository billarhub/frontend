import Maintenance from "../src/components/screens/Maintenance";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  if (process.env.NEXT_PUBLIC_MAINTENANCE_MODE === "1") {
    return <Maintenance />;
  } else {
    return <Component {...pageProps} />;
  }
}
export default MyApp;
