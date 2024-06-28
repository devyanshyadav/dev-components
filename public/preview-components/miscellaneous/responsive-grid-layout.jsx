'use client'
import React, { useState } from "react";
import { WidthProvider, Responsive } from "react-grid-layout";

const BasicLayout = WidthProvider(Responsive);

const ResponsiveGridLayout = () => {
    const [layout, setLayout] = useState({
        lg: [
            { w: 1, h: 1, x: 0, y: 0, i: "1" },
            { w: 2, h: 1, x: 0, y: 3, i: "2" },
            { w: 1, h: 2, x: 3, y: 0, i: "3" },
            { w: 2, h: 2, x: 4, y: 0, i: "4" },
            { w: 1, h: 1, x: 1, y: 0, i: "5" },
            { w: 2, h: 1, x: 4, y: 2, i: "6" },
            { w: 1, h: 2, x: 2, y: 0, i: "7" },
            { w: 2, h: 1, x: 2, y: 2, i: "8" },
            { w: 2, h: 2, x: 0, y: 1, i: "9" },
            { w: 1, h: 1, x: 2, y: 3, i: "10" }
        ]
    });

    return (
        <BasicLayout
            layouts={layout}
            rowHeight={60}
            compactType={"horizontal"}
            breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
            cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
            // maxRows={5}
            onLayoutChange={(layout) => {
                setLayout({ lg: layout });
                console.log({ lg: layout })
            }}
            className="bg-slate-100 h-full w-full dark:bg-slate-900 border border-cyan-500/50 "
        >
            {
                layout.lg.map((e, i) => (
                    <div className="cursor-grab select-none active:bg-cyan-500  active:dark:bg-cyan-500 active:cursor-move bg-white dark:bg-slate-800 rounded-md border border-cyan-500/30 grid place-content-center" key={e.i} data-grid={e}>
                        {i}
                    </div>
                ))
            }

        </BasicLayout>
    );
};

export default ResponsiveGridLayout;