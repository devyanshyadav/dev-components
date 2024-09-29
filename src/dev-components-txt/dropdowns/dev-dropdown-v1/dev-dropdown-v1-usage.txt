import React from 'react'
import DevDropdown from './dev-dropdown-v1'

const DevDropdownV1Usage = () => {
  return (
    <DevDropdown button={<button className='p-1 px-3 bg-accentNeon text-white rounded-lg'>Open</button>}>
      <p>Dropdown Content</p>
    </DevDropdown>
  )
}

export default DevDropdownV1Usage

