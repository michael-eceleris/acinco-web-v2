import React, { useState, useRef, useEffect } from "react";
import "./dropstyles.css";

const Dropdown = ({ options, prompt, value, onChange, label, id }) => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const ref = useRef(null);
  useEffect(() => {
    ["click", "tocuhend"].forEach((e) => {
      document.addEventListener(e, toggle);
    });
    return () =>
      ["click", "tocuhend"].forEach((e) => {
        document.removeEventListener(e, toggle);
      });
  }, []);
  const toggle = (e) => {
    setOpen(e && e.target === ref.current);
  };

  const filter = (options) => {
    return options.filter(
      (option) => option[label].toLowerCase().indexOf(query.toLowerCase()) > -1
    );
  };
  const displayValue = () => {
    if (query.length > 0) return query;
    if (value) return value;
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
            class="input-drop"
          />
          <label className="selected-value-label">{prompt}</label>
        </div>
        <div className={`arrow ${open ? "open" : null}`} />
      </div>
      <div className={`options ${open ? "open" : null}`}>
        {filter(options).length > 0 ? (
          filter(options).map((option) => (
            <div
              key={option[id]}
              className={`option ${value === option ? "selected" : null}`}
              onClick={() => {
                selecOption(option);
              }}
              onTouchEnd={toggle}
            >
              {option[label]} - {option.departamento.nombre}
            </div>
          ))
        ) : (
          <div className="option">No hay opciones</div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
