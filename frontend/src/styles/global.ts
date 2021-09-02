import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle `
    :root{
        --dark-900: #20232a;
        --dark-700: #373940;
        --white: #ffffff;
        --green-600: #61E21D
    }
    *{
        margin:0;
        padding: 0;
        box-sizing: border-box;
        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
        
    }
`
