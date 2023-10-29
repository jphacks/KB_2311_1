import { RentalHouseMock } from "@/fixture/rentalHouse.mock";
import { RentalHouseModel } from "../models/rentalHouse.model";
import { RentalHouseRequest } from "./rentalHouse.request";
import { CreateRentalHouse } from "../components/admin-create/type";

const getAll = async(): Promise<RentalHouseModel[]> => {
  const response = new RentalHouseMock().create(10);
  return response
}

const getAllOwn = async(): Promise<RentalHouseModel[]> => {
  const response = new RentalHouseMock().create(10);
  return response
}

const create =async (input: CreateRentalHouse): Promise<RentalHouseModel> => {
  const response = new RentalHouseMock().create(1);
  return response[0]
}



export const mockRentalHouseRequest: RentalHouseRequest = {
  getAll,
  getAllOwn,
  create
}