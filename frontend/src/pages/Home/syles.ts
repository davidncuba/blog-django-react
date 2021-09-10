import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 5px;
  max-width: 1220px;
  margin: 0 auto 0;
  flex-grow: 4;
  height: 20rem;
`;

export const PostDiv = styled.div`
  background: var(--white);
  width: 17.5rem;
  text-align: center;
  border-radius: 1rem;
  margin-bottom: 1rem;
  

  
  @media (max-width: 830px) {
    text-align: left;
    width: 100%;
   
  }
  }
  div {
    padding: 1rem;
    @media (max-width: 830px) {
    display: flex;
    align-items: center;
   
  }
    ul {
        
      
      li {
        font-size: 0.7rem;
        display: inline-block;
        list-style-type: none;
        padding: 0.3rem;

        span {
          margin-left: 0.5rem;
          
        }
        
        }
      }
      
      
    }
    a{
            text-decoration: none;
            color: var(--dark-900);
            transition: color 0.5s;
            :hover{
                color: var(--green-600);
            }
        }
`;

export const ImgPost = styled.img`
  align-items: center;
  max-width: 100px;
  border-radius: 1rem;
  transition: filter 0.5s;
  :hover {
    filter: opacity(70%);
  }
`;
export const Title = styled.span`
  display: block;
  font-size: 1.2rem;
  margin-left: 1rem;
`;
