import React, { useState } from 'react';

function Acordeon({ title, children,value,Selected,setSelected }) {
  

  const toggleAccordion = () => {
    setSelected(value);
    if(value===Selected)setSelected(false)
  };

  return (
    <div className="border rounded shadow transition duration-1000 ease-in-out" >
      <button
        onClick={toggleAccordion}
        className="w-full p-1 bg-gray-200 text-left cursor-pointer"
      >
        {title}
      </button>
      <div
        className={`transition-all overflow-hidden ${
          value===Selected ? 'h-auto opacity-100' : 'h-0 opacity-0'
        }`}
        style={{  backgroundColor: "rgba(20, 184, 166,0.1)"}}
      >
        {value===Selected && children}
      </div>
    </div>
  );
}

export default Acordeon;
