'use client'
import React, { useState } from 'react'
import ReactModernDrawer from './react-modern-drawer'

const ReactModernDrawerUsage = () => {
    const [open, setOpen] = useState(false)
    return (
     <ReactModernDrawer
        open={open}
        setOpen={setOpen}
        position='right'
        openBtn={
            <button onClick={() => setOpen(true)} className="bg-cyan-400 p-2 px-3 rounded-lg text-white active:scale-95 hover:bg-cyan-700/50">
                Open Drawer
            </button>
        }
    >
        <div>
            <h2 className='font-light'>Drawer Content</h2>
        </div>
    </ReactModernDrawer>
    )
}

export default ReactModernDrawerUsage