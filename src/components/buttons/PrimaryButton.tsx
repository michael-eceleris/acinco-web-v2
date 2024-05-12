import React, { ButtonHTMLAttributes } from "react";

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  className?: string;
  loading?: boolean;
}

const PrimaryButton = ({
  title,
  className,
  loading,
  ...props
}: PrimaryButtonProps) => {
  return (
    <button
      className={`${className ? className : ""} h-9  px-3 py-1`}
      {...props}
    >
      {title}
    </button>
  );
};
export default PrimaryButton;
