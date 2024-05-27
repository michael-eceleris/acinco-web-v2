import React, { TextareaHTMLAttributes } from "react";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  classNameContainer?: string;
  classNameInput?: string;
  classNameIcon?: string;
  icon?: React.ReactElement | React.ReactNode;
  error?: string;
}

const TextArea = ({
  classNameContainer,
  classNameInput,
  icon,
  classNameIcon,
  error,
  ...props
}: TextAreaProps) => {
  return (
    <div className={`${classNameContainer ? classNameContainer : ""} relative`}>
      <textarea
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
        {error && <p className="my-0 py-0 text-sm text-critical">{error}</p>}
      </div>
    </div>
  );
};

export default TextArea;
