import styled from "styled-components";

export const Post = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  }
  ul {
    display: flex;
    justify-content: center;
    li {
      list-style-type: none;
      padding: 1rem 0 1rem 1rem;
      color: #999;
      span {
        padding-left: 0.3rem;
      }
    }
  }
  p{
    padding: 0.2rem;
  }
`;

export const ImgTop = styled.img`
  width: 50rem;
  max-width: 90%;
  border-radius: 1rem;
  margin-bottom: 1rem;
`;
