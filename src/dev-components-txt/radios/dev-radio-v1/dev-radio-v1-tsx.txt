import React from "react";
import * as RadioGroup from '@radix-ui/react-radio-group';

type RadioProps = {
  options: { value: string; label: string }[];
  onChange: (value: any) => void;
  defaultValue?: { value: string; label: string };
};

const DevRadioV1 = ({ options, onChange, defaultValue }: RadioProps) => {
  return (
    <RadioGroup.Root
      className="flex gap-2 flex-col"
      defaultValue={defaultValue?.value || options[0].value}
      onValueChange={(e) => onChange(e)}
    >
      {
        options.map((option,index) => (
          <div key={index} className="flex items-center gap-2">
            <RadioGroup.Item
              onChange={(e) => onChange(e)}
              className="rounded-full border-2 border-ACCENT focus:outline-0 cursor-pointer w-5 text-ACCENT h-5"
              value={option.value}
              id={option.value}
              key={option.value}
            >
              <RadioGroup.Indicator
                className="flex items-center justify-center w-full h-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    fillOpacity={0}
                    stroke="currentColor"
                    strokeDasharray={60}
                    strokeDashoffset={60}
                    strokeLinecap="round"
                    strokeWidth={2.8}
                    d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"
                  >
                    <animate
                      fill="freeze"
                      attributeName="stroke-dashoffset"
                      dur="0.2s"
                      values="60;0"
                    ></animate>
                    <animate
                      fill="freeze"
                      attributeName="fill-opacity"
                      begin="0.2s"
                      dur="0.15s"
                      values="0;1"
                    ></animate>
                  </path>
                </svg>
              </RadioGroup.Indicator>

            </RadioGroup.Item>
            <label htmlFor={option.value}>
              {option.label}
            </label>
          </div>
        ))
      }
    </RadioGroup.Root>
  );
};

export default DevRadioV1;