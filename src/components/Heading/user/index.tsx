import { Routing } from "@/Routing/routing";
import Image from "next/image";
import Link from "next/link";

export const Heading = (): JSX.Element => (
  <h1 className="font-bold text-xl">
    <Link href={Routing.rentalHouses.buildRoute().path}>
      <Image src="/FiillHome.png" height={160} width={160} alt="ロゴ" />
    </Link>
  </h1>
);
