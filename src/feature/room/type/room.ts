import { MansionRoomModel } from "../models/room.model";
import { RentalHouseModel } from "@/feature/rentalHouse/models/rentalHouse.model";

export type Layout =
  | "1R"
  | "1K"
  | "1DK"
  | "1LDK"
  | "2K"
  | "2DK"
  | "2LDK"
  | "3DK"
  | "3LDK"
  | "4DK"
  | "4LDK"
  | "その他";

export const layoutArray: Layout[] = [
  "1R",
  "1K",
  "1DK",
  "1LDK",
  "2K",
  "2DK",
  "2LDK",
  "3DK",
  "3LDK",
  "4DK",
  "4LDK",
  "その他",
];

//マンションの中間テーブル
export type Mansion = {
  id?: string; //mansion_roomをcreateする時はこの値が必要
  rental_house_id?: string;
  mansion_rooms?: MansionRoomModel[];
};

//mansion_roomを作成する時の型
export type CreateRoom = Omit<MansionRoomModel, "id">;

export type MansionRoomsWithRentalHouse = {
  mansion_rooms: MansionRoomModel[];
  rental_house: RentalHouseModel;
};
export type MansionRoomWithRentalHouse = {
  mansion_room: MansionRoomModel;
  rental_house: RentalHouseModel;
};
