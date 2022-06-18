import React from "react";

const Button = ({ name }) => {
  return (
    <button className='border border-[#cacaca] py-2 px-6 rounded hover:bg-white transition hover:shadow'>
      {name}
    </button>
  );
};

export default Button;
