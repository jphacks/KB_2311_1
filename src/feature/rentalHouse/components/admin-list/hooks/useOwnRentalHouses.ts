import { useLoading } from "@/hooks/useLoading";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { FAIL_TO_GET_RENTALHOUSE } from "@/constants/messages";
import {
  RentalHouseModel,
  rentalHouseFactory,
} from "@/feature/rentalHouse/models/rentalHouse.model";

export const useOwnRentalHouses = () => {
  const { showLoading, hideLoading } = useLoading();
  const [myRentalHouses, setMyRentalHouses] = useState<RentalHouseModel[]>([]);
  useEffect(() => {
    (async () => {
      try {
        showLoading();
        const fetchedMyRentalHouses = await rentalHouseFactory().getAllOwn();
        setMyRentalHouses(fetchedMyRentalHouses);
        hideLoading();
      } catch (error: unknown) {
        hideLoading();
        const isTypeSafeError = error instanceof Error;
        toast.error(
          `${FAIL_TO_GET_RENTALHOUSE}\n${isTypeSafeError && error.message}`
        );
      }
    })();
  }, []);
  return { myRentalHouses };
};
