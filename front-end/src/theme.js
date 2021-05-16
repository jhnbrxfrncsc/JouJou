import { createMuiTheme } from '@material-ui/core';

export default createMuiTheme({
    palette:{
        primary: {
            // main: "#A15C38",
            main: "#C3A6A0",
        },
        secondary: {
            // main: "#C3A6A0",
            main: "#262220",
        },
        // type: "dark"
    },
    typography: [
        "Girassol",
        "Josefin Sans",
        "Lato",
        "Newsreader"
    ].join(',')
});