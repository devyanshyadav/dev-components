'use client'
import React, { useState } from 'react'
import ReactColorful from './react-colorful';

const ReactColorfulUsage = () => {
    const [hexColor, setHexColor] = useState("#2ed0d7");

    return (
        <div className="p-4 px-7 rounded-md border border-cyan-500/50">
            <p>{hexColor}</p>
            <ReactColorful color={hexColor} setColor={setHexColor} />
        </div>
    )
}

export default ReactColorfulUsage