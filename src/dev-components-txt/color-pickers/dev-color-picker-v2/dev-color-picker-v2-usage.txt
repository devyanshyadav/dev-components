'use client'
import React from 'react'
import DevColorPickerV2 from './dev-color-picker-v2';

const DevColorPickerV2Usage = () => {
    return (
        <div className="p-5 rounded-md bg-rtlLight dark:bg-rtlDark">
            <DevColorPickerV2 defaultColor={{ hex: "#E26F1D" }} onChange={(e) => console.log(e)} />
        </div>
    )
}

export default DevColorPickerV2Usage

