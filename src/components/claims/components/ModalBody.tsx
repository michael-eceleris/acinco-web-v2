import React from "react";

interface IModalBodyProps {
  title: string;
  message: string;
}

const ModalBody = ({ message, title }: IModalBodyProps) => {
  return (
    <div className=" w-full justify-center ">
      <h3 className="text-center text-2xl font-bold text-textBlack">{title}</h3>
      <p className="mx-10 my-5 text-center text-xl text-textBlack">{message}</p>
    </div>
  );
};

export default ModalBody;
