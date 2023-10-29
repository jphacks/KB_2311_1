import { roomFactory } from "@/feature/room/models/room.model";
import { Layout } from "@/feature/room/type/room";
import { RoomSchemaType } from "@/feature/room/type/schema";
import { useLoading } from "@/hooks/useLoading";
import { uploadFirebaseStorageAndReturnDownloadURLs } from "@/utils/firebase.utils";
import { DateObject } from "react-multi-date-picker";
import { useNotice } from "@/hooks/useNotice";
import {
  FAIL_TO_GET_RENTALHOUSE,
  SUCCESS_TO_RENTALHOUSE,
} from "@/constants/messages";

export const useCreateMansionRoom = () => {
  // custom-hook
  const { showLoading, hideLoading } = useLoading();
  const notice = useNotice();

  // リファクタ: 処理が2つ必要になっている。型変換はこのロジックに含めるべきでない気がするので
  // 型変換を行う層を検討する。
  const handleCreate = async ({
    input,
    mansion_id,
  }: {
    input: RoomSchemaType;
    mansion_id?: string;
  }) => {
    if (!mansion_id) return;
    showLoading();
    const { mansion_room_photos, available_dates, layout, ...rest } = input;

    const type_change_available_dates = Array.from(
      available_dates as DateObject[]
    ).map((dateObject) => {
      const {
        year,
        month: { number },
        day,
      } = dateObject;
      const date = new Date(year, number - 1, day + 1);
      date.setHours(0, 0, 0, 0);
      return date.toISOString().split("T")[0];
    });
    const type_change_layout = layout as Layout;

    const urls = await uploadFirebaseStorageAndReturnDownloadURLs({
      files: mansion_room_photos,
      destinationPath: "roomPhotos",
    });

    try {
      const id = await roomFactory().create({
        input: {
          ...rest,
          layout: type_change_layout,
          mansion_room_photos: urls,
          available_dates: type_change_available_dates,
        },
        mansion_id,
      });
      hideLoading();
      notice.success(SUCCESS_TO_RENTALHOUSE);

      return id;
    } catch (error: unknown) {
      hideLoading();
      const isTypeSafeError = error instanceof Error;
      notice.error(
        `${FAIL_TO_GET_RENTALHOUSE}\n${isTypeSafeError ? error.message : ""}`
      );
    }
  };

  return {
    handleCreate,
  };
};
