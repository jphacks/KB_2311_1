import { PlainTitle } from "@/components/Title/PlainTitle";
import { CreateRentalHouseForm } from "../components/CreateRentalhouseForm";
import { useCreateRentalHouse } from "../hooks/useCreateRentalHouse";
import { RentalSchemaType } from "@/feature/rentalHouse/type";
import { useRouter } from "next/router";
import { Routing } from "@/Routing/routing";

export const AddRentalHouse = (): JSX.Element => {
  const router = useRouter();

  const { handleCreate } = useCreateRentalHouse();

  const onSubmit = async (data: RentalSchemaType): Promise<void> => {
    const rentalHouse = await handleCreate(data);
    if (rentalHouse?.id)
      router.push(
        Routing.adminRoomsBelongToHouse.buildRoute({ houseId: rentalHouse.id })
          .path
      );
  };

  return (
    <div className="flex flex-col w-4/5 my-8 items-center justify-center bg-white space-y-8 rounded-md">
      <div className="w-full sm:w-4/5 mt-8">
        <PlainTitle titleText="物件の登録" />
      </div>
      <CreateRentalHouseForm 
        onSubmit={onSubmit}
      />
    </div>
  )
};
