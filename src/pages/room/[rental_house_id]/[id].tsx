import { ReactElement } from "react";
import { UserLayout } from "@/components/layouts/Layout/UserLayout";
import { GetServerSideProps } from "next";
import { RoomDetail } from "@/feature/room/components/detail/page";
import { MansionRoomWithRentalHouse } from "@/feature/room/type/room";
import { roomFactory } from "@/feature/room/models/room.model";

export const getServerSideProps: GetServerSideProps = async (context) => {
  //queryを取得
  const rental_house_id = context.query.rental_house_id as string;
  const id = context.query.id as string;

  const mansionRoomWithRentalHouse = await roomFactory().getOneWithHouse({
    id,
    rental_house_id,
  });

  return {
    props: { mansionRoomWithRentalHouse },
  };
};

type Props = {
  mansionRoomWithRentalHouse: MansionRoomWithRentalHouse;
};

const RoomWithHouseDetailPage = ({
  mansionRoomWithRentalHouse,
}: Props): ReactElement => (
  <RoomDetail roomWithRentalHouse={mansionRoomWithRentalHouse} />
);

RoomWithHouseDetailPage.getLayout = (page: ReactElement) => (
  <UserLayout>{page}</UserLayout>
);

export default RoomWithHouseDetailPage;
