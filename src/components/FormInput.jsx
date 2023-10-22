import React from "react";

const FormInput = ({ placeholder, type }) => {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        className="p-3 px-4 border w-full outline-none"
      />
    </div>
  );
};

export default FormInput;
