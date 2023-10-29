import { ReservedStayDate } from "../components/ReservedStayDate"
import { useRouter } from "next/router";
import { useGetAvailableDates } from "../hooks/useGetAvailbleDates";
import { useReserveStayDate } from "../hooks/useReserveStayDate";


export const ReservedMansionRoom = (): JSX.Element => {
  const router = useRouter();
  const { mansion_room_id } = router.query;
  const { availableDates } = useGetAvailableDates(mansion_room_id as string);
  const { handleCreate } = useReserveStayDate();

  return (
    <>
      <ReservedStayDate
        mansion_room_id={mansion_room_id as string}
        availableDates={availableDates}
        handleCreate={handleCreate}
      />
    </>
  )
}