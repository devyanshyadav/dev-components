'use client'
import React, { useState } from 'react'
import DevModal from '../../preview-components/modals/dev-modal'

const DevModalUsage = () => {
    const [open, isOpen] = useState(false)
    return (
        <DevModal
            open={open}
            isOpen={isOpen}
            modalTitle="Modal Title"
            openBtn={
                <button className="bg-cyan-500 p-2 px-3 rounded-lg active:scale-95 text-white hover:bg-cyan-500/80">
                    Open Modal
                </button>
            }
        >
            <div className="font-semibold text-lg"> 
                Modal Content
            </div>
        </DevModal>
    )
}

export default DevModalUsage