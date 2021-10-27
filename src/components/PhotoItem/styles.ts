import styled from "styled-components";

export const Container = styled.section`
  background: #3d3f43;
  border-radius: 10px;
  padding: 0.65rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s ease;
  cursor: pointer;

  > img {
    margin-bottom: 0.5rem;
    border-radius: 10px;
  }

  > h1 {
    font-weight: 100;
    font-size: 1.25rem;
  }

  @media (max-width: 620px) {
    & {
      padding: 1.5rem;
      margin: 0 2rem;
    }
  }

  &:hover {
    transform: scale(1.05);
  }
`;
