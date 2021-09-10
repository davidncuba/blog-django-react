import { useEffect, useState } from "react";
import { Redirect, useParams } from "react-router";
import { api } from "../../components/Api";
import Loading from "../../components/Loading";
import { BsCalendar, BsClockHistory, BsEye } from "react-icons/bs";
import { Container, ImgPost, PostDiv, Title } from "./syles";
import { Link } from "react-router-dom";

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
export default function Home() {
  const { slug }: slug = useParams();
  const [post, setPost] = useState<PostData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getSystemData = async () => {
      try {
        const { data } = await api.get("post/");
        setPost(data);
        console.log(data);
        setIsLoading(false);
      } catch (error) {}
    };
    getSystemData();
  }, [slug]);
  return (
    <Container>
      {isLoading ? (
        <>
          <Loading />
        </>
      ) : post.length !== 0 ? (
        post.map((p) => (
          <PostDiv>
            <div key={p.title}>
              <Link to={"post/" + p.slug}>
                {p.picture && <ImgPost src={p.picture} alt={p.title} />}
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
                  <span>{p.views}</span>
                </li>
              </ul>
              <div
                className="tooltip product-details"
                dangerouslySetInnerHTML={{
                  __html: p.content.slice(0, 150),
                }}
              ></div>
            </div>
          </PostDiv>
        ))
      ) : (
        <Redirect to="/404" />
      )}
    </Container>
  );
}
