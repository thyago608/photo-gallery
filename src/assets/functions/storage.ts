import { Photo } from '../types/Photo';
import { storage } from '../../services/firebase';
import { ref, listAll, getDownloadURL} from 'firebase/storage';

export const getAllImages = async () => {
    //Referênciando uma pasta dentro Storage
    const imagesFolder = ref(storage, "images");

    //Pegando os arquivos de uma pasta
    const photos = await listAll(imagesFolder);

    const photoList = photos.items.map(async (photo) => {
      const photoURL = await getDownloadURL(photo);

      return {
          name:photo.name,
          url: photoURL
      };
    });

    return photoList;

}