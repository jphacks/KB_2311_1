import { rentalHouseFactory } from "@/feature/room/models/rentalHouse.model"
import { useNotice } from "@/hooks/useNotice";


export const useDeleteRentalHouse = () => {
  
  const notice = useNotice();
  const handleDelete = async(id: string) => {
    try {
      await rentalHouseFactory().delete(id);
      notice.success("rentalHouseの削除に成功しました。");
    } catch (error: unknown) {
      const isError = error instanceof Error;
      notice.error(`rentalHouseの削除に失敗しました。\n${isError && error.message}`)
      return false
    }
    return true
  }

  return {
    handleDelete
  }
}