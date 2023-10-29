import { UserLayout } from "@/components/layouts/Layout/UserLayout";
import { ReservedMansionRoom } from "@/feature/reserve/components/create/page";
import { ReactElement } from "react";

const ReservedMansionRoomPage = () => <ReservedMansionRoom />;

ReservedMansionRoomPage.getLayout = (page: ReactElement) => (
  <UserLayout>{page}</UserLayout>
);
export default ReservedMansionRoomPage;
