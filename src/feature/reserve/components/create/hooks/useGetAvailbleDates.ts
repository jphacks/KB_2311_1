import { useEffect, useState } from "react";
import { useLoading } from "@/hooks/useLoading";
import { MansionRoomModel, roomFactory } from "@/feature/room/models/room.model";

export const useGetAvailableDates = (room_id: string | undefined) => {
  const { showLoading, hideLoading } = useLoading();
  const [availableDates, setAvailableDates] = useState<MansionRoomModel['available_dates']>([]);

  useEffect(() => {
    if (!room_id) return;
    (async () => {
      showLoading();
      const response = await roomFactory().getOne(room_id);
      setAvailableDates(response);
      hideLoading();
    })();
  }, [room_id]);

  return { availableDates };
};