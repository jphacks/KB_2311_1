import { RentalHouseModel } from "@/feature/rentalHouse/models/rentalHouse.model";
import { AdminRentalHouseCard } from "../AdminRentalHouseCard";

type Props = {
  myRentalHouses: RentalHouseModel[];
};

export const BelongToOwnerRentalHouseList = ({
  myRentalHouses,
}: Props): JSX.Element => (
  <div className="grid gap-y-8 lg:grid-cols-2 xl:grid-cols-3 ">
    {myRentalHouses.length === 0 ? (
      <p className="text-center font-bold text-red-400">
        まだ作成していません。
      </p>
    ) : (
      myRentalHouses.map((house) => {
        return (
          <AdminRentalHouseCard
            key={house.id}
            id={house.id}
            houseName={house.name}
            img={house.rental_house_photos[0]}
            address={house.address}
          />
        );
      })
    )}
  </div>
);
