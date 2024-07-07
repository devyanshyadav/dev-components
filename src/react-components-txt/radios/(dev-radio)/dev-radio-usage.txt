"use client";
import React, { useState } from "react";
import DevRadio from "./dev-radio";

const DevRadioUsage = () => {
  const [radioValue, setRadioValue] = useState("Male");

  return (
    <div>
      <DevRadio
        radioValue={radioValue}
        setRadioValue={setRadioValue}
        radioOptions={["Male", "Female", "Other"]}
      />
    </div>
  );
};

export default DevRadioUsage;
