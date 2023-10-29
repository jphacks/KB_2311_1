import { AdminHeading } from "@/components/Heading/admin";
import { Routing } from "@/Routing/routing";
import Link from "next/link";
import { CiViewList } from "react-icons/ci";
import { IoIosCreate } from "react-icons/io";

export const AdminSidebar = () => {
  //SideBarに必要なリンクの配列
  const menuLinks = [
    {
      href: Routing.adminRentalHouses.buildRoute().path,
      label: "マンション一覧",
      icon: <CiViewList />,
    },
    {
      href: Routing.addRentalHouse.buildRoute().path,
      label: "マンション追加",
      icon: <IoIosCreate />,
    },
  ];

  return (
    <aside className="fixed top-0 left-0 flex flex-col w-60 h-screen bg-gray-800 text-white">
      <div className="flex justify-center items-center h-24 w-full border-b border-white ">
        <AdminHeading />
      </div>
      <div className="flex flex-col items-center w-full">
        {menuLinks.map((menu) => (
          <Link
            key={menu.label}
            href={menu.href}
            className="flex flex-row items-center justify-start font-semibold h-16 pl-4 w-full hover:bg-pink-color"
          >
            <div className="text-2xl mr-2">{menu.icon}</div>
            <div>{menu.label}</div>
          </Link>
        ))}
      </div>
    </aside>
  );
};
