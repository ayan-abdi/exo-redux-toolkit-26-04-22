import { Container, CssBaseline } from "@mui/material";
import { Box } from "@mui/system";
import { useRoutes } from "react-router-dom";
import Footer from "./containers/footer/footer";
import Header from "./containers/header/header";
import { appRoute } from "./containers/routes";

function App() {
  const routes = useRoutes(appRoute);
  return (
    <>
      <CssBaseline />
      <Box>
        <Header />
        <main>
          <Container>{routes}</Container>
        </main>

        <Footer />
      </Box>
    </>
  );
}

export default App;
