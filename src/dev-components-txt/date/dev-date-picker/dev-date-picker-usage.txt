'use client'
import React from "react";
import DevDatePicker from "./dev-date-picker";

const DevDatePickerUsage = () => {
  return (
    <DevDatePicker
      initialDate={new Date()}
      onChange={(date) => console.log(date)}
    />
  );
};

export default DevDatePickerUsage;
