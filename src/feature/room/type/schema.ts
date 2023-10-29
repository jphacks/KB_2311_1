import {
  INVALID_LAYOUT,
  REQUIRE_FIELD,
} from "@/constants/messages";
import { DateObject } from "react-multi-date-picker";
import * as z from "zod";
import { Layout, layoutArray } from "./room";

export type RoomSchemaType = z.infer<typeof RoomSchema>;

// schema
export const RoomSchema = z.object({
  stay_fee: z.coerce.number().min(1, REQUIRE_FIELD),
  rent: z.coerce.number().min(1, REQUIRE_FIELD),
  thanks_money: z.coerce.number().min(1, REQUIRE_FIELD),
  security_deposit: z.coerce.number().min(1, REQUIRE_FIELD),
  contract_duration: z.string().min(1, REQUIRE_FIELD),
  floor_number: z.coerce.number().min(1, REQUIRE_FIELD),
  layout: z.string().refine((data) => layoutArray.includes(data as Layout), {
    message: INVALID_LAYOUT,
  }),
  maintenance_fee: z.coerce.number().min(1, REQUIRE_FIELD),
  mansion_room_photos: z
    .custom<FileList>()
    .refine((fileList) => fileList.length >= 1, {
      message: REQUIRE_FIELD,
    }),
  available_dates: z.array(z.custom<DateObject>()).min(1, REQUIRE_FIELD),
});