import { Routing } from "@/Routing/routing";
import Image from "next/image";
import Link from "next/link";

export const AdminHeading = (): JSX.Element => (
  <h1 className="font-bold text-xl w-full ">
    <Link href={Routing.adminRentalHouses.buildRoute().path}>
      <div style={{width: "100%", position: 'relative', height: '56px'}}>
        <Image src="/FiillHome.png" layout="fill" alt="ロゴ" />
      </div>
    </Link>
  </h1>
);
