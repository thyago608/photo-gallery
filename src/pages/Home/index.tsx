import { useState, useEffect } from "react";
import Lottie from "lottie-react-web";
import { Photo } from "../../assets/types/Photo";
import { getAllImages } from "../../assets/functions/storage";
import loadingAnimation from "../../assets/animation/loading.json";
import { Container, Content, Header, ContainerAnimation } from "./styles";

export function Home() {
  const [loading, setLoading] = useState(true);
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    const getAllPhotos = async () => {
       setLoading(true);
       setPhotos(await getAllImages());
       setLoading(false);
    }

    getAllPhotos();

  }, []);

  return (
    <Container>
      <Content>
        <Header>
          <h1>Galeria de Fotos</h1>
        </Header>

        {loading && (
          <ContainerAnimation>
            <Lottie
              width={140}
              height={140}
              options={{
                animationData: loadingAnimation,
                loop: true,
                autoplay: true,
              }}
            />
          </ContainerAnimation>
        )}

        
        {/* Área de Upload */}
        {/* Lista de Fotos */}
      </Content>
    </Container>
  );
}
