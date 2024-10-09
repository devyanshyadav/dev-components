"use client";
import React, { useState } from "react";

const DevToggleV1 = ({ defaultState = true, onChange, labelName }) => {
    const [toggle, setToggle] = useState(defaultState);
    const toggleSize = {
        width: 3,
        height: 1.5,
    };

    const handleChange = (e) => {
        const newState = e.target.checked;
        setToggle(newState);
        onChange?.(newState);
    };

    return (
        <>
            <div
                style={{
                    width: `${toggleSize.width}rem`,
                    height: `${toggleSize.height}rem`,
                }}
                className={`
          "p-1 rounded-full relative grid ",
         ${toggle ? "bg-ACCENT" : "bg-ACCENT/50"}
        `}
            >
                <input
                    type="checkbox"
                    defaultChecked={defaultState}
                    className="opacity-0 absolute cursor-pointer inset-0"
                    id={labelName || "toggleBox"}
                    checked={toggle}
                    onChange={handleChange}
                />
                <span
                    className="h-full absolute dark:bg-LIGHT bg-DARK aspect-square pointer-events-none transition-all duration-400 rounded-full"
                    style={{
                        transform: toggle
                            ? `translateX(${toggleSize.width - toggleSize.height}rem) scale(0.7)`
                            : "scale(0.7)",
                    }}
                />
            </div>
            {labelName && <label htmlFor={labelName || "toggleBox"}>{labelName}</label>}
        </>
    );
};

export default DevToggleV1;
