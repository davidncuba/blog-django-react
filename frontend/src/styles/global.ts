import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --dark-900: #20232a;
        --dark-700: #373940;
        --dark-050: #f9f9f9;
        --white: #ffffff;
        --green-600: #61E21D
    }
    *{
        margin:0;
        padding: 0;
        box-sizing: border-box;
        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
        
    }
    body{
      background: var(--dark-050);
    }
`;
export const Container = styled.div``;

export const Content = styled.div`
  max-width: 1220px;
  margin: 0rem auto 2rem;
  background: var(--white);
  padding: 1rem 3rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
  a {
    text-decoration: none;
    display: block;
    text-align: left;
    color: var(--dark-700);
  }

  &.about {
    margin: 5rem auto 2rem;
  }
`;
