import React from 'react'
import DevDropdown from './dev-dropdown-v1'

const DevDropdownV1Usage = () => {
  return (
    <DevDropdown button={<button className='p-1 px-3 bg-ACCENT text-white rounded-lg'>Open</button>}>
      <p className='p-3 px-5'>Dropdown Content</p>
    </DevDropdown>
  )
}

export default DevDropdownV1Usage

