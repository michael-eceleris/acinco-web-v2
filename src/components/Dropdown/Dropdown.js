import React, { useState, useRef, useEffect } from "react";
import "./dropstyles.css";

const Dropdown = ({
  options,
  prompt,
  value,
  onChange,
  label1,
  id,
  label2,
  label3,
  prop1,
  prop2,
  prop3,
  disabled,
}) => {
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
    <div className="dropdown">
      <div className="control">
        <div className="selected-value">
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
            required
            className="input-drop"
          />
          <label className="selected-value-label">{prompt}</label>
        </div>
        <div className={`arrow ${open ? "open" : null}`} />
      </div>
      <div className={`options ${open ? "open" : null}`}>
        {options.length > 0 ? (
          options.map((option) =>
            option !== undefined ? (
              <div
                key={option[id]}
                className={`option ${value === option ? "selected" : null}`}
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
            ) : null
          )
        ) : (
          <div className="option">No hay opciones</div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
