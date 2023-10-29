import { useRouter } from "next/router";
import { CreateRoomForm } from "../components/CreateRoomForm.tsx";
import { PlainTitle } from "@/components/Title/PlainTitle";

export const AdminAddRentalRoom = (): JSX.Element => {
  const { query } = useRouter();

  return (
    <div className="flex flex-col w-full items-center  min-h-screen h-full space-y-10 bg-gray-50">
      <div className="flex flex-col w-full md:w-4/5 lg:w-2/3 xl:w-1/2 min-h-screen h-full items-center bg-white space-y-8 pb-16">
        <PlainTitle titleText="所持している物件一覧" />
        <CreateRoomForm houseId={query.houseId as string} />
      </div>
    </div>
  );
};
