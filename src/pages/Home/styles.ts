import styled from "styled-components";

export const Container = styled.div`
  color: #fff;
  min-height: 100vh;
`;

export const Header = styled.header`
  text-align: center;
  margin-bottom: 2rem;

  > h1 {
    font-size: 2.2rem;
  }
`;

export const Content = styled.main`
  margin: 0 auto;
  max-width: 980px;
  padding: 2rem 0;
`;

export const ContainerAnimation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
`;

export const PhotoList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.65rem;
`;
