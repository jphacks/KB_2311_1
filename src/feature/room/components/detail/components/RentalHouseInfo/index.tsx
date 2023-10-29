import { RentalHouseModel } from "@/feature/rentalHouse/models/rentalHouse.model";
import {
  ADDRESS_LABEL,
  BUILDING_AGE_LABEL,
  MAX_FLOOR_NUMBER_LABEL,
  NEAREST_STATION_LABEL,
  STRUCTURE_TYPE_LABEL,
} from "@/constants/const";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

type Props = {
  rentalHouse: RentalHouseModel;
};

export const RentalHouseInfo = ({
  rentalHouse: {
    name,
    address,
    nearest_station,
    max_floor_number,
    building_age,
    rental_house_photos,
    structure_type,
  },
}: Props): JSX.Element => (
  <div className="flex flex-col space-y-8 w-full items-center">
    <div className="w-full">
      <Splide aria-label="お気に入りの写真">
        {rental_house_photos.map((img, index) => (
          <SplideSlide key={index} >
            <img src={img} alt="賃貸の写真"  className="w-full h-80" style={{ objectFit: 'cover' }}/>
          </SplideSlide>
        ))}
      </Splide>
    </div>

    <div className="mx-6 w-4/5 md:w-2/3">
      <div>
        <h3 className="font-semibold text-xl">{name}</h3>
      </div>
      <div className="flex-col space-y-2 bg-gray-100 rounded-lg px-4 py-5 my-6">
        <div>
          <p className="text-xs">{ADDRESS_LABEL}</p>
          <p>&nbsp;{address}</p>
        </div>
        <div>
          <p className="text-xs">{NEAREST_STATION_LABEL}</p>
          <p>&nbsp;{nearest_station}</p>
        </div>
        <div>
          <p className="text-xs">{MAX_FLOOR_NUMBER_LABEL}</p>
          <p>&nbsp;{max_floor_number}建</p>
        </div>
        <div>
          <p className="text-xs">{BUILDING_AGE_LABEL}</p>
          <p>&nbsp;{building_age}年</p>
        </div>
        <div>
          <p className="text-xs">{STRUCTURE_TYPE_LABEL}</p>
          <p>&nbsp;{structure_type}</p>
        </div>
      </div>
    </div>
  </div>
);
