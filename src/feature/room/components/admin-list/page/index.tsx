import { PlainLink } from "@/components/Link";
import { AdminRentalHouseInfo } from "@/feature/room/components/admin-list/components/AdminRentalHouseInfo";
import { AdminRoomListBelongToRentalHose } from "../components/AdminRoomListBelongToRentalHose";
import { Routing } from "@/Routing/routing";
import { useRouter } from "next/router";
import { useSpecificRentalHouseAndBelongingToRooms } from "../hooks/useSpecificRentalHouseAndBelongingToRooms";
import { EditRentalHouseModal } from "../components/EditRentalHouseModal";
import { useEditRentalHouse } from "../hooks/useEditRentalHouse";
import { useDeleteRentalHouse } from "../hooks/useDeleteRentalHouse";

export const RoomListBelongToOwnerHose = () => {
  const router = useRouter();
  const { houseId } = router.query;

  const { rooms, rentalHouse } = useSpecificRentalHouseAndBelongingToRooms(
    houseId as string
  );

  const { handleDelete } = useDeleteRentalHouse();
  const { handleEdit, isEditModalOpen, openEditRentalHouseModal, closeEditRentalHouseModal } = useEditRentalHouse();

  const deleteRentalHouse = async () => {
    if (!rentalHouse?.id) return
    const isSuccess = await handleDelete(rentalHouse?.id as string);
    if (isSuccess) router.push(Routing.adminRentalHouses.buildRoute().path);
  }
  if (!rentalHouse) return <></>;
  return (
    <>
      <div className="flex flex-col items-center w-full min-h-screen h-full space-y-10 mb-8">
        <AdminRentalHouseInfo
          rentalHouse={rentalHouse}
          openEditRentalHouseModal={openEditRentalHouseModal}
          handleDelete={deleteRentalHouse}
        />

        <div className="sm: w-1/2 md:w-1/3 lg:w-1/4 ">
          <PlainLink
            innerText="ルームを作成する"
            path={
              Routing.adminAddRoomBelongToHouse.buildRoute({
                houseId: houseId as string,
              }).path
            }
          />
        </div>

        <AdminRoomListBelongToRentalHose mansionRooms={rooms} />
      
      <EditRentalHouseModal
        isOpen={isEditModalOpen}
        closeModal={closeEditRentalHouseModal}
        rentalHouse={rentalHouse}
        handleEdit={handleEdit}
      />
      </div>
    </>
  );
};
