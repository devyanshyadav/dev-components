import React from "react";
import * as Checkbox from "@radix-ui/react-checkbox";

const DevCheckboxV1 = ({
  defaultState = true,
  onChange,
  labelName,
  required = false,
}) => {
  return (
    <>
      <Checkbox.Root
        required={required}
        onCheckedChange={(checked) => onChange?.(Boolean(checked))}
        defaultChecked={defaultState}
        id={labelName || "dev-checkbox"}
        className="border-2 relative border-ACCENT text-white w-6 h-6 grid place-content-center rounded-md cursor-pointer bg-ACCENT/25 data-[state=checked]:bg-ACCENT"
      >
        <Checkbox.Indicator>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeDasharray={24}
              strokeDashoffset={24}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.9}
              d="M5 11L11 17L21 7"
            >
              <animate
                fill="freeze"
                attributeName="stroke-dashoffset"
                dur="0.3s"
                values="24;0"
              ></animate>
            </path>
          </svg>
        </Checkbox.Indicator>
      </Checkbox.Root>
      {labelName && (
        <label htmlFor={labelName || "dev-checkbox"}>{labelName}</label>
      )}
    </>
  );
};

export default DevCheckboxV1;
