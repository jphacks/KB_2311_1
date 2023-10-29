import { RentalHouseModel } from "@/feature/rentalHouse/models/rentalHouse.model"

export type RentalHousesWithCount = {
  rentalHouses: RentalHouseModel[]
  totalCount: number 
}