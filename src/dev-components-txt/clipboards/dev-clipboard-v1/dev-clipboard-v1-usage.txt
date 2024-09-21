import React from 'react'
import { IoCheckmarkDoneSharp } from 'react-icons/io5';
import { MdContentCopy } from 'react-icons/md'
import DevClipboardV1 from './dev-clipboard-v1';

const DevClipboardV1Usage = () => {
  return (
    <DevClipboardV1
      textClip={"https://dev-components.vercel.app/"}
      className="flex items-center justify-center gap-1 bg-accentNeon p-2 px-3 rounded-lg text-white active:scale-95 active:bg-accentNeon/50"
      beforeCopy={<span className='flex items-center gap-1'>
        <MdContentCopy />
        Copy</span>}
      afterCopy={<span className='flex items-center gap-1'> <IoCheckmarkDoneSharp /> Copied</span>}
    />
  )
}

export default DevClipboardV1Usage