import React from "react";
import CLOSEIMG from "@/assets/Close.svg";
import { Button } from "../ui/button";

export interface ModalProps {
  header?: React.ReactNode;
  headerDesc?: React.ReactNode;
  isOpen: boolean;
  onClose?: () => void;
  closeOnBackdropClick?: boolean;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  header,
  headerDesc,
  isOpen,
  onClose,
  closeOnBackdropClick = true,
  children,
}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed z-10 inset-0 bg-black bg-opacity-[40%] flex justify-center items-center"
      onClick={() => closeOnBackdropClick && onClose && onClose()}
    >
      <div
        className="flex flex-col bg-[#1D2025] shadow-lg rounded w-3/6 h-5/6 mt-16"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="py-6 pl-8 pr-4 bg-indigo-600 text-white flex justify-between rounded-t">
          <div className="flex flex-col gap-1">
            <span className="text-lg text-white">{header}</span>
            <span className="text-sm text-indigo-300">{headerDesc}</span>
          </div>
          <div
            className="bg-indigo-700 text-indigo-200 size-6 flex items-center rounded-md cursor-pointer"
            onClick={() => onClose && onClose()}
          >
            <img src={CLOSEIMG} alt="close" />
          </div>
        </div>
        <div className="flex-1">{children}</div>
        <div className="relative bottom-0 flex justify-between py-6 px-4">
          <Button variant="grey" size="sm" onClick={() => onClose && onClose()}>
            Cancel
          </Button>
          <Button size="sm">Finish</Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
