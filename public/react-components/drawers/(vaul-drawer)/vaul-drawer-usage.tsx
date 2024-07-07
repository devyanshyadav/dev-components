import React from 'react'
import VaulDrawer from './vaul-drawer'

const VaulDrawerUsage = () => {
  return (
    <section className='flex items-center justify-center gap-3 p-5 border border-cyan-500/50 rounded-xl'>
      <VaulDrawer
      openBtn={
        <button className="bg-cyan-400 p-2 px-3 rounded-lg text-white active:scale-95 hover:bg-cyan-700/50">
          Open Bottom
        </button>
      }
      position='bottom'
    >
      <div className='text-center'>
        <h2>Drawer Content</h2>
      </div>
    </VaulDrawer>

    <VaulDrawer
      openBtn={
        <button className="bg-cyan-400 p-2 px-3 rounded-lg text-white active:scale-95 hover:bg-cyan-700/50">
          Open Right
        </button>
      }
      position='right'
    >
      <div className='text-center'>
        <h2>Drawer Content</h2>
      </div>
    </VaulDrawer>

    <VaulDrawer
      openBtn={
        <button className="bg-cyan-400 p-2 px-3 rounded-lg text-white active:scale-95 hover:bg-cyan-700/50">
          Open Left
        </button>
      }
      position='left'
    >
      <div className='text-center'>
        <h2>Drawer Content</h2>
      </div>
    </VaulDrawer>

    <VaulDrawer
      openBtn={
        <button className="bg-cyan-400 p-2 px-3 rounded-lg text-white active:scale-95 hover:bg-cyan-700/50">
          Open Top
        </button>
      }
      position='top'
    >
      <div className='text-center'>
        <h2>Drawer Content</h2>
      </div>
    </VaulDrawer>
    </section>
  )
}

export default VaulDrawerUsage
