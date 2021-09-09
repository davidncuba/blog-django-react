import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useParams } from "react-router";
import { Redirect } from "react-router-dom";
import { api } from "../../components/Api";
import { Container, Content } from "./styles";
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
  category: [id: number, name: string, slug: string];
}
export default function Posts() {
  const { slug }: slug = useParams();
  const [post, setPost] = useState<PostData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getSystemData = async () => {
    try {
      const { data } = await api.get("post/?slug=" + slug);
      setPost(data);
      setIsLoading(false);
    } catch (error) {}
  };
  useEffect(() => {
    getSystemData();
  }, [slug]);

  return (
    <Container>
      <Content>
        {!isLoading ? (
          post.length !== 0 ? (
            post.map((p) => (
              <div key={p.title}>
                <h1>{p.title}</h1>
                <ul>
                  <li>
                    {new Intl.DateTimeFormat("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "2-digit",
                    }).format(Date.parse(p.create_at))}
                  </li>
                  <li>time_to_read</li>
                  <li>{p.views}</li>
                </ul>
                <div
                  className="tooltip product-details"
                  dangerouslySetInnerHTML={{
                    __html: p.content,
                  }}
                ></div>
              </div>
            ))
          ) : (
            <Redirect to="/404" />
          )
        ) : (
          ""
        )}
      </Content>
    </Container>
  );
}
