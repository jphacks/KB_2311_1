import { ErrorText } from "@/components/ErrorText";
import { PlainLink } from "@/components/Link";
import { Routing } from "@/Routing/routing";

type Props = {
  stayFee: number;
  mansion_room_id: string;
};
export const BookingFooter = ({
  stayFee,
  mansion_room_id,
}: Props): JSX.Element => (
  <div className="fixed bottom-0 w-full flex justify-between p-4 shadow-lg bg-white">
    <div>
      <p className="text-xs">1泊料金</p>
      <p className="font-semibold">¥{stayFee}</p>
      <ErrorText errorText="*契約しなかった場合のみ" />
    </div>
    <div className="w-40">
      <PlainLink
        target="_blank"
        innerText="予約する"
        path={Routing.reservedRoom.buildRoute({ mansion_room_id }).path}
      />
    </div>
  </div>
);
