import { PlainButton } from "@/components/Button";
import { ErrorText } from "@/components/ErrorText";
import { FileField } from "@/components/FileField";
import { PlainInput } from "@/components/Input";
import { PlainSelectInput } from "@/components/SelectInput";
import {
  AVAILABLE_DATES,
  CONTRACT_DURATION,
  FLOOR_NUMBER,
  LAYOUT,
  MAINTENANCE_FEE,
  MANSION_ROOM_PHOTOS,
  RENT,
  SECURITY_DEPOSIT,
  STAY_FEE,
  THANKS_MONEY,
} from "@/constants/const";
import { RoomSchema, RoomSchemaType } from "@/feature/room/type/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import DatePicker, { Value } from "react-multi-date-picker";
import { useCreateMansionRoom } from "../../hooks/useCreateMansionRoom";
import { useRouter } from "next/router";
import { Routing } from "@/Routing/routing";
import { layoutArray } from "@/feature/room/type/room";

type Props = {
  houseId?: string;
};

export const CreateRoomForm = ({ houseId }: Props) => {
  const router = useRouter();
  // react-hook-form
  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
    watch,
  } = useForm<RoomSchemaType>({
    resolver: zodResolver(RoomSchema),
  });

  // custom-hook
  const { handleCreate } = useCreateMansionRoom();

  const onSubmit = async (data: RoomSchemaType) => {
    const isCreate = await handleCreate({ input: data, mansion_id: houseId });
    if (isCreate?.id)
      router.push(
        Routing.adminRoomsBelongToHouse.buildRoute({ houseId: isCreate.id })
          .path
      );
  };

  return (
    <form
      action=""
      className="w-full sm:w-4/5 space-y-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <PlainInput
        label="宿泊費(キャンセル料)"
        register={register}
        registerValue={STAY_FEE}
        inputType="number"
        placeholder="料金をご記入ください"
        error={errors.stay_fee?.message as string}
      />
      <PlainInput
        label="家賃"
        register={register}
        registerValue={RENT}
        inputType="number"
        placeholder="家賃をご記入ください"
        error={errors.rent?.message as string}
      />
      <div className="flex ">
        <PlainInput
          label="礼金"
          register={register}
          registerValue={THANKS_MONEY}
          inputType="number"
          placeholder="礼金をご入力ください"
          error={errors.thanks_money?.message as string}
        />
        <PlainInput
          label="敷金"
          register={register}
          registerValue={SECURITY_DEPOSIT}
          inputType="number"
          placeholder="敷金をご記入ください"
          error={errors.security_deposit?.message as string}
        />
      </div>
      <div className="flex ">
        <PlainInput
          label="契約期間"
          register={register}
          registerValue={CONTRACT_DURATION}
          inputType="text"
          placeholder="契約期間をご入力ください"
          error={errors.contract_duration?.message as string}
        />
        <PlainInput
          label="階層"
          register={register}
          registerValue={FLOOR_NUMBER}
          inputType="number"
          placeholder="階数をご記入ください"
          error={errors.floor_number?.message as string}
        />
      </div>

      {/* リファクタ */}
      <PlainSelectInput
        labelText="間取り"
        registerValue={LAYOUT}
        register={register}
        error={errors.layout?.message as string}
        defaultValue=""
      >
        <option disabled value="">
          -- 選択してください --
        </option>
        {layoutArray.map((layout) => (
          <option key={layout} value={layout}>
            {layout}
          </option>
        ))}
      </PlainSelectInput>

      <PlainInput
        label="共益費"
        register={register}
        registerValue={MAINTENANCE_FEE}
        inputType="number"
        placeholder="共益費をご入力ください"
        error={errors.maintenance_fee?.message as string}
      />

      <FileField
        labelText="部屋写真の選択"
        error={errors.mansion_room_photos?.message as string}
        registerValue={MANSION_ROOM_PHOTOS}
        register={register}
        watch={watch}
      />

      <div className="flex flex-col space-y-1">
        <label htmlFor="available_dates">予約可能日</label>
        <Controller
          name={AVAILABLE_DATES}
          control={control}
          render={({ field: { onChange, value } }) => (
            <DatePicker
              multiple
              value={value as Value}
              onChange={onChange}
              style={{
                width: "100%",
                boxSizing: "border-box",
                height: "40px",
              }}
              containerStyle={{
                width: "100%",
              }}
            />
          )}
        />
        {errors.available_dates?.message && (
          <ErrorText errorText={errors.available_dates?.message as string} />
        )}
      </div>
      <div className="flex justify-center">
        <PlainButton innerText="登録する" type="submit" />
      </div>
    </form>
  );
};
