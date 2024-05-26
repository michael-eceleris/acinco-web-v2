import React, { useState, useRef, useEffect } from "react";

type IDropdown<T> = {
  options?: T[];
  placeholder?: string;
  prompt?: string;
  value?: T;
  onChange?: (props) => any;
  label1?: string;
  label2?: string;
  label3?: string;
  prop1?: string;
  prop2?: string;
  prop3?: string;
  error?: string;
};

const Dropdown = <T extends any>({
  options,
  prompt,
  value,
  onChange,
  label1,
  label2,
  label3,
  prop1,
  prop2,
  prop3,
  placeholder,
  error,
}: IDropdown<T>) => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const ref = useRef(null);

  useEffect(() => {
    ["click", "touchend"].forEach((e) => {
      document.addEventListener(e, toggle);
    });
    return () =>
      ["click", "touchend"].forEach((e) => {
        document.removeEventListener(e, toggle);
      });
  }, []);

  const toggle = (e) => {
    setOpen(e && e.target === ref.current);
  };

  const displayValue = () => {
    if (query.length > 0) return query;
    if (value)
      return `${prop1 ? value[label1][prop1] : value[label1]}${
        label2 ? `- ${label2} ` : ""
      }${prop2 ? value[prop2] : ""}${label3 ? `- ${label3} ` : ""}${
        prop3 ? value[prop3] : ""
      } `;
    return "";
  };

  const selecOption = (option) => {
    onChange(option);
    setOpen(false);
    setQuery("");
  };
  return (
    <div className="relative w-full">
      <div className="w-full">
        <div className="my-3 w-full">
          <input
            ref={ref}
            type="text"
            value={displayValue()}
            onChange={(e) => {
              setQuery(e.target.value);
              onChange(null);
            }}
            onClick={toggle}
            onTouchEnd={toggle}
            placeholder={placeholder}
            className="w-full rounded-lg bg-gray px-3 py-2 text-textBlack"
            readOnly
          />
        </div>
      </div>
      <div
        className={`${open ? "absolute" : "hidden"} z-50 flex max-h-44 w-full flex-col overflow-auto rounded-xl bg-white px-3 py-2 shadow-md`}
      >
        {options.length > 0 ? (
          options.map((option, index) =>
            option !== undefined ? (
              <div
                key={`option_${prompt}_${index}`}
                className={`${value === option ? "bg-buttonBlack" : null} my-2`}
                onClick={() => {
                  selecOption(option);
                }}
                onTouchEnd={() => {
                  selecOption(option);
                }}
              >
                {`${prop1 ? option[label1][prop1] : option[label1]}${
                  label2 ? `- ${label2} ` : ""
                }${prop2 ? option[prop2] : ""}${label3 ? `- ${label3} ` : ""}${
                  prop3 ? option[prop3] : ""
                }`}
              </div>
            ) : null,
          )
        ) : (
          <div className="option">No hay opciones</div>
        )}
      </div>
      <div className="-mt-3 h-4">
        {error && <p className="my-0 py-0 text-sm text-critical">{error}</p>}
      </div>
    </div>
  );
};

export default Dropdown;
