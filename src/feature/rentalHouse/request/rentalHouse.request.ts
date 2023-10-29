import { axiosInstance } from "@/lib/axios";
import { Structure } from "../type/rentalHouse";
import { CreateRentalHouse } from "../components/admin-create/type";
import { Photo } from "@/type/photo";
import { RentalHouseModel } from "../models/rentalHouse.model";
import { RentalHousesWithCount } from "../components/list/type";
import { MansionRoomModel } from "@/feature/room/models/room.model";

export interface RentalHouseRequest {
  create: (input: CreateRentalHouse) => Promise<{id: string}>;
  getAllOwn: () => Promise<RentalHouseModel[]>;
  getAll: () => Promise<RentalHouseModel[]>;
  getSearch: (params: SearchParams) => Promise<RentalHousesWithCount>;
};

const create: RentalHouseRequest["create"] = async (
  input: CreateRentalHouse
): Promise<RentalHouseModel> => {
  const response = (
    await axiosInstance.post("rental-house/create", {
      ...input,
    })
  ).data;

  return response;
};

const getAllOwn: RentalHouseRequest["getAllOwn"] = async () => {
  const response = (await axiosInstance.get(`/rental-house/owner`)).data;
  const results: RentalHouseModel[] = response.map((response: any) => {
    return {
      id: response.id,
      name: response.name,
      address: response.address,
      nearest_station: response.nearest_station,
      max_floor_number: response.max_floor_number,
      building_age: response.building_age,
      rental_house_photos: response.rental_house_photos.map(
        (photo: Photo) => photo.image
      ),
      structure_type: Structure[response.structure_type],
    };
  });
  return results;
};

const getAll: RentalHouseRequest["getAll"] = async () => {
  const response = (await axiosInstance.get("/rental-house")).data;
  const results: RentalHouseModel[] = response.map((response: any) => {
    return {
      id: response.id,
      name: response.name,
      address: response.address,
      nearest_station: response.nearest_station,
      max_floor_number: response.max_floor_number,
      building_age: response.building_age,
      rental_house_photos: response.rental_house_photos.map(
        (photo: Photo) => photo.image
      ),
      structure_type: Structure[response.structure_type],
      mansion: response.mansion,
    };
  });
  return results;
};

export type SearchParams = {
  search?: string,
  offset?: string,
  limit: number,
}

const getSearch: RentalHouseRequest['getSearch'] = async(params: SearchParams) => {
  const response = (await axiosInstance.get(`/rental-house/search`,
    { params: params }
  )).data;
  
  const results: RentalHouseModel[] = response.rentalHouse.map((response: any) => {
    return {
      id: response.id,
      name: response.name,
      address: response.address,
      nearest_station: response.nearest_station,
      max_floor_number: response.max_floor_number,
      building_age: response.building_age,
      rental_house_photos: response.rental_house_photos.map(
        (photo: Photo) => photo.image
      ),
      structure_type: Structure[response.structure_type],
      mansion: {
        id: response.mansion?.id,
        rental_house_id: response.mansion.rental_house_id,
        mansion_rooms: response.mansion.mansion_room.map((mansion: any) => {
          return {
            id: mansion.id,
            layout: mansion.layout,
            thanks_money: mansion.thanks_money,
            security_deposit: mansion.security_deposit,
            floor_number: mansion.floor_number,
            stay_fee: mansion.stay_fee,
            rent: mansion.rent,
            maintenance_fee: mansion.maintenance_fee,
            contract_duration: mansion.contract_duration,
            mansion_room_photos: mansion.mansion_room_photos.map(
              (photo: Photo) => photo.image
            ),
            available_dates: mansion.available_dates,
            reserve_url: mansion.reserve_url
          }
        })
      },
    };
  });

  return {
    rentalHouses: results,
    totalCount: response.totalCount
  }
}

export const rentalHouseRequest: RentalHouseRequest = {
  create,
  getAllOwn,
  getAll,
  getSearch
};
