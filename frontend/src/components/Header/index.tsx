import { Container, Content, DivSearch, Logo, Nav } from "./styles";
import { BsSearch } from "react-icons/bs";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

interface NewMenu {
  id: number;
  name: string;
  slug: string;
  parent: number;
  subcategory: [
    {
      id: number;
      name: string;
      slug: string;
      parent: number;
    }
  ];
}

export function Header() {
  const api = axios.create({
    baseURL: "http://127.0.0.1:8000/",
  });
  const [menus, setMenus] = useState<NewMenu[]>([]);

  const getNav = async () => {
    try {
      const { data } = await api.get("category/");
      console.log(data);
      setMenus(data);
    } catch (error) {}
  };

  useEffect(() => {
    getNav();
  }, [0]);

  return (
    <Container>
      <Content>
        <Logo>Logo</Logo>
        <Nav id="nav">
          {menus.map((menu) => (
            <span className="dropdown" key={menu.id}>
              <Link to={menu.slug} key={menu.id}>
                {menu.name}
              </Link>
             
              {menu.subcategory.length > 0?
              <span className="dropdown-content" id="dropdown-content">
                {menu.subcategory.map((subcategory) => (
                  <Link to={subcategory.slug} key={subcategory.id}>
                    {subcategory.name}
                  </Link>
                ))}
              </span>
              :""}
            </span>
          ))}
        </Nav>
        <DivSearch>
          <input type="text" placeholder="Search"></input>
          <BsSearch className="bs-search" />
        </DivSearch>
      </Content>
    </Container>
  );
}
