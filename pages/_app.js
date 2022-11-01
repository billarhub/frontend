import Maintenance from "../src/components/screens/Maintenance";
import MainLayout from "../src/layout/MainLayout/MainLayout";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../styles/index.scss";

function MyApp({ Component, pageProps }) {
  if (process.env.NEXT_PUBLIC_MAINTENANCE_MODE === "1") {
    return <Maintenance />;
  } else {
    return <MainLayout><Component {...pageProps} /></MainLayout>;
  }
}
export default MyApp;
