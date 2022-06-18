import React from "react";

const Button = ({ name, onClick }) => {
  return (
    <button
      onClick={onClick}
      className='border border-[#cacaca] py-2 bg-[#fafafa] px-6 rounded hover:bg-white transition hover:shadow'
    >
      {name}
    </button>
  );
};

export default Button;
