import { axiosInstance } from "@/lib/axios";
import {
  CreateRoom,
  MansionRoomWithRentalHouse,
  MansionRoomsWithRentalHouse,
} from "../type/room";
import { MansionRoomModel } from "../models/room.model";
import { Photo } from "@/type/photo";
import { RentalHouseModel } from "@/feature/rentalHouse/models/rentalHouse.model";
import { Structure } from "@/feature/rentalHouse/type/rentalHouse";

export type RoomRequest = {
  getOneWithRentalHouse: ({
    id,
    rental_house_id,
  }: {
    id: string;
    rental_house_id: string;
  }) => Promise<MansionRoomWithRentalHouse>;
  create: ({
    input,
    mansion_id,
  }: {
    input: CreateRoom;
    mansion_id: string;
  }) => Promise<Pick<MansionRoomModel, "id">>;
  getAllWithRentalHouse: (
    houseId: string
  ) => Promise<MansionRoomsWithRentalHouse>;
  getOne: (mansion_room_id: string) => Promise<MansionRoomModel['available_dates']>
};

const getOneWithRentalHouse: RoomRequest["getOneWithRentalHouse"] = async ({
  id,
  rental_house_id,
}: {
  id: string;
  rental_house_id: string;
}) => {
  const { mansion_room, rental_house } = (
    await axiosInstance.get(
      `/mansion-room/rental-house/${rental_house_id}/room/${id}`
    )
  ).data;
  const resRoom: MansionRoomModel = {
    id: mansion_room.id,
    layout: mansion_room.layout,
    thanks_money: mansion_room.thanks_money,
    security_deposit: mansion_room.security_deposit,
    floor_number: mansion_room.floor_number,
    stay_fee: mansion_room.stay_fee,
    rent: mansion_room.rent,
    maintenance_fee: mansion_room.maintenance_fee,
    contract_duration: mansion_room.contract_duration,
    mansion_room_photos: mansion_room.mansion_room_photos.map(
      (photo: Photo) => photo.image
    ),
    // TODO: この箇所は後々変更する
    available_dates: mansion_room.available_dates,
    reserve_url: mansion_room.reserve_url,
  };

  const resRentalHouse: RentalHouseModel = {
    id: rental_house.id,
    name: rental_house.name,
    address: rental_house.address,
    nearest_station: rental_house.nearest_station,
    max_floor_number: rental_house.max_floor_number,
    building_age: rental_house.building_age,
    rental_house_photos: rental_house.rental_house_photos.map(
      (photo: Photo) => photo.image
    ),
    structure_type: Structure[rental_house.structure_type],
  };

  return {
    mansion_room: resRoom,
    rental_house: resRentalHouse,
  };
};

const getAllWithRentalHouse: RoomRequest["getAllWithRentalHouse"] = async (
  house_id: string
) => {
  const response = (
    await axiosInstance.get(
      `/rental-house/owner/${house_id}/rental-house-to-rooms`
    )
  ).data;

  const resRentalHouse: RentalHouseModel = {
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

  const resRooms: MansionRoomModel[] = response.mansion.mansion_rooms.map(
    (room: any) => {
      return {
        id: room.id,
        layout: room.layout,
        thanks_money: room.thanks_money,
        security_deposit: room.security_deposit,
        floor_number: room.floor_number,
        stay_fee: room.stay_fee,
        rent: room.rent,
        maintenance_fee: room.maintenance_fee,
        contract_duration: room.contract_duration,
        mansion_room_photos: room.mansion_room_photos.map(
          (photo: Photo) => photo.image
        ),
        available_dates: room.available_dates,
      };
    }
  );

  return {
    mansion_rooms: resRooms,
    rental_house: resRentalHouse,
  };
};

const getOne: RoomRequest['getOne'] = async(mansion_room_id) => {
  const response = await axiosInstance.get(`/mansion-room/${mansion_room_id}`);
  return response.data.available_dates
}

const create: RoomRequest["create"] = async ({
  input,
  mansion_id,
}: {
  input: CreateRoom;
  mansion_id: string;
}) => {
  const response = await axiosInstance.post(
    `/mansion-room/create/${mansion_id}`,
    input
  );
  return response.data.id;
};

export const roomRequest: RoomRequest = {
  getOneWithRentalHouse,
  create,
  getAllWithRentalHouse,
  getOne
};
