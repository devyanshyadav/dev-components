'use client'
import React, { useState } from 'react'
import ThemeToggle from '../../preview-components/toggles/theme-toggle'

const ThemeToggleUsage = () => {
    const [toggle, isToggle] = useState(true)
    return (
        <div className="border border-cyan-500/50 p-5 rounded-lg min-w-full md:min-w-40 grid place-content-center">
            <ThemeToggle toggle={toggle} isToggle={isToggle} />
        </div>
    )
}

export default ThemeToggleUsage