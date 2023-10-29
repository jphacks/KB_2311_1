import { RentalHouseModel } from "@/feature/rentalHouse/models/rentalHouse.model";

export class RentalHouseMock {
  create(num: number): RentalHouseModel[] {
    return [...new Array(num)].map((_, i) => {
      return {
        id: String(i),
        name: `mockハウス${i}`,
        address: `mock${i}@gmail.com`,
        nearest_station: `最寄駅${i}`,
        max_floor_number: i,
        building_age: i,
        rental_house_photos: ['/exapmleHouse.jpg'],
        structure_type: 'S造・鉄骨造',
        // mansion?: TODO: 後々追加
      }
    }) 
  }
}