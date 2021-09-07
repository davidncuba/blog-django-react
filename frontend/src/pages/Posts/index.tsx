import { useParams } from 'react-router';
import {Container, Content} from "./styles"
interface slug{
    slug: string
}
export default function Posts() {
    const { slug }:slug  = useParams();

    return(
        <Container>
        <Content>
        <h1>oi</h1>
        <h1>oi</h1>
        <h1>oi</h1>
        <h1>oi</h1>
        <h1>oi</h1>
        <h1>oi</h1>
        <h1>{slug}</h1>
        </Content>
        </Container>
    )
}