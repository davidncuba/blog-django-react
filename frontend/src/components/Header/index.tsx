import { Container, Content, DivSearch, Logo, Nav } from "./styles";
import { BsSearch } from 'react-icons/bs'
import { useState, useEffect } from 'react';

interface NewMenu{
  id: number;
}

export function Header() {
  const axios = require('axios');
  const navbar = getNav()
  const [menu, setMenu] = useState([])

  
  async function getNav() {
    try {
      const {data} = await axios.get('http://localhost:8000/category/');
      console.log(data)
      setMenu(data)
    } catch (error) {
      console.error(error);
    }
  }
  
  
  return (  
    <>
      <Container>
        <Content>
          <Logo>Logo</Logo>
          <Nav>
          <a><span className="span-menu">Menu1</span></a>
          <a><span className="span-menu">Menu1</span></a>
          <a><span className="span-menu">Menu1</span></a>
          <a><span className="span-menu">Menu1</span></a>
        {/* {menu} */}
          </Nav>
          <DivSearch>
              <input type="text" placeholder="Search"></input>
              <BsSearch className="bs-search"/>
          </DivSearch>
        </Content>
      </Container>
      
      
    
    </>
  );
}
