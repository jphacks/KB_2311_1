import Image from "next/image";
import { MansionRoomModel } from "@/feature/room/models/room.model";

type Props = {
  mansionRooms: MansionRoomModel[];
};

export const AdminRoomListBelongToRentalHose = ({ mansionRooms }: Props) => (
  <div className="w-full px-4 grid gap-x-4 gap-y-8  sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 ">
    {!mansionRooms ? (
      <p className="text-center font-bold text-red-400">
        まだ作成していません。
      </p>
    ) : (
      mansionRooms.map(({ id, mansion_room_photos, stay_fee }) => {
        return (
          // Linkにしてroom詳細に飛べるようにする
          <section
            key={id}
            className="flex items-center space-x-4 bg-gray-100 rounded-xl"
          >
            <div className="w-[200px] h-[200px] md:w-[160px] md:h-[160px] lg:w-[220px] lg:h-[220px] xl:w-[200px] xl:h-[200px] relative">
              <Image
                className="rounded-l-xl"
                src={mansion_room_photos[0]}
                alt="家の写真です。"
                objectFit="cover"
                layout="fill"
              />
            </div>
            <div className="flex flex-col justify-center items-center w-auto text-sm">
              <p>宿泊費:&nbsp;¥{stay_fee}</p>
            </div>
          </section>
        );
      })
    )}
  </div>
);
