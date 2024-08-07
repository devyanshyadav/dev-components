'use client'
import React, { useState } from 'react'
import { IoCheckmarkDoneSharp } from 'react-icons/io5';
import { MdContentCopy } from 'react-icons/md';
import DevClipboard from './dev-clipboard';

const DevClipboardUsage = () => {
  const [copied, setCopied] = useState(false);

  return (
    <DevClipboard
      textClip={"https://dev-components.vercel.app/"}
      className="flex items-center justify-center gap-1 bg-cyan-500 p-2 px-3 rounded-lg text-white active:scale-95 active:bg-cyan-700/50"
      setCopied={setCopied} >
      {copied ? (
        <span className='flex items-center gap-1'> <IoCheckmarkDoneSharp /> Copied</span>
      ) : (
        <span className='flex items-center gap-1'>
          <MdContentCopy />
          Copy</span>
      )}
    </DevClipboard>
  )
}

export default DevClipboardUsage