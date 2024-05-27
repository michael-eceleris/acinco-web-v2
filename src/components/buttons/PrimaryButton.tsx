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
      className={`${className ? className : ""} relative h-9 px-3 py-1 ${loading ? "pr-8 opacity-65" : ""}`}
      {...props}
    >
      {title}
      {loading && (
        <div className="border-gray-300 absolute right-0 top-1/4 z-50 mr-2 h-5 w-5 animate-spin rounded-full border-4 border-t-blueFinance" />
      )}
    </button>
  );
};
export default PrimaryButton;
