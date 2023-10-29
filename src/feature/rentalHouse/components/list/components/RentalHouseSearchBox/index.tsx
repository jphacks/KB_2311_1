import { SearchBox } from "@/components/Search";
import { Routing } from "@/Routing/routing";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";

type Props = {
  setCurrentPage: Dispatch<SetStateAction<number>>
}

export const RentalHouseSearchBox = ({ setCurrentPage }: Props): JSX.Element => {
  const router = useRouter();
  const { register, handleSubmit } = useForm();

  const onSubmit = ({ search }: { search?: string }) => {
    // 検索した時にpaginationの位置を最初にする
    setCurrentPage(1);
    if (search) return router.push(Routing.rentalHousesBySearch.buildRoute({ search }).path);
    return router.push(Routing.rentalHouses.buildRoute().path);
  };

  return (
    <div className="mt-4 flex items-center justify-center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <SearchBox
          register={register}
          registerValue="search"
          placeholder="探したい賃貸を入力"
        />
      </form>
    </div>
  );
};
