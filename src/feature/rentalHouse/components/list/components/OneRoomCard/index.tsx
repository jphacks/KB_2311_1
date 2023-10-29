import Image from "next/image";
import { ErrorText } from "@/components/ErrorText";
import Link from "next/link";
import { Loading } from "@/components/Loading";
import { STAY_FEE_LABEL } from "@/constants/const";
import { Routing } from "@/Routing/routing";
import { MansionRoomModel } from "@/feature/room/models/room.model";

type Props = {
  room: MansionRoomModel;
  rental_house_id: string;
};

// TODO: Roomの構成変えたら変えたらリファクタ
export const OneRoomCard = ({
  room: { id, stay_fee, layout, mansion_room_photos },
  rental_house_id,
}: Props): JSX.Element => {
  return (
    <Link
      href={
        Routing.roomWithRentalHouse.buildRoute({ rental_house_id, id }).path
      }
      className="flex w-full space-x-4 rounded-lg shadow-md"
    >
      <div className=" w-[80px] h-[80px] relative">
        <Image
          className="rounded-lg"
          src={mansion_room_photos[0]}
          objectFit="cover"
          layout="fill"
          alt="各部屋の写真"
        />
      </div>
      <div className="flex flex-col justify-center text-sm">
        <div className="flex flex-col">
          <p>
            {STAY_FEE_LABEL}: ¥{stay_fee}
          </p>
          <ErrorText errorText="*契約しなかった場合のみ" />
        </div>
        <p>間取り: {layout}</p>
      </div>
    </Link>
  );
};
