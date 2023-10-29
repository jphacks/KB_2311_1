import { axiosInstance } from "@/lib/axios"

export interface RentalHouseRequest {
  edit: ({input, rentalHouseId}: { input: any, rentalHouseId: string}) => Promise<any>;
  deleteRentalHouse: (id: string) => Promise<void>;
}

const edit: RentalHouseRequest['edit'] = async ({input, rentalHouseId}: { input: any, rentalHouseId: string}) => {
  const response = await axiosInstance.put(`/rental-house/${rentalHouseId}`, input);
  return response.data
}

const deleteRentalHouse: RentalHouseRequest['deleteRentalHouse'] = async (id: string) => {
  await axiosInstance.delete(`/rental-house/${id}`);
}

export const rentalHouseRequest: RentalHouseRequest = {
  edit,
  deleteRentalHouse
}