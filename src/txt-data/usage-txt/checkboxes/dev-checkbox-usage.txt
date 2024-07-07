'use client'
import React, { useState } from 'react'
import DevCheckbox from '../../react-components/checkboxes/dev-checkbox'

const DevCheckboxUsage = () => {
    const [checked, isChecked] = useState(true)

    return (
        <DevCheckbox checked={checked} isChecked={isChecked} />
    )
}

export default DevCheckboxUsage