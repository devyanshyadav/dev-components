'use client'
import React, { useState } from 'react'
import DevToggle from '../../preview-components/toggles/dev-toggle'

const DevToggleUsage = () => {
    const [toggle, isToggle] = useState(true)
    return (
        <div className="border border-cyan-500/50 p-5 rounded-lg min-w-full md:min-w-40 grid place-content-center">
            <DevToggle toggle={toggle} isToggle={isToggle} />
        </div>
    )
}

export default DevToggleUsage