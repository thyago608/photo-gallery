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
    cursor: pointer;
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

  @media (max-width: 620px) {
    grid-template-columns: 1fr;
  }
`;

export const UploadForm = styled.form`
  background: #3d3f43;
  padding: 1rem;
  border-radius: 0.65rem;
  margin-bottom: 2rem;

  > button {
    background: #756df4;
    border: 0;
    color: #fff;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border-radius: 0.65rem;
    margin: 0 1.4rem;
    cursor: pointer;
    transition: filter 0.2s ease;

    &:hover {
      filter: brightness(0.8);
    }

    @media (max-width: 425px) {
      margin: 1rem 0;
    }
  }

  > span {
    display: inline-block;
    margin: 0 0.5rem;
  }
`;
