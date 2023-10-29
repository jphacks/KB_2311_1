import { ToastState } from "@/store/toast";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useRecoilValue } from "recoil";

export const ToastModal: React.FC = (): JSX.Element => {
  const { isShown, message, style } = useRecoilValue(ToastState);
  return (
    <>
      <Transition appear show={isShown} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => null}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-10" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex justify-center m-5 p-4 text-center">
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
                  className={` max-w-md transform overflow-hidden rounded-lg px-6 py-3 text-left align-middle shadow-xl transition-all bg-green-400 ${
                    style === "success" ? "bg-green-400" : "bg-red-400"
                  }`}
                >
                  <div className="flex items-center justify-center p-1">
                    <p className="text-sm text-white whitespace-pre-wrap">
                      {message}
                    </p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
