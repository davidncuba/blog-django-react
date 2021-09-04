import { useParams } from 'react-router';

interface slug{
    slug: string
}
export default function About() {
    const { slug }:slug  = useParams();

    return(
        <div>
        <h1>oi</h1>
        <h1>oi</h1>
        <h1>oi</h1>
        <h1>oi</h1>
        <h1>oi</h1>
        <h1>oi</h1>
        <h1>oi</h1>
        <h1>{slug}</h1>
   
        </div>
    )
}