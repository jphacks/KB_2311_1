import { FAIL_TO_EDIT_RENTAL_HOUSE } from "@/constants/messages";
import { rentalHouseFactory } from "@/feature/room/models/rentalHouse.model"
import { useLoading } from "@/hooks/useLoading";
import { useNotice } from "@/hooks/useNotice"
import { useState } from "react";

export const useEditRentalHouse = () => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const notice = useNotice();
  const { showLoading, hideLoading } = useLoading();

  const handleEdit = async({ input, rentalHouseId}: { input: any, rentalHouseId: string}) => {
    try {
      showLoading();
      const response = await rentalHouseFactory().edit({input, rentalHouseId})
      setIsEditModalOpen(false)
      hideLoading();
    } catch (error: unknown) {
      hideLoading()
      const isError = error instanceof Error
      notice.error(`${FAIL_TO_EDIT_RENTAL_HOUSE}\n${isError && error.message}`)
      return false
    } 
    
    return true
  }

  const closeEditRentalHouseModal = () => setIsEditModalOpen(false);
  const openEditRentalHouseModal = () => setIsEditModalOpen(true);

  return {
    handleEdit,
    isEditModalOpen,
    closeEditRentalHouseModal,
    openEditRentalHouseModal
  }
}