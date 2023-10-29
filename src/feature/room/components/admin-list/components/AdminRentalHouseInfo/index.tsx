import { RentalHouseModel } from "@/feature/rentalHouse/models/rentalHouse.model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

type Props = {
  rentalHouse: RentalHouseModel,
  openEditRentalHouseModal: () => void,
  handleDelete: () => Promise<void>
};

export const AdminRentalHouseInfo = ({
 rentalHouse: { rental_house_photos, name, address, nearest_station, structure_type, max_floor_number, building_age },
 openEditRentalHouseModal,
 handleDelete
}: Props) => (
  <>
    <div className="w-full">
      <Splide aria-label="お気に入りの写真">
        {rental_house_photos.map((img, index) => (
          <SplideSlide key={index} >
            <img src={img} alt="賃貸の写真"  className="w-full h-96 rounded-md" style={{ objectFit: 'cover' }}/>
          </SplideSlide>
        ))}
      </Splide>
    </div>
    <div className="w-sm md:w-md lg:w-lg flex flex-col items-end">
      <div className="space-x-2">
        <button onClick={handleDelete}><AiFillDelete className={"h-8 w-8 bg-gray-200 p-2 rounded-full"} /></button>
        <button onClick={openEditRentalHouseModal}><AiFillEdit className={"h-8 w-8 bg-gray-200 p-2 rounded-full"} /></button>
      </div>
      <div className="w-full">
        <h3 className="font-semibold text-xl">{name}</h3>
        <div className="flex-col space-y-2 bg-gray-100 rounded-lg px-4 py-5 my-6">
          <div>
            <p className="text-xs">住所</p>
            <p>&nbsp;{address}</p>
          </div>
          <div>
            <p className="text-xs">最寄駅</p>
            <p>&nbsp;{nearest_station}</p>
          </div>
          <div className="flex justify-between">
            <div className="w-1/3">
              <p className="text-xs">構造</p>
              <p>{structure_type}</p>
            </div>
            <div className="w-1/3">
              <p className="text-xs">階数</p>
              <p>&nbsp;{max_floor_number}建</p>
            </div>
            <div className="w-1/3">
              <p className="text-xs">築年数</p>
              <p>&nbsp;{building_age}年</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);
