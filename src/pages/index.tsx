import Image from "next/image";
import Link from "next/link";
import { PlainLink } from "@/components/Link";
import { Routing } from "@/Routing/routing";

export default function Home() {
  return (
    <main
      className={`flex min-h-screen w-full flex-col items-center justify-center p-24 `}
    >
      <div className="flex flex-col items-center w-80 sm:w-96 space-y-8">
        <Image src="/FiillHome.png" height={240} width={240} alt="ロゴ" />
        <PlainLink
          path={Routing.rentalHouses.buildRoute().path}
          innerText="泊まるお部屋をお探しの方はこちら"
        />
        <Link href={Routing.adminRentalHouses.buildRoute().path}>
          大家・管理会社の方はこちら
        </Link>
      </div>
    </main>
  );
}
