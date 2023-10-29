import { RentalHouseModel } from "@/feature/rentalHouse/models/rentalHouse.model";

// type
export type CreateRentalHouse = Omit<
  RentalHouseModel,
  "id" | "mansion" | "structure_type"
> & { structure_type: number };
