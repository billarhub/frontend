import Maintenance from "../src/components/screens/Maintenance";
import MainLayout from "../src/layout/MainLayout/MainLayout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/index.scss";
import { QueryClient, QueryClientProvider } from "react-query";

import { AuthContextProvider } from "../src/context/authContext";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  if (process.env.NEXT_PUBLIC_MAINTENANCE_MODE === "1") {
    return <Maintenance />;
  } else {
    return (
      <QueryClientProvider client={queryClient}>
        <AuthContextProvider>
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </AuthContextProvider>
      </QueryClientProvider>
    );
  }
}
export default MyApp;
