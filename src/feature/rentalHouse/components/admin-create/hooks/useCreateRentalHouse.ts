import { uploadFirebaseStorageAndReturnDownloadURLs } from "@/utils/firebase.utils";
import { useLoading } from "@/hooks/useLoading";
import { toast } from "react-toastify";
import { RentalSchemaType } from "../../../type";
import { rentalHouseFactory } from "@/feature/rentalHouse/models/rentalHouse.model";
import {
  FAIL_TO_CREATE_RENTAL_HOUSE,
  SUCCESS_TO_RENTALHOUSE,
} from "@/constants/messages";
import { useNotice } from "@/hooks/useNotice";

export const useCreateRentalHouse = () => {
  const { showLoading, hideLoading } = useLoading();
  const notice = useNotice();

  const handleCreate = async (data: RentalSchemaType) => {
    try {
      showLoading();
      //MUST: BEにFILEの責務を移動する
      const urls = await uploadFirebaseStorageAndReturnDownloadURLs({
        files: data.rental_house_photos,
        destinationPath: "rentalHousePhotos",
      });
      const response = await rentalHouseFactory().create({
        name: data.name,
        address: data.address,
        nearest_station: data.nearest_station,
        max_floor_number: data.max_floor_number,
        building_age: data.building_age,
        structure_type: data.structure_type,
        rental_house_photos: urls,
      });

      hideLoading();
      notice.success(SUCCESS_TO_RENTALHOUSE);
      return response;
    } catch (error: unknown) {
      const isTypeSafeError = error instanceof Error;
      hideLoading();
      notice.error(
        `${FAIL_TO_CREATE_RENTAL_HOUSE}\n${isTypeSafeError && error.message}`
      );
    }
  };

  return {
    handleCreate,
  };
};
