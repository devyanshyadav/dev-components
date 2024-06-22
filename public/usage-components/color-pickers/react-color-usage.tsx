'use client'
import React, { useState } from 'react'
import ReactColor from '../../preview-components/color-pickers/react-color';

const ReactColorUsage = () => {
    const [color, setColor] = useState({
        hex: "#F17013",
    });
    return (
        <div className="p-4 px-7 rounded-md border border-cyan-500/50">
            <p className="text-white">{color.hex || "#000000"}</p>
            <ReactColor color={color} setColor={setColor} />
        </div>
    )
}

export default ReactColorUsage