import Image from "next/image";
import { MansionRoomModel } from "@/feature/room/models/room.model";
import {
  CONTRACT_DURATION_LABEL,
  FLOOR_NUMBER_LABEL,
  LAYOUT_LABEL,
  RENT_LABEL,
  SECURITY_DEPOSIT_LABEL,
  THANKS_MONEY_LABEL,
} from "@/constants/const";

type Props = {
  room: MansionRoomModel;
};
export const RoomInfo = ({
  room: {
    floor_number,
    layout,
    thanks_money,
    security_deposit,
    rent,
    contract_duration,
    mansion_room_photos,
  },
}: Props) => (
  <div className="flex flex-col mx-6 w-4/5 md:w-2/3">
    <h4 className="font-semibold text-lg">部屋情報</h4>
    <div className="flex-col space-y-2 bg-gray-100 rounded-lg px-4 py-5 my-4">
      <div>
        <p className="text-xs">{RENT_LABEL}</p>
        <p className="font-semibold">&nbsp;¥{rent}</p>
      </div>
      <div className="flex justify-between">
        <div className="w-1/2">
          <p className="text-xs">{SECURITY_DEPOSIT_LABEL}</p>
          <p>&nbsp;¥{security_deposit}</p>
        </div>
        <div className="w-1/2">
          <p className="text-xs">{THANKS_MONEY_LABEL}</p>
          <p>&nbsp;¥{thanks_money}</p>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="w-1/2">
          <p className="text-xs">{LAYOUT_LABEL}</p>
          <p>&nbsp;{layout}</p>
        </div>
        <div className="w-1/2">
          <p className="text-xs">{FLOOR_NUMBER_LABEL}</p>
          <p>&nbsp;{floor_number}階</p>
        </div>
      </div>
      <div>
        <p className="text-xs">{CONTRACT_DURATION_LABEL}</p>
        <p>&nbsp;{contract_duration}</p>
      </div>
    </div>

    <div className="w-full h-60 relative">
      <Image
        className="rounded-xl"
        src={mansion_room_photos[0]}
        objectFit="cover"
        layout="fill"
        alt="賃貸の写真"
      />
    </div>

    <div></div>
  </div>
);
