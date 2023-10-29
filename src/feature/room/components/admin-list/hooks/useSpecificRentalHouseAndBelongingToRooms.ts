import { useEffect, useState } from "react";
import { useLoading } from "@/hooks/useLoading";
import {
  MansionRoomModel,
  roomFactory,
} from "@/feature/room/models/room.model";
import { useNotice } from "@/hooks/useNotice";
import { FAIL_TO_GET_ROOMS_WITH_RENTALHOUSE } from "@/constants/messages";
import { RentalHouseModel } from "@/feature/rentalHouse/models/rentalHouse.model";

export const useSpecificRentalHouseAndBelongingToRooms = (houseId?: string) => {
  // custom-hook
  const { showLoading, hideLoading } = useLoading();
  const notice = useNotice();

  // state
  const [rooms, setRooms] = useState<MansionRoomModel[]>([]);
  const [rentalHouse, setRentalHouse] = useState<RentalHouseModel>();

  useEffect(() => {
    if (!houseId) return;
    (async () => {
      showLoading();
      try {
        const response = await roomFactory().getAllWithRentalHouse(houseId);
        setRooms(response.mansion_rooms);
        setRentalHouse(response.rental_house);

        hideLoading();
      } catch (error: unknown) {
        hideLoading();
        const isTypeSafeError = error instanceof Error;
        notice.error(
          `${FAIL_TO_GET_ROOMS_WITH_RENTALHOUSE}\n${
            isTypeSafeError && error.message
          }`
        );
      }
    })();
  }, [houseId]);

  return { rooms, rentalHouse };
};
