import { Container, Content } from "../../styles/global";
import Loading from "../../components/Loading";
import { useEffect, useState } from "react";
import { api } from "../../components/Api";
import { Redirect, useParams } from "react-router";
import { Link } from "react-router-dom";
import { ImgTop, PostDiv, PostsSpan, Title } from "./styles";
import { BsCalendar, BsClockHistory, BsEye } from "react-icons/bs";
interface Category {
  category: string;
}

interface PostData {
  id: number;
  title: string;
  content: string;
  create_at: string;
  slug: string;
  views: string;
  category: [id: number, name: string, slug: string];
  read_time: string;
  picture: string;
}

export default function PostList() {
  const { category }: Category = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [postList, setPostList] = useState<PostData[]>([]);

  useEffect(() => {
    const getSystemData = async () => {
      try {
        const { data } = await api.get("post/?category__slug=" + category);
        setPostList(data);
        setIsLoading(false);
      } catch (error) {}
    };
    getSystemData();
  }, [category]);

  return (
    <Container>
      <Content>
        <PostsSpan>Posts</PostsSpan>
        {isLoading ? (
          <Loading />
        ) : postList.length !== 0 ? (
          postList.map((p) => (
            <PostDiv key={p.title}>
              {p.picture && <ImgTop src={p.picture} alt={p.title} />}
              <Link to={"/post/" + p.slug}>
                <Title>{p.title}</Title>
              </Link>
              <ul>
                <li>
                  <BsCalendar />
                  <span>
                    {new Intl.DateTimeFormat("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "2-digit",
                    }).format(Date.parse(p.create_at))}
                  </span>
                </li>

                <li>
                  <BsClockHistory />
                  <span>{p.read_time}</span>
                </li>
                <li>
                  <BsEye />
                  <span>{p.views + 1}</span>
                </li>
              </ul>
            </PostDiv>
          ))
        ) : (
          <Redirect to="/404" />
        )}
      </Content>
    </Container>
  );
}
