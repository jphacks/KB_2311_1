import { useOwnRentalHouses } from "@/feature/rentalHouse/components/admin-list/hooks/useOwnRentalHouses";
import { BelongToOwnerRentalHouseList } from "../components/AdminBelongToOwnerRentalHouseList";
import { PlainTitle } from "@/components/Title/PlainTitle";

export const AdminRentalHouseList = () => {
  const { myRentalHouses } = useOwnRentalHouses();

  return (
    <div className="flex flex-col w-full min-h-screen h-full space-y-10 m-8">
      <PlainTitle titleText="所持している物件一覧" />
      <BelongToOwnerRentalHouseList myRentalHouses={myRentalHouses} />
    </div>
  );
};
