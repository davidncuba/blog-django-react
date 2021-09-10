import { Container, Content, Logo, Nav } from "./styles";
import { useState, useEffect } from "react";
import { api } from "../Api";
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

interface NewBlogData {
  logo?: string;
  alt?: string;
  nameBlog?: string;
}

export function Header(dataBlog: NewBlogData) {
  const [menus, setMenus] = useState<NewMenu[]>([]);
  const getNav = async () => {
    try {
      const { data } = await api.get("category/");
      setMenus(data);
    } catch (error) {}
  };

  useEffect(() => {
    getNav();
  }, []);

  return (
    <Container>
      <Content>
        <Logo>
          <Link to="/">
            {dataBlog.logo !== undefined ? (
              <img src={dataBlog.logo} alt={dataBlog.alt} />
            ) : (
              ""
            )}
            {dataBlog.nameBlog !== undefined ? dataBlog.nameBlog : ""}
          </Link>
        </Logo>
        <Nav id="nav">
          {menus.map((menu) => (
            <span className="dropdown" key={menu.id}>
              <Link to={"/category/" + menu.slug} key={menu.id}>
                {menu.name}
              </Link>

              {menu.subcategory.length > 0 ? (
                <span className="dropdown-content" id="dropdown-content">
                  {menu.subcategory.map((subcategory) => (
                    <Link
                      to={"/category/" + subcategory.slug}
                      key={subcategory.id}
                    >
                      {subcategory.name}
                    </Link>
                  ))}
                </span>
              ) : (
                ""
              )}
            </span>
          ))}
        </Nav>
      </Content>
    </Container>
  );
}
