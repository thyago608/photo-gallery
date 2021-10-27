import { useState, useEffect } from "react";
import Lottie from "lottie-react-web";
import { Photo } from "../../assets/types/Photo";
import { getAllImages } from "../../assets/functions/storage";
import loadingAnimation from "../../assets/animation/loading.json";
import notFoundAnimation from "../../assets/animation/not-found.json";
import {
  Container,
  Content,
  Header,
  ContainerAnimation,
  PhotoList,
} from "./styles";

export function Home() {
  const [loading, setLoading] = useState(true);
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    const getAllPhotos = async () => {
      setPhotos(await getAllImages());

      setTimeout(() => {
        setLoading(false);
      }, 2000);
    };
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

        {!loading && photos.length > 0 && (
          <PhotoList>
            {photos.map((photo) => (
              <li>{photo.name}</li>
            ))}
          </PhotoList>
        )}

        {!loading && photos.length === 0 && (
          <ContainerAnimation>
            <Lottie
              width={140}
              height={140}
              options={{
                animationData: notFoundAnimation,
                loop: true,
                autoplay: true,
              }}
            />

            <span>Não existem imagens cadastradas no sistema</span>
          </ContainerAnimation>
        )}

        {/* Área de Upload */}
        {/* Lista de Fotos */}
      </Content>
    </Container>
  );
}
