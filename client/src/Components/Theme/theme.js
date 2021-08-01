import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
    palette:{
      primary: {
        light:'#ffffff',
        main:'#f6f7f8',
        dark:'#d7d8d9'
        
      },
      secondary: {
        main:'#FF5700',
        dark:'#0078d3'
      }
    },
    spacing:8,
    typography:{
        fontFamily: [
            'Lato',
            'sans-serif'
        ].join(','),
        h1: {
            fontSize:'24px',
            fontFamily:'Work Sans',
            fontWeight:500
        },
        h3: {
            color:'#9c9c9c',
            fontSize:'16px',
            fontWeight:'bold'
        },
        body1: {
            fontWeight:400,

        },
        subtitle1: {
            fontWeight:700,
            fontSize:'18px'
        },
        subtitle2: {
            fontSize:'12px',
            fontWeight:700
        }
    }

})