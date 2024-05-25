import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  classNameContainer?: string;
  classNameInput?: string;
  classNameIcon?: string;
  icon?: React.ReactElement | React.ReactNode;
  error?: string;
}

const Input = ({
  classNameContainer,
  classNameInput,
  icon,
  classNameIcon,
  error,
  ...props
}: InputProps) => {
  return (
    <div className={`${classNameContainer ? classNameContainer : ""} relative`}>
      <input
        className={`${classNameInput ? classNameInput : ""} rounded-lg bg-gray px-3 py-2  text-textBlack`}
        {...props}
      />
      {icon && (
        <div
          className={`${classNameIcon ? classNameIcon : ""} absolute right-0 top-0 h-full rounded-r-md`}
        >
          {icon}
        </div>
      )}
      <div className="h-1">
        {error && <p className="text-critical my-0 py-0 text-sm">{error}</p>}
      </div>
    </div>
  );
};

export default Input;
