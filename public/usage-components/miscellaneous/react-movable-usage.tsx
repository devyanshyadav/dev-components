'use client'
import React, { useState } from 'react'
import ReactMovable from '../../preview-components/miscellaneous/react-movable';

const ReactMovableUsage = () => {
    const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3', 'Item4']);
    return (
        <section className="flex flex-col gap-2 items-center">
            <div className='text-xs space-x-1 m-2'>
                <span>Updated Array:</span>
                {
                    items.map((e, i) => (
                        <span className='bg-cyan-500/30 text-nowrap p-1 px-2 rounded-full' key={i}>{e}</span>
                    ))
                }</div>
            <div className='w-60 h-auto px-2 rounded-md border border-cyan-500/50 bg-slate-100 dark:bg-slate-900'>

                <ReactMovable items={items} setItems={setItems} />
            </div>
        </section>
    )
}

export default ReactMovableUsage

