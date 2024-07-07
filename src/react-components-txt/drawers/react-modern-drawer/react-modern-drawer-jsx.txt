'use client'
import React from 'react'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'

const ReactModernDrawer = ({children, position = 'right', openBtn, open, setOpen}) => {
    return (
        <>
           {openBtn}
            <Drawer
                open={open}
                onClose={() => setOpen(false)}
                direction={position}
                style={{ padding: 0, backgroundColor: 'transparent' }}
                className={` bg-slate-50 p-3 dark:bg-slate-800 border-cyan-500/50 overflow-auto`}
            >
                <div className='w-full h-full bg-slate-50 p-3 dark:bg-slate-800'>
                    <h2 className="sticky top-0 border-b border-cyan-500/50 py-2 text-xl font-semibold">
                        Drawer
                    </h2>
                    <button
                        className="absolute top-2 right-2 text-xl text-cyan-500/50 hover:text-cyan-500"
                        onClick={() => setOpen(false)}
                        aria-label="Close drawer"
                    >
                        🗙
                    </button>
                    {children}
                </div>
            </Drawer>
        </>
    )
}

export default ReactModernDrawer