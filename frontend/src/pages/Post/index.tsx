import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Redirect } from "react-router-dom";
import { api } from "../../components/Api";
import Loading from "../../components/Loading";
import { Container, Content } from "../../styles/global";
import { ImgTop, Post } from "./styles";
import { BsCalendar, BsClockHistory, BsEye } from "react-icons/bs";
interface slug {
  slug: string;
}

interface PostData {
  id: number;
  title: string;
  content: string;
  create_at: string;
  slug: string;
  views: string;
  read_time: string;
  category: [id: number, name: string, slug: string];
  picture: string;
}
export default function Posts() {
  const { slug }: slug = useParams();
  const [post, setPost] = useState<PostData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getSystemData = async () => {
      try {
        const { data } = await api.get("post/?slug=" + slug);
        setPost(data);
        console.log(data);
        setIsLoading(false);
        if (data.length !== 0) {
          await api.patch("post/" + data[0].id, { views: data[0].views + 1 });
        }
      } catch (error) {}
    };
    getSystemData();
  }, [slug]);

  return (
    <Container>
      <Content>
        {isLoading ? (
          <>
            <Loading />
          </>
        ) : post.length !== 0 ? (
          post.map((p) => (
            <Post key={p.title}>
              <h1>{p.title}</h1>
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
              {p.picture && <ImgTop src={p.picture} alt={p.title} />}
              <div
                className="tooltip product-details"
                dangerouslySetInnerHTML={{
                  __html: p.content,
                }}
              ></div>
            </Post>
          ))
        ) : (
          <Redirect to="/404" />
        )}
      </Content>
    </Container>
  );
}
