'use client'
import React from 'react'
import DevCheckboxV1 from './dev-checkbox-v1'

const DevCheckboxV1Usage = () => {
    return (
       <div className="bg-LIGHT dark:bg-DARK p-3 rounded-lg flex gap-3">
         <DevCheckboxV1 defaultState={true} onChange={(e) => console.log(e)} labelName="Dev Checkbox" />
       </div>
    )
}

export default DevCheckboxV1Usage
