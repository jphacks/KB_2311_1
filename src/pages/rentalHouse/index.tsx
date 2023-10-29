import { ReactElement } from "react";
import { UserLayout } from "@/components/layouts/Layout/UserLayout";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { SearchableRentalHouseList } from "@/feature/rentalHouse/components/list/page";
import {
  rentalHouseFactory,
} from "@/feature/rentalHouse/models/rentalHouse.model";
import { RentalHousesWithCount } from "@/feature/rentalHouse/components/list/type";
import { MAX_RENTAL_HOUSES_PER_REQUEST } from "@/constants/const";

export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {

  const { search, currentPage } = ctx.query;
  let offset = currentPage && (Number(currentPage) - 1) * MAX_RENTAL_HOUSES_PER_REQUEST as unknown as string;
  
  const response = await rentalHouseFactory().getSearch({search: search as string | undefined, limit: MAX_RENTAL_HOUSES_PER_REQUEST, offset});

  return {
    props: { response },
  };
};

type Props = {
  response: RentalHousesWithCount;
};

const RentalHousesPage = ({ response }: Props): ReactElement => (
  <SearchableRentalHouseList rentalHouses={response.rentalHouses} totalCount={response.totalCount} />
);

RentalHousesPage.getLayout = (page: ReactElement) => (
  <UserLayout>{page}</UserLayout>
);

export default RentalHousesPage;
