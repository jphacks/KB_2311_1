import { MansionRoomWithRentalHouse } from "../../../type/room";
import { RentalHouseInfo } from "@/feature/room/components/detail/components/RentalHouseInfo";
import { RoomInfo } from "../components/RoomInfo";
import { BookingFooter } from "../components/BookingFooter";

type Props = {
  roomWithRentalHouse: MansionRoomWithRentalHouse;
};

export const RoomDetail = ({
  roomWithRentalHouse: { mansion_room, rental_house },
}: Props): JSX.Element => (
  <div className="flex flex-col justify-center items-center w-full min-h-screen h-full mb-24">
    {/* 全体に共通する情報(RentalHouse) */}
    <RentalHouseInfo rentalHouse={rental_house} />

    {/* 各部屋の情報 */}
    <RoomInfo room={mansion_room} />

    {/* 予約遷移フッター */}
    <BookingFooter
      stayFee={mansion_room.stay_fee}
      mansion_room_id={mansion_room.id}
    />
  </div>
);
