import React from "react";

const FormCheckbox = ({ label, onClick, isChecked }) => {
  return (
    <div className=" p-2 space-x-3 flex items-center">
      <input type="checkbox" className="h-4 w-4" checked={isChecked} />
      <label htmlFor="">{label}</label>
    </div>
  );
};

export default FormCheckbox;
