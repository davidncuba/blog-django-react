import { useEffect, useState } from "react";
import { Container, Content } from "../../styles/global";
import { api } from "../Api";
import {
  AiOutlineTwitter,
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import { ContentAboutMe, ImgPerfil } from "./styles";

interface NewAboutMe {
  id: number;
  name: string;
  img_perfil: string;
  about: string;
  brief: string;
  facebook_url: string;
  twitter_url: string;
  instagram_url: string;
  youtube_url: string;
  github_url: string;
  linkedin_url: string;
}

export default function AboutMe() {
  const [isReadMore, setIsReadMore] = useState(true);
  const [aboutMeData, setAboutMeData] = useState<NewAboutMe[]>([]);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  useEffect(() => {
    const getAboutMeData = async () => {
      try {
        const { data } = await api.get("about-me/");
        setAboutMeData(data);
      } catch (error) {}
    };
    getAboutMeData();
  }, []);

  return (
    <Container>
      <Content className="about">
        {aboutMeData.map((ab) => (
          <ContentAboutMe key={ab.id}>
            <div>
              <ImgPerfil src={ab.img_perfil} alt="img" />
            </div>
            <div className="info">
              <h2>{ab.name}</h2>
              {isReadMore ? ab.about.slice(0, 150) : ab.about}
              <span onClick={toggleReadMore} className="read-or-hide">
                {isReadMore ? "...read more" : " show less"}
              </span>

              <span className="social-media">
                <a href={ab.facebook_url}>
                  <AiFillFacebook />
                </a>
                <a href={ab.twitter_url}>
                  <AiOutlineTwitter />
                </a>
                <a href={ab.instagram_url}>
                  <AiFillInstagram />
                </a>
                <a href={ab.youtube_url}>
                  <AiFillYoutube />
                </a>
                <a href={ab.github_url}>
                  <AiFillGithub />
                </a>
                <a href={ab.linkedin_url}>
                  <AiFillLinkedin />
                </a>
              </span>
            </div>
          </ContentAboutMe>
        ))}
      </Content>
    </Container>
  );
}
