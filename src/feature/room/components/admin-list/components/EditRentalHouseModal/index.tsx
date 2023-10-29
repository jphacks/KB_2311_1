import { PlainButton } from "@/components/Button";
import { FileField } from "@/components/FileField";
import { PlainInput } from "@/components/Input";
import { PlainSelectInput } from "@/components/SelectInput";
import { ADDRESS, ADDRESS_LABEL, BUILDING_AGE, BUILDING_AGE_LABEL, MANSION, MANSION_LABEL, MAX_FLOOR_NUMBER, MAX_FLOOR_NUMBER_LABEL, NEAREST_STATION, NEAREST_STATION_LABEL, RENTAL_HOUSE_PHOTOS, RENTAL_HOUSE_PHOTOS_LABEL, STRUCTURE_TYPE, STRUCTURE_TYPE_LABEL } from "@/constants/const";
import { RentalHouseModel } from "@/feature/rentalHouse/models/rentalHouse.model";
import { Dialog, Transition } from "@headlessui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Fragment } from "react";
import { useForm } from "react-hook-form";
import { EditRentalHouseSchema, EditRentalSchemaType } from "../../type";

type Props = {
  isOpen: boolean;
  closeModal: () => void;
  rentalHouse: RentalHouseModel
  handleEdit: ({rentalHouseId, input}: {rentalHouseId: string, input: any}) => Promise<any>
};

export const EditRentalHouseModal: React.FC<Props> = ({
  isOpen,
  closeModal,
  rentalHouse,
  handleEdit,
}): JSX.Element => {
  const { handleSubmit, register, formState: { errors }, watch } = useForm<EditRentalSchemaType>({
    resolver: zodResolver(EditRentalHouseSchema),
  });

  const onclick = async (data: EditRentalSchemaType) => await handleEdit({rentalHouseId: rentalHouse.id, input: data})
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-100"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-10" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto flex items-center justify-center">
            <div className="flex justify-center m-5 p-4 text-center h-auto w-[640px]">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel
                  className={`transform overflow-hidden rounded-xl p-3 text-left align-middle shadow-xl transition-all bg-white  w-full h-full`}
                >
                  <form onClick={handleSubmit(onclick)} className="space-y-2">
                    <p className="whitespace-pre-wrap">
                      賃貸情報編集
                    </p>
                    <PlainInput
                      label={MANSION_LABEL}
                      inputType="text"
                      register={register}
                      registerValue={MANSION}
                      defaultValue={rentalHouse.name}
                    />
                    <PlainInput
                      label={NEAREST_STATION_LABEL}
                      inputType="text"
                      register={register}
                      registerValue={NEAREST_STATION}
                      defaultValue={rentalHouse.nearest_station}
                    />
                    <PlainInput
                      label={ADDRESS_LABEL}
                      inputType="text"
                      register={register}
                      registerValue={ADDRESS}
                      defaultValue={rentalHouse.address}
                    />
                    <div className="flex space-x-2">
                      <PlainInput
                        label={MAX_FLOOR_NUMBER_LABEL}
                        inputType="number"
                        register={register}
                        registerValue={MAX_FLOOR_NUMBER}
                        defaultValue={rentalHouse.max_floor_number}
                      />
                      <PlainInput
                        label={BUILDING_AGE_LABEL}
                        inputType="number"
                        register={register}
                        registerValue={BUILDING_AGE}
                        defaultValue={rentalHouse.building_age}
                      />
                    </div>
                    <PlainSelectInput
                      labelText={STRUCTURE_TYPE_LABEL}
                      registerValue={STRUCTURE_TYPE}
                      register={register}
                      error={errors.nearest_station?.message as string}
                      defaultValue={rentalHouse.structure_type}
                    >
                      <option value="1">木造</option>
                      <option value="2">S造・鉄骨造</option>
                      <option value="3">RC造・鉄筋コンクリート造</option>
                    </PlainSelectInput>
                    <FileField
                      labelText={RENTAL_HOUSE_PHOTOS_LABEL}
                      error={errors.rental_house_photos?.message as string}
                      registerValue={RENTAL_HOUSE_PHOTOS}
                      register={register}
                      watch={watch}
                    />
                    <div className="flex justify-center pb-4">
                      <PlainButton innerText="登録する" type="submit" />
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};