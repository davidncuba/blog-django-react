import styled from "styled-components";

export const PostDiv = styled.div`
  display: flex;
  align-items: center;
  ul {
    display: flex;
    justify-content: center;
    li {
      margin-top: 1rem;
      list-style-type: none;
      padding: 0.3rem 0 1rem 1rem;
      color: #999;
      span {
        padding-left: 0.3rem;
      }
    }
  }
`;
export const PostsSpan = styled.span`
  font-size: 2rem;
  display: flex;
  justify-content: center;
`;
export const Title = styled.span`
  margin-left: 1rem;
  font-size: 1.5rem;
  transition: filter 0.5s;
  :hover {
    color: var(--green-600);
  }
`;
export const ImgTop = styled.img`
  align-items: center;
  max-width: 100px;
  border-radius: 1rem;
`;
