"use client";
import React from "react";
import DevToggleV1 from "./dev-toggle-v1";

const DevToggleV1Usage = () => {
    return (
        <div className="bg-rtlLight dark:bg-rtlDark p-3 rounded-lg flex gap-3">
            <DevToggleV1 labelName="Dev Switch" defaultState={false} onChange={(e) => console.log(e)} />
        </div>
    );
};

export default DevToggleV1Usage;
