import { ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import GlobalStyle from "./global";
import AllRoutes from "./routing/AllRoutes";
import { MUITheme } from "./theme";

const App = () => (
    <BrowserRouter>
        <ThemeProvider theme={MUITheme}>
            <GlobalStyle />
            {/* <Header /> */}
            <AllRoutes />
        </ThemeProvider>
    </BrowserRouter>
);

export default App;
