import { OneRoomCard } from "@/feature/rentalHouse/components/list/components/OneRoomCard";
import { MansionRoomModel } from "@/feature/room/models/room.model";
import Image from "next/image";
import { useMemo } from "react";

type Props = {
  id: string;
  houseName: string;
  img: string;
  address: string;
  rooms?: MansionRoomModel[];
};

export const RentalHouseCard = ({
  id,
  houseName,
  img,
  address,
  rooms,
}: Props): JSX.Element => {
  //1番安い家賃を取得する。
  const minRent = useMemo(
    () => rooms && Math.min(...rooms.map((room) => room.rent)),
    [rooms]
  );

  return (
    <section className="flex flex-col self-start w-full sm:w-[400px] sm:p-4 xl:p-8 items-center space-y-4 rounded-lg">
      <figure className="relative w-full sm:w-[400px] h-80">
        <Image
          className="rounded-lg"
          src={img}
          alt="家の写真"
          layout="fill"
          objectFit="cover"
        />
      </figure>

      <div className="flex flex-col w-full sm:w-[400px] items-start text-left text-sm">
        <p className="text-base font-semibold">{houseName}</p>
        <p className="text-gray-500 mb-1">{address}</p>
        <p>¥{minRent}~</p>
      </div>

      {/* 募集ルームを一覧表示 */}
      <div className="flex flex-col w-full sm:w-[400px] items-center space-y-2">
        {rooms?.map((room) => (
          <OneRoomCard key={room.id} room={room} rental_house_id={id} />
        ))}
      </div>
    </section>
  );
};
