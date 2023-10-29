import { FAIL_TO_CREATE_RESERVATION, SUCCESS_TO_RENTALHOUSE } from "@/constants/messages";
import { useLoading } from "@/hooks/useLoading"
import { useNotice } from "@/hooks/useNotice";
import { reserveFactory } from "../../../models/reserve.model";
import { CreateReservedRoomSchemaType } from "../../../type";

export const useReserveStayDate = () => {
  const { showLoading, hideLoading } = useLoading();
  const notice = useNotice();
  
  const handleCreate = async({ mansion_room_id, input }: { mansion_room_id: string, input: CreateReservedRoomSchemaType }) => {
    try {
      showLoading();
      await reserveFactory().create({ mansion_room_id, input});
      hideLoading();
      notice.success(SUCCESS_TO_RENTALHOUSE)
      return true
    } catch (error: unknown) {
      hideLoading();
      const isTypeError = error instanceof Error
      notice.error(
        `${FAIL_TO_CREATE_RESERVATION}\n${isTypeError && error.message}`
      )
      return false
    }
  }

  return {
    handleCreate
  }
}