import { REQUIRE_FIELD } from "@/constants/messages";
import * as z from "zod";

// schema
export type RentalSchemaType = z.infer<typeof RentalHouseSchema>;

export const RentalHouseSchema = z.object({
  name: z.string().min(1, REQUIRE_FIELD),
  address: z.string().min(1, REQUIRE_FIELD),
  nearest_station: z.string().min(1, REQUIRE_FIELD),
  max_floor_number: z.coerce
    .number()
    .min(1, REQUIRE_FIELD)
    .max(100, REQUIRE_FIELD),
  building_age: z.coerce.number().min(1, REQUIRE_FIELD),
  structure_type: z.coerce.number().min(1).max(3, REQUIRE_FIELD),
  rental_house_photos: z
    .custom<FileList>()
    .refine((fileList) => fileList.length >= 1, {
      message: REQUIRE_FIELD,
    }),
});
