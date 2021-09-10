import React, { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import Routers from "./routers";
import { TitleComponent } from "./components/Title";
import { api } from "./components/Api";
import AboutMe from "./components/AboutMe";

interface NewBlogData {
  logo: string;
  alt: string;
  name: string;
  title: string;
}

function App() {
  const [blogData, setBlogData] = useState<NewBlogData[]>([]);
  const getSystemData = async () => {
    try {
      const { data } = await api.get("blog-data/");
      setBlogData(data);
    } catch (error) {}
  };

  useEffect(() => {
    getSystemData();
  }, []);

  return (
    <BrowserRouter>
      <TitleComponent title={blogData.length !== 0 ? blogData[0].title : ""} />
      <Header
        logo={blogData.length !== 0 ? blogData[0].logo : ""}
        alt={blogData.length !== 0 ? blogData[0].alt : ""}
        nameBlog={blogData.length !== 0 ? blogData[0].name : ""}
      />

      <AboutMe />
      <Routers />
    </BrowserRouter>
  );
}
export default App;
