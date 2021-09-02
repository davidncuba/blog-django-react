import { Container, Content, DivSearch, Logo, Nav } from "./styles";
import { BsSearch } from "react-icons/bs";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
interface NewMenu {
  id: number;
  name: string;
  slug: string;
}

export function Header() {
  const api = axios.create({
    baseURL: "http://127.0.0.1:8000/",
  });
  const [menu, setMenu] = useState<NewMenu[]>([]);

  const getNav = async () => {
    try {
      const { data } = await api.get("category/");
      setMenu(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getNav();
  }, []);

  return (
      <Container>
        <Content>
          <Logo>Logo</Logo>
          <Nav>
            {menu.map((m) => (
              <a key={m.id} href={m.slug}>
                <span className="span-menu" >{m.name}</span>
              </a>
            ))}
            <Link to="/about">LINK</Link>
          </Nav>
          <DivSearch>
            <input type="text" placeholder="Search"></input>
            <BsSearch className="bs-search" />
          </DivSearch>
        </Content>
      </Container>

  );
}
