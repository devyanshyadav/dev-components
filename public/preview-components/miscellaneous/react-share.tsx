'use client'
import React from 'react'

type ReactShareProps = {
    shareData: {
        shareWrapper: React.ComponentType<any>,
        shareIcon: React.ComponentType<any>,
    }[],
    shareUrl: string,
    size?: number,
    rounded?: boolean,
}

const ReactShare = ({ shareData, shareUrl, size = 25, rounded = true }: ReactShareProps) => {
    
  return (
    <div className='flex gap-2 mt-4 items-center'>
      {shareData && shareData.map((share, index) => (
        <share.shareWrapper url={shareUrl} key={index} >
          <share.shareIcon className="border border-cyan-500 rounded-full p-[2px] hover:scale-105 transition-all" size={size} round={rounded} />
        </share.shareWrapper>
      ))}
    </div>
  )
}

export default ReactShare
