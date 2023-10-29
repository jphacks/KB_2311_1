import { RentalHouseRequest, rentalHouseRequest } from "../request/rentalHouse.request";

export const rentalHouseFactory = (req?: RentalHouseRequest) => {
  const repository = req ?? rentalHouseRequest 

  return {
    edit: async ({input, rentalHouseId}: {input: any, rentalHouseId: string}) => {
      const response = await repository.edit({input, rentalHouseId});
      return response
    },

    delete: async (id: string) => {
      const response = await repository.deleteRentalHouse(id)
    }
  }
};