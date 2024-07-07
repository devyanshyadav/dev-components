
'use client'
import React from 'react'
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels'

const ReactResizablePanels = () => {
    return (
        <PanelGroup direction="horizontal" className='w-full transition-all h-full bg-slate-50 dark:bg-slate-900'>
            <Panel defaultSize={30} minSize={10} className='grid place-items-center'>
                left
            </Panel>

            <PanelResizeHandle className='w-1 h-full bg-cyan-500/50 active:bg-cyan-500' />
            <Panel defaultSize={30} minSize={10}>
                <PanelGroup direction="vertical" className='w-[90vw]'>

                    <Panel defaultSize={30} minSize={10} className='grid place-items-center'>
                        top
                    </Panel>
                    <PanelResizeHandle className='w-full h-1 bg-cyan-500/50 active:bg-cyan-500' />
                    <Panel defaultSize={30} minSize={10} className='grid place-items-center'>
                        bottom
                    </Panel>
                </PanelGroup>
            </Panel>
        </PanelGroup>
    )
}

export default ReactResizablePanels