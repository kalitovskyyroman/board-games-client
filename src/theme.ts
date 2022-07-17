import { createTheme } from "@mui/material/styles";
import { DefaultTheme } from "styled-components";

export const defaultTheme: DefaultTheme = {
    mixins: {},
};

export const MUITheme = createTheme({
    palette: {
        primary: {
            main: "#000000de",
        },
    },
});
