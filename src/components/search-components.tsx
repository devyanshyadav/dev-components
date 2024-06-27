"use client";
import React, { useEffect, useState } from "react";
import { LuSearch } from "react-icons/lu";
import Link from "next/link";
import Image from "next/image";
import { IoCloseCircleOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { createPortal } from "react-dom";
import DevLaserInput from "./dev-laser-input";
import CmpUrl from "@/utils/cmp-url";
import ComponentDataArray from "../../public/component-data-array";

type searchData = {
  name: string;
  image: string;
  // componentsNo: number;
  description: string;
};

const SearchComponents = () => {
  const [searchData, setSearchData] = useState<searchData[]>([]);
  const [mount, setMount] = useState(false);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const searchValue = e.target.value;
    const searchResult = ComponentDataArray.filter((item) =>
      CmpUrl(item.name).includes(CmpUrl(searchValue))
    );
    setSearchData(searchResult);
  };
  useEffect(() => {
    setMount(true);
  }, []);

  return (
    <>
      <section className="relative z-50 space-y-1">
        <DevLaserInput
          icon={<LuSearch className="text-accent text-xl" />}
          type="text"
          rounded="full"
          scale="md"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            handleSearch(e);
            !e.target.value && setSearchData([]);
          }}
          placeholder="Search"
        />

        {searchData.length > 0 && (
          <motion.ul
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="w-full max-h-60 bg-light-primary dark:bg-dark-primary border border-accent/50 absolute top-10 rounded-xl p-2 overflow-y-scroll [&::-webkit-scrollbar]:hidden [&::-webkit-scrollbar-track]:hidden space-y-2 [&::-webkit-scrollbar-thumb]"
          >
            {searchData.length > 0 &&
              searchData.map((e, i) => (
                <motion.li
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  key={i}
                  className="w-full hover:bg-light-secondary hover:dark:bg-dark-secondary flex items-center p-2 min-h-10 gap-3 bg-secondary/20 rounded-lg"
                >
                  <Image
                    src={`/assets/cmp-icons/${e.image}`}
                    alt="logo"
                    className="w-10"
                    width={60}
                    height={60}
                  />
                  <Link
                    className="text-left w-full"
                    target="_blank"
                    onClick={() => setSearchData([])}
                    href={`/components/${CmpUrl(e.name)}`}
                  >
                    {e.name}
                  </Link>
                </motion.li>
              ))}
          </motion.ul>
        )}
      </section>
      {searchData.length > 0 &&
        mount &&
        createPortal(
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50"
            onClick={() => setSearchData([])}
          >
            <IoCloseCircleOutline
              onClick={() => setSearchData([])}
              className="absolute top-3 right-3 text-accent text-3xl cursor-pointer hover:opacity-80"
            />
          </motion.main>,
          document.body
        )}
    </>
  );
};

export default SearchComponents;
