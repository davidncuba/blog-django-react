import styled from "styled-components";

export const Container = styled.header`
  background: var(--dark-900);
  color: var(--white);
  position: fixed;
  width: 100%;
  font-size: 18px;
  font-weight: 300;
  top: 0;
  z-index: 1;
  a {
    text-decoration: none;
    display: block;
    text-align: left;
    color: var(--white);
  }
`;

export const Content = styled.div`
  max-width: 1220px;
  margin: 0 auto;
  display: flex;
  height: 60px;
  align-items: center;
`;
export const Logo = styled.h1`
  width: calc(100% / 5);

  img {
    max-width: 40px;
    padding: 5px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex: 1;
  height: 100%;
  a {
    color: var(--white);
    display: flex;
    align-items: center;
    padding: 0 20px 0 20px;
    text-decoration: none;
    transition: color 0.3s;
    &:hover {
      color: var(--green-600);
    }
  }
  .dropdown {
    overflow: hidden;
    margin: auto;
  }

  .dropdown span {
    font-size: 16px;
    border: none;
    outline: none;
    color: white;
    padding: 14px 16px;
    background: var(--dark-900);
    font-family: inherit;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background: var(--dark-900);
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  .dropdown-content a {
    float: none;
    padding: 12px 16px;
    height: 100%;
  }

  .dropdown-content a:hover {
    background: var(--dark-700);
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }
`;
