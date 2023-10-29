import { RoutingType } from "./routing-type";

// user
export const roomPath = "/room";
export const rentalHousePath = "/rentalHouse";
export const reservePath = "/reserve";

// admin
export const baseAdminPath = "/admin";
export const adminOwnerPath = `${baseAdminPath}/owner`;
export const adminRentalHousePath = `${baseAdminPath}${rentalHousePath}`;
export const adminRoomPath = `${baseAdminPath}${roomPath}`;

// pathをここに追加していく。
export const Routing: RoutingType = {
  room: {
    buildRoute: ({ roomId }) => {
      return {
        id: "room",
        path: `${roomPath}/${roomId}`,
      };
    },
    pathName: "room詳細",
  },

  roomWithRentalHouse: {
    buildRoute: ({ id, rental_house_id }) => {
      return {
        id: "roomWithRentalHouse",
        path: `${roomPath}/${rental_house_id}/${id}`,
      };
    },
    pathName: "roomと紐ずくhouseの取得",
  },

  rentalHouses: {
    buildRoute: () => {
      return {
        id: "rentalHouses",
        path: `${rentalHousePath}`,
      };
    },
    pathName: "rentalHouseの一覧",
  },
  rentalHousesBySearch: {
    buildRoute: ({ search }) => {
      return {
        id: "rentalHousesBySearch",
        path: `${rentalHousePath}?search=${search}`,
      };
    },
    pathName: "rentalHouseを条件検索",
  },

  rentalHousesByCurrentPage: {
    buildRoute: ({ currentPage }) => {
      return {
        id: "rentalHousesByCurrentPage",
        path: `${rentalHousePath}?currentPage=${currentPage}`,
      };
    },
    pathName: "現在のページを取得",
  },

  rentalHousesBySearchAndCurrentPage: {
    buildRoute: ({ search, currentPage }) => {
      return {
        id: "rentalHousesBySearchAndCurrentPage",
        path: `${rentalHousePath}?search=${search}&currentPage=${currentPage}`,
      };
    },
    pathName: "rentalHouseを条件検索と現在のページ",
  },

  ownerSignUp: {
    buildRoute: () => {
      return {
        id: "ownerSignUp",
        path: `${adminOwnerPath}/signUp`,
      };
    },
    pathName: "ownerのサインアップ",
  },
  ownerSignIn: {
    buildRoute: () => {
      return {
        id: "ownerSignUp",
        path: `${adminOwnerPath}/signIn`,
      };
    },
    pathName: "ownerのサインイン",
  },

  adminRentalHouses: {
    buildRoute: () => {
      return {
        id: "adminRentalHouses",
        path: `${adminRentalHousePath}`,
      };
    },
    pathName: "ownerに所属するhouseの一覧",
  },
  addRentalHouse: {
    buildRoute: () => {
      return {
        id: "addRentalHouse",
        path: `${adminRentalHousePath}/addRentalHouse`,
      };
    },
    pathName: "ownerのhouseの作成",
  },
  adminRoomsBelongToHouse: {
    buildRoute: ({ houseId }) => {
      return {
        id: "adminRoomsBelongToHouse",
        path: `${adminRoomPath}/${houseId}`,
      };
    },
    pathName: "houseに紐ずくroomリスト",
  },
  adminAddRoomBelongToHouse: {
    buildRoute: ({ houseId }) => {
      return {
        id: "adminAddRoomBelongToHouse",
        path: `${adminRoomPath}/${houseId}/addRoom`,
      };
    },
    pathName: "houseに紐ずくroom作成",
  },

  reservedRoom: {
    buildRoute: ({ mansion_room_id }) => {
      return {
        id: "reservedRoom",
        path: `${reservePath}/${mansion_room_id}`,
      };
    },
    pathName: "room予約ページ",
  },
};
