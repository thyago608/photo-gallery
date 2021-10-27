import { useState, useEffect, FormEvent } from "react";
import Lottie from "lottie-react-web";
import { PhotoItem } from "../../components/PhotoItem";
import { Photo } from "../../assets/types/Photo";
import { getAllImages, uploadImage } from "../../assets/functions/storage";
import loadingAnimation from "../../assets/animation/loading.json";
import notFoundAnimation from "../../assets/animation/not-found.json";
import {
  Container,
  Content,
  Header,
  ContainerAnimation,
  PhotoList,
  UploadForm,
} from "./styles";

export function Home() {
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    const getAllPhotos = async () => {
      setPhotos(await getAllImages());

      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };
    getAllPhotos();
  }, []);

  async function handlePhotoUpload(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const file = formData.get("image") as File;

    if (file && file.size > 0) {
      setUploading(true);

      try {
        const uploadResponse = await uploadImage(file);

        if (uploadResponse instanceof Error) {
          throw new Error();
        } else {
          setPhotos((oldState) => [...oldState, uploadResponse]);
        }
      } catch (e) {
        console.log(e);
      }

      setUploading(false);
    }
  }
  return (
    <Container>
      <Content>
        <Header>
          <h1>Galeria de Fotos</h1>
        </Header>

        <UploadForm onSubmit={handlePhotoUpload} method="POST">
          <input type="file" name="image" />
          {uploading && <span>Enviando...</span>}
          <button type="submit">Enviar</button>
        </UploadForm>

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
              <PhotoItem data={photo} />
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
