import { RentalHouseSearchBox } from "../components/RentalHouseSearchBox";
import { RentalHouseList } from "../components/RentalHouseList";
import { RentalHouseModel } from "@/feature/rentalHouse/models/rentalHouse.model";
import { PagiNation } from "@/components/Pagination";
import { usePagination } from "@/hooks/usePagination";
import { useRouter } from "next/router";
import { Routing } from "@/Routing/routing";

type Props = {
  rentalHouses: RentalHouseModel[];
  totalCount: number;
};

export const SearchableRentalHouseList = ({
  rentalHouses,
  totalCount
}: Props): JSX.Element => {
  const router = useRouter();
  const { currentPage: queryCurrentPage } = router.query;
  const { currentPage, setCurrentPage, pageCount } = usePagination(totalCount, Number(queryCurrentPage) ?? 1);

  // Paginationのロジック(routingの為カスタムフックに切り出せていない)
  const handleClicKPageRouter = (count: number) => {
    const { search } = router.query;

    setCurrentPage(count);
    switch (true) {
      case !!search && !!count:
        router.push(
          Routing.rentalHousesBySearchAndCurrentPage.buildRoute({
            currentPage: count,
            search: search as string,
          }).path
        );
        break;
      case !!count:
        router.push(
          Routing.rentalHousesByCurrentPage.buildRoute({ currentPage: count }).path
        );
        break;
      case !!search:
        router.push(
          Routing.rentalHousesBySearch.buildRoute({ search: search as string }).path
        );
        setCurrentPage(1);
        break;
      default:
        router.push(Routing.rentalHouses.buildRoute().path);
    }
  };

  return (
    <div className="flex flex-col items-center w-full min-h-screen h-full">
      <RentalHouseSearchBox
        setCurrentPage={setCurrentPage}
      />
      <RentalHouseList rentalHouses={rentalHouses} />
      <div>
        <PagiNation 
          pageCount={pageCount}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          handleClicKPageRouter={handleClicKPageRouter}
        />
      </div>
    </div>
  );
};
