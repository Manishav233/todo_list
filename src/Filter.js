import React, { useState } from "react";
//code to get all 3 fields i.e, all,active and completed
export default function Filter({ onFilterChange }) {
  const filters = ["all", "active", "completed"];
  const clickHandler = (currentValue) => {
    onFilterChange(currentValue);
  }
  return (
    <ul className="nav nav-pills todo-nav">
      {filters.map(item => {
        return (<li
          key={item}
          role="presentation"
          className="nav-item all-task active"
          onClick={() => clickHandler(item)}
        >
          <a className="nav-link" style={{cursor: 'pointer', textTransform: 'capitalize'}}>
            {item}
          </a>
        </li>)
      })}
    </ul>
  );
}