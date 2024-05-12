import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  classNameContainer?: string;
  classNameInput?: string;
  classNameIcon?: string;
  icon?: React.ReactElement | React.ReactNode;
}

const Input = ({
  classNameContainer,
  classNameInput,
  icon,
  classNameIcon,
  ...props
}: InputProps) => {
  return (
    <div className={`${classNameContainer ? classNameContainer : ""} relative`}>
      <input
        className={`${classNameInput ? classNameInput : ""} bg-gray rounded-lg px-3 py-2  text-textBlack`}
        {...props}
      />
      {icon && (
        <div
          className={`${classNameIcon ? classNameIcon : ""} absolute right-0 top-0 h-full rounded-r-md`}
        >
          {icon}
        </div>
      )}
    </div>
  );
};

export default Input;
