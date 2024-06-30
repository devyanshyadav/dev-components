'use client'
import React, { useState } from 'react'
import {
  WhatsappShareButton, TwitterShareButton, LinkedinShareButton,
  FacebookShareButton, EmailShareButton, TelegramShareButton, RedditShareButton,
  WhatsappIcon, XIcon, LinkedinIcon, FacebookIcon, EmailIcon, TelegramIcon, RedditIcon
} from "react-share";
import DevClipboard from '../../preview-components/clipboards/dev-clipboard';

const ReactShare = ({ shareUrl, size = 25, setUrl, isRounded = true }) => {
  const [copy, setCopy] = useState(false) //for Clipboard
  const shareConfig = [
    {
      shareWrapper: WhatsappShareButton,
      shareIcon: WhatsappIcon,
    },
    {
      shareWrapper: TwitterShareButton,
      shareIcon: XIcon,
    },
    {
      shareWrapper: LinkedinShareButton,
      shareIcon: LinkedinIcon,
    },
    {
      shareWrapper: FacebookShareButton,
      shareIcon: FacebookIcon,
    },
    {
      shareWrapper: TelegramShareButton,
      shareIcon: TelegramIcon,
    },
    {
      shareWrapper: RedditShareButton,
      shareIcon: RedditIcon,
    },
    {
      shareWrapper: EmailShareButton,
      shareIcon: EmailIcon,
    }
  ]

  return (
    <div className='w-full max-w-sm bg-slate-50 p-3 dark:bg-slate-900 border border-cyan-500/50 rounded-xl'>
      <span className='flex items-center gap-1 p-1 rounded-full border border-cyan-500/50'>
        <input
          type="text"
          value={shareUrl}
          onChange={(e) => setUrl(e.target.value)}
          className='p-1 px-2 outline-none border-none bg-transparent flex-1'
          placeholder="Copy link"
        />
        <DevClipboard setCopied={setCopy} className='bg-cyan-500 text-white rounded-full p-1 px-3 active:opacity-80' textClip={shareUrl}>
          {copy ? "Copied" : "Copy url"}
        </DevClipboard>
      </span>
      <div role="icon-group" className='flex flex-wrap gap-2 mt-2'>
        {shareConfig && shareConfig.map((share, index) => (
          <share.shareWrapper url={shareUrl} key={index} >
            <share.shareIcon className="border border-cyan-500/50 hover:border-cyan-500 rounded-full p-[2px] hover:scale-105 transition-all" size={size} round={isRounded} />
          </share.shareWrapper>
        ))}
      </div>
    </div>
  )
}

export default ReactShare