'use client'
import React from 'react'
import DevColorPickerV1 from './dev-color-picker-v1'

const DevColorPickerV1Usage = () => {
    return (
        <div className="p-5 rounded-md bg-rtlLight dark:bg-rtlDark">
            <DevColorPickerV1 defaultColor='#E26F1D' onChange={(e) => console.log(e)} />
        </div>
    )
}

export default DevColorPickerV1Usage
