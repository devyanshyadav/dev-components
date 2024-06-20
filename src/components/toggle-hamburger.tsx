'use client'
import Hamburger from 'hamburger-react'
import React, { useEffect, useState } from 'react'
import useDevStore from '../utils/dev-store'


const ToggleHamburger = () => {
  const [isOpen, setOpen] = useState<boolean>(true)
  const { sidebarToggle} = useDevStore((state) => state);
  useEffect(()=>{
    sidebarToggle()
  },[isOpen])


  return (
    <Hamburger toggled={isOpen} size={25} toggle={setOpen} color="#22D3EE"  />
  )
}

export default ToggleHamburger