import { PlainLink } from "@/components/Link";
import { Routing } from "@/Routing/routing";
import Image from "next/image";

type Props = {
  id: string;
  houseName: string;
  img: string;
  address: string;
};

export const AdminRentalHouseCard = ({
  id,
  houseName,
  img,
  address,
}: Props): JSX.Element => (
  <section className="flex flex-col w-full sm:p-4 xl:p-8 items-center space-y-4 rounded-lg">
    <figure style={{ position: "relative", width: "100%", height: "320px" }}>
      <Image
        className="rounded-lg"
        src={img}
        alt="家の写真"
        layout="fill"
        objectFit="cover"
      />
    </figure>
    <div className="flex flex-col bg-gray-50 p-4 rounded-md w-full space-y-8">
      <div className="flex flex-col items-start text-left text-sm">
        <p className="text-base font-semibold">{houseName}</p>
        <p className="text-gray-500 mb-1">{address}</p>
      </div>
      <PlainLink
        path={Routing.adminRoomsBelongToHouse.buildRoute({ houseId: id }).path}
        innerText="募集中のroom一覧"
      />
    </div>
  </section>
);
