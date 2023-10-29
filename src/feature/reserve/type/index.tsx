import { REQUIRE_FIELD, TEN_OR_ELEVEN_CHARACTERS_PHONE_NUMBER } from '@/constants/messages';
import * as z from 'zod';

export type CreateReservedRoomSchemaType = z.infer<typeof CreateReservedRoomSchema>

export const CreateReservedRoomSchema = z.object({
  stay_date: z.string().min(1, REQUIRE_FIELD),
  last_name: z.string().min(1, REQUIRE_FIELD),
  first_name: z.string().min(1, REQUIRE_FIELD),
  phone_number: z.string().refine(
    (phoneNumber) => {
      const length = phoneNumber.replace(/[-()\s]/g, "").length;
      return length === 10 || length === 11;
    },
    {
      message: TEN_OR_ELEVEN_CHARACTERS_PHONE_NUMBER,
    }
  ),
  email: z.string().min(1, REQUIRE_FIELD),
  address: z.string().min(1, REQUIRE_FIELD),
});