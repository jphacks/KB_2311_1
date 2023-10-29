import { RoomRequest, roomRequest } from "../request/room.request";
import { CreateRoom, Layout } from "../type/room";

// model
//Roomタイプの共通カラム
export type BaseRoomModel = {
  id: string;
  layout: Layout;
  thanks_money: number; // 礼金
  security_deposit: number; // 敷金
  floor_number: number; // 階層
  stay_fee: number;
  rent: number; // 賃金
  maintenance_fee: number;
  contract_duration: string; // 契約期間
  mansion_room_photos: string[];
  available_dates?: string[];
  reserve_url?: string;
};

export type MansionRoomModel = BaseRoomModel;

// Factory
export const roomFactory = (req?: RoomRequest) => {
  const repository = req ?? roomRequest;

  return {
    getOneWithHouse: async ({
      id,
      rental_house_id,
    }: {
      id: string;
      rental_house_id: string;
    }) => {
      const response = await repository.getOneWithRentalHouse({
        id,
        rental_house_id,
      });
      return response;
    },

    getAllWithRentalHouse: async (house_id: string) => {
      const response = await repository.getAllWithRentalHouse(house_id);
      return response;
    },

    create: async ({
      input,
      mansion_id,
    }: {
      input: CreateRoom;
      mansion_id: string;
    }) => {
      const response = await repository.create({ input, mansion_id });
      return response;
    },

    getOne:async (mansion_room_id: string) => {
      const response = await repository.getOne(mansion_room_id);
      return response;
    }
  };
};
