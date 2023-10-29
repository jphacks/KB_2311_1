import {
  EIGHT_CHARACTERS_OR_MORE,
  INVALID_EMAIL_FORMAT_MESSAGE,
  REQUIRE_FIELD,
} from "@/constants/messages";
import * as z from "zod";

//SignUpのschema
export const signUpInputSchema = z.object({
  email: z.string().email(INVALID_EMAIL_FORMAT_MESSAGE),
  password: z.string().min(8, EIGHT_CHARACTERS_OR_MORE),
  first_name: z.string().min(1, REQUIRE_FIELD),
  last_name: z.string().min(1, REQUIRE_FIELD),
  phone_number: z.string().min(1, REQUIRE_FIELD),
  // phone_number: z.string().regex(/^\d{11}$/, '「-」無しで携帯番号をお願いします。')
});
export type SignUpInputType = z.infer<typeof signUpInputSchema>;

//SignInのschema
export const signInInputSchema = z.object({
  email: z.string().email(INVALID_EMAIL_FORMAT_MESSAGE),
  password: z.string().min(8, "8文字以上で入力してください"),
});
export type SignInInputType = z.infer<typeof signInInputSchema>;
