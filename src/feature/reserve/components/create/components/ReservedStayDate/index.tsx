import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useRouter } from "next/router";
import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { PlainButton } from "@/components/Button";
import { PlainInput } from "@/components/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateReservedRoomSchema, CreateReservedRoomSchemaType } from "../../../../type";
import { MansionRoomModel } from "@/feature/room/models/room.model";
import { PlainTitle } from "@/components/Title/PlainTitle";

type Props = {
  mansion_room_id: string
  availableDates: MansionRoomModel['available_dates']
  handleCreate: ({ mansion_room_id, input }: { mansion_room_id: string, input: CreateReservedRoomSchemaType }) => Promise<boolean>
}

export const ReservedStayDate = ({ availableDates, handleCreate, mansion_room_id }: Props ): JSX.Element => {
  const router = useRouter();
  // react-hook-form
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
    watch
  } = useForm<CreateReservedRoomSchemaType>({
    resolver: zodResolver(CreateReservedRoomSchema),
  });
  // 宿泊日の監視
  const watchValues = watch('stay_date');

  //available_dateからeventを作成
  const events = useMemo(() => {
    return availableDates?.map((dateString: any) => {
      return {
        title: "予約可能日",
        start: dateString,
      };
    });
  }, [availableDates]);

  const onSubmit = async (data: CreateReservedRoomSchemaType) => {
    const isCreated = await handleCreate({input: data, mansion_room_id });
    // todo: 画面を飛ばすことを検討
    if (isCreated) router.reload();
  };

  return (
    <div className="flex flex-col items-center justify-center m-4">
      <PlainTitle
        titleText="宿泊日予約"
      />
      <form onSubmit={handleSubmit(onSubmit)} className="my-8 space-y-4">
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          headerToolbar={{
            start: "title",
            end: "prev,next",
          }}
          locale="ja"
          selectable={true}
          selectMirror={true}
          selectOverlap={false}
          eventDurationEditable={true}
          events={events}
          eventClick={(clickInfo) => {
            const eventDate = clickInfo.event.start;
            const year = eventDate?.getFullYear();
            const month = (eventDate?.getMonth()! + 1).toString().padStart(2, '0');
            const day = eventDate?.getDate().toString().padStart(2, '0');
            const stay_date = `${year}-${month}-${day}`;
            if (!stay_date) return;
            setValue("stay_date", stay_date);
          }}
        />
        <PlainInput
          label="宿泊日"
          disabled={true}
          inputType="text"
          defaultValue={watchValues ?? '選択されていません'}
        />
        <div className="flex ">
          <PlainInput
            label="苗字"
            register={register}
            registerValue="last_name"
            inputType="text"
            placeholder="苗字を入力"
            error={errors.last_name?.message as string}
          />
          <PlainInput
            label="名前"
            register={register}
            registerValue="first_name"
            inputType="text"
            placeholder="名前を入力"
            error={errors.first_name?.message as string}
          />
        </div>
        <PlainInput
          label="電話番号"
          register={register}
          registerValue="phone_number"
          inputType="tel"
          placeholder="「-」無しの数字"
          error={errors.phone_number?.message as string}
        />
        <PlainInput
          label="住所"
          register={register}
          registerValue="address"
          inputType="text"
          placeholder="兵庫県西宮市西宮ハウス211号室"
          error={errors.address?.message as string}
        />
        <PlainInput
          label="メールアドレス"
          register={register}
          registerValue="email"
          inputType="email"
          placeholder="メールアドレス"
          error={errors.email?.message as string}
        />

        <PlainButton innerText="作成" type="submit" />
      </form>
    </div>
  );
};
