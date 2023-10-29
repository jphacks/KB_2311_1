import { ReserveRequest, reserveRequest } from "../requests/reserve.request";
import { CreateReservedRoomSchemaType } from "../type";

export type ReserveModel = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  stay_date: string;
  phone_number: string;
  address: string;
}

export const reserveFactory = (req?: ReserveRequest) => {

  const request = req ?? reserveRequest
  return {
    create: async ({ mansion_room_id, input }: { mansion_room_id: string, input: CreateReservedRoomSchemaType }) => {
      const response = await request.create({mansion_room_id, input})
      return response
    }
  }
}