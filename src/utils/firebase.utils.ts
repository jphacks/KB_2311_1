import { storage } from "@/lib/firebase";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  StorageReference,
  UploadResult,
} from "@firebase/storage";

// firebase-storageの保存先のpath(今後増えていったらここに追加)
type DestinationPath = "rentalHousePhotos" | "roomPhotos";

//fileで送られた値をfirebase-storageに保存してurl(string型)で値を返す。
export const uploadFirebaseStorageAndReturnDownloadURLs = async ({
  files,
  destinationPath,
}: {
  files: any;
  destinationPath: DestinationPath;
}): Promise<string[]> => {
  try {
    //fileで送られた値をfirebase-storageに保存してurlに変更
    const downloadURLs = await Promise.all(
      //react-hook-formで取得される値がFile型で直接map処理ができないのでArray.fromをする。
      Array.from(files).map(async (file) => {
        const imageRef: StorageReference = ref(
          storage,
          `${destinationPath}/${file as Blob}`
        );
        // FIX: 型定義が曖昧なのを修正
        const snapshot: UploadResult = await uploadBytes(
          imageRef,
          file as any as Blob
        );

        return getDownloadURL(snapshot.ref);
      })
    );

    return downloadURLs;
  } catch (error: unknown) {
    throw error;
  }
};
