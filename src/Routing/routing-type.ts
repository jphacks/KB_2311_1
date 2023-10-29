export type Route = {
  id: keyof RoutingType;
  path: string;
};

type RoutingWithParams<T> = {
  buildRoute: (params: T) => Route;
  pathName: string;
};

type RoutingWithNoParams = {
  buildRoute: () => Route;
  pathName: string;
};

export type RoutingType = {
  //user
  //room
  room: RoutingWithParams<{ roomId: number }>;
  roomWithRentalHouse: RoutingWithParams<{
    id: string;
    rental_house_id: string;
  }>;
  //rentalHouse
  rentalHouses: RoutingWithNoParams;
  rentalHousesBySearch: RoutingWithParams<{ search: string }>;
  rentalHousesByCurrentPage: RoutingWithParams<{ currentPage: number }>;
  rentalHousesBySearchAndCurrentPage: RoutingWithParams<{ search: string, currentPage: number }>;

  //admin
  //owner
  ownerSignUp: RoutingWithNoParams;
  ownerSignIn: RoutingWithNoParams;
  //rentalHouse
  adminRentalHouses: RoutingWithNoParams;
  addRentalHouse: RoutingWithNoParams;
  //room
  adminRoomsBelongToHouse: RoutingWithParams<{ houseId: string }>;
  adminAddRoomBelongToHouse: RoutingWithParams<{ houseId: string }>;

  //reserved
  reservedRoom: RoutingWithParams<{ mansion_room_id: string }>;
};
