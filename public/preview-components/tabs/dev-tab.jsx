"use client";
import React, { useState } from "react";
import clsx from "clsx";

const DevTab = ({ tabData }) => {
    const [currTab, setCurrTab] = useState(0);
    return (
        <main className="text-black dark:text-white w-full flex flex-col gap-1">
            <ul
                className="list-none w-full bg-slate-100 border border-cyan-500/50 dark:bg-slate-900 grid rounded-md overflow-hidden"
                style={{
                    gridTemplateColumns: "repeat(" + tabData.length + ", 1fr)",
                }}
            >
                {tabData.map((elem, i) => (
                    <li
                        onClick={() => setCurrTab(i)}
                        className={clsx(
                            "p-1 px-4 select-none text-nowrap text-center transition-all border-b-2 border-transparent hover:text-cyan-500 hover:border-cyan-500 cursor-pointer text-sm ",
                            currTab === i && "!text-cyan-500 !border-cyan-500 bg-cyan-500/20"
                        )}
                        key={i}
                    >
                        {elem.title}
                    </li>
                ))}
            </ul>
            <section className="bg-slate-100 border w-full border-cyan-500/50 dark:bg-slate-900 min-h-40 rounded-md grid place-content-center">
                {tabData[currTab].element}
            </section>
        </main>
    );
};

export default DevTab;
