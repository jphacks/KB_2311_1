import { RentalHouseCard } from "../RentalHouseCard";
import { RentalHouseModel } from "@/feature/rentalHouse/models/rentalHouse.model";
import { useMemo } from "react";

export type Props = {
  rentalHouses: RentalHouseModel[];
};

export const RentalHouseList = ({ rentalHouses }: Props): JSX.Element => {
  if (!rentalHouses.length) return <p>投稿が存在しません</p>;

  return (
    <div className="grid gap-y-8 sm:gap-x-4 grid-cols-1 sm:grid-cols-2 mt-8 w-[90%] sm:w-[816px] items-center justify-center ">
      {rentalHouses?.map((house) => {
        return (
          <RentalHouseCard
            id={house.id}
            key={house.id}
            houseName={house.name}
            img={house.rental_house_photos[0]}
            address={house.address}
            rooms={house.mansion?.mansion_rooms}
          />
        );
      })}
    </div>
  );
};
