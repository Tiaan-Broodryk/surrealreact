import { Dialog, Transition } from "@headlessui/react";
import { Fragment, ReactNode, useState } from "react";
import { ExclamationTriangleIcon } from "@heroicons/react/20/solid";

export default function DialogModal({
  buttonContents,
  children,
}: {
  buttonContents: ReactNode;
  children: ReactNode;
}) {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="">
        <button type="button" onClick={openModal}>
          {buttonContents}
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-zinc-700 p-6 text-left align-middle shadow-xl transition-all ">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-bold leading-6 text-red-500 "
                  >
                    <ExclamationTriangleIcon className="h-10 w-10 text-red-500" />
                    Delete !!!!
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className=" text-lg text-white ">
                      Are you shure you want to delete this item?
                    </p>
                  </div>

                  <div className=" p-3">
                    <button
                      type="button"
                      className=" inline-flex justify-center rounded border border-transparent bg-zinc-600 px-4 py-2 text-sm font-bold text-white hover:bg-zinc-800 hover:text-white"
                      onClick={closeModal}
                    >
                      Cancel
                    </button>

                    {children}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
