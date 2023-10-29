import { AdminLayout } from "@/components/layouts/Layout/AdminLayout";
import { RoomListBelongToOwnerHose } from "@/feature/room/components/admin-list/page";
import { ReactElement } from "react";

//rentalHouse一件に紐ずくroom一覧取得
const RoomListPage = (): JSX.Element => <RoomListBelongToOwnerHose />;

RoomListPage.getLayout = (page: ReactElement) => (
  <AdminLayout>{page}</AdminLayout>
);

export default RoomListPage;
