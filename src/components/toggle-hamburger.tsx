"use client";
import Hamburger from "hamburger-react";
import React, { useEffect, useState } from "react";
import useDevStore from "../utils/dev-store";
import { useParams } from "next/navigation";

const ToggleHamburger = () => {
  const [isOpen, setOpen] = useState<boolean>(true);
  const { sidebarToggle } = useDevStore((state) => state);
  const params = useParams();
  // useEffect(()=>{
  //   sidebarToggle()
  // },[isOpen])

  return (
    params.cmp && (
      <Hamburger
        onToggle={() => sidebarToggle()}
        toggled={isOpen}
        size={25}
        toggle={setOpen}
        color="#22D3EE"
      />
    )
  );
};

export default ToggleHamburger;
