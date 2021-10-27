import { Photo } from "../types/Photo";
import { storage } from "../../services/firebase";
import { ref, listAll, getDownloadURL, uploadBytes } from "firebase/storage";
import { v4 as createId } from "uuid";

//Recupera as imagens do Storage
export const getAllImages = async () => {
  let list: Photo[] = [];

  //Referênciando uma pasta dentro Storage
  const imagesFolder = ref(storage, "images");

  //Pegando os arquivos de uma pasta
  const photos = await listAll(imagesFolder);

  for (let i in photos.items) {
    //Gerando um URL para uma imagem
    let photoURL = await getDownloadURL(photos.items[i]);

    list.push({
      name: photos.items[i].name,
      url: photoURL,
    });
  }

  return list;
};

//Envia uma imagem ao Storage
export const uploadImage = async (file: File) => {
  const allowedTypes = new Set(["image/jpeg", "image/jpg", "image/png"]);

  //Se for um tipo permitido
  if (allowedTypes.has(file.type)) {
    //Criando um hash aleatório
    const randomName = createId();

    //Local: Storage
    //Pasta/nome do arquivo
    const newFile = ref(storage, `images/${randomName}`);

    //Referência de onde será armazenado, Arquivo a ser enviado
    const upload = await uploadBytes(newFile, file);

    //Criando um URL da imagem adicionada
    const photoURL = await getDownloadURL(upload.ref);

    return {
      name: upload.ref.name,
      url: photoURL,
    } as Photo;
    
  } else {
    return new Error("File type not Allowed");
  }
};
