import { Container } from "./styles";

type PhotoItemProps = {
  data: {
    name: string;
    url: string;
  };
};

export function PhotoItem({ data}: PhotoItemProps) {
  return (
    <Container>
      <img src={data.url} alt={data.name} />
      <h1>{data.name}</h1>
    </Container>
  );
}
