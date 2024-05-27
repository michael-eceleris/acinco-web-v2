import React from "react";
import { useModalContext } from "../../providers/modal/modal.provider";
import PrimaryButton from "../buttons/PrimaryButton";

const Modal = () => {
  const { show, setShow } = useModalContext();
  const { onAccept, header, content, visible, titleOnAccept } = show;
  const handleCloseModal = () => {
    setShow((prevState) => ({
      ...prevState,
      visible: false,
    }));
  };
  return (
    <div
      className={`${visible ? "" : "hidden"} fixed left-0 right-0 top-0 z-50 flex h-[calc(100%)] max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden md:inset-0`}
      style={{ background: "rgba(0, 0, 0, 0.7)" }}
    >
      <div className="relative max-h-full w-full max-w-2xl p-4">
        {/* <!-- Modal content --> */}
        <div className="relative rounded-lg bg-white shadow">
          {/*  <!-- Modal header --> */}
          <div className="flex items-center justify-between rounded-t p-2">
            <button
              type="button"
              className="text-gray-400 hover:bg-gray-200 hover:text-gray-900  ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm "
              data-modal-hide="default-modal"
              onClick={() => handleCloseModal()}
            >
              <svg
                className="h-3 w-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          {/* <!-- Modal body --> */}
          <div className="space-y-4 p-4 md:p-5">
            {header}
            {content}
          </div>
          {/*  <!-- Modal footer --> */}
          <div className="border-gray-200 flex items-center justify-evenly rounded-b  p-4 ">
            <PrimaryButton
              title="Cerrar"
              type="button"
              className="rounded-2xl border px-5 text-textBlack"
              onClick={() => handleCloseModal()}
            />
            {onAccept && (
              <PrimaryButton
                title={titleOnAccept}
                type="button"
                className="rounded-2xl bg-buttonBlack px-5 text-white"
                onClick={() => onAccept()}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
