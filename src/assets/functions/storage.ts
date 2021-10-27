import { Photo } from "../types/Photo";
import { storage } from "../../services/firebase";
import { ref, listAll, getDownloadURL } from "firebase/storage";

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

//for in
