import React, { useState, useRef, useEffect } from "react";

type IDropdwonFilter<T> = {
  options?: T[];
  value?: T;
  onChange?: (props) => any;
  label?: string;
  id?: string;
  placeholder?: string;
  error?: string;
};

const DropdownFilter = <T extends any>({
  options,
  value,
  onChange,
  label,
  id,
  placeholder,
  error,
}: IDropdwonFilter<T>) => {
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

  const filter = (options) => {
    return options.filter(
      (option) => option[label].toLowerCase().indexOf(query.toLowerCase()) > -1,
    );
  };
  const displayValue = () => {
    if (query.length > 0) return query;
    if (value) return value[label];
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
            value={String(displayValue())}
            onChange={(e) => {
              setQuery(e.target.value);
              onChange(null);
            }}
            onClick={toggle}
            onTouchEnd={toggle}
            className="w-full rounded-lg bg-gray px-3 py-2 text-textBlack"
            placeholder={placeholder}
          />
        </div>
      </div>
      <div
        className={`${open ? "absolute" : "hidden"} z-50 flex max-h-44 w-full flex-col overflow-auto rounded-xl bg-white px-3 py-2 shadow-md`}
      >
        {filter(options).length > 0 ? (
          filter(options).map((option) => (
            <div
              key={option[id]}
              className={`option ${value === option ? "bg-buttonBlack" : null} my-2`}
              onClick={() => {
                selecOption(option);
              }}
              onTouchEnd={() => {
                selecOption(option);
              }}
            >
              {option[label]} - {option.departamento.nombre}
            </div>
          ))
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

export default DropdownFilter;
