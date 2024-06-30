'use client'
import React, { useState} from 'react'
import ReactShare from '../../preview-components/miscellaneous/react-share'
import { WhatsappShareButton, TwitterShareButton, LinkedinShareButton, WhatsappIcon, XIcon, LinkedinIcon } from "react-share";
import DevInput from '../../preview-components/inputs/dev-input';
import DevClipboard from '../../preview-components/clipboards/dev-clipboard';

const ReactShareUsage = () => {
    const [url, setUrl] = useState('https://dev-components.vercel.app/')
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
        }
    ]
  return (
      <section className='max-w-[400px] w-full  p-4 rounded-md border border-cyan-500/50 bg-slate-100 dark:bg-slate-900'>
        <h1 className='opacity-85'>Share the component</h1>
        <div className='mt-3 flex items-center gap-1 w-full'>
        <DevInput
            type="text"
            rounded="md"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className='px-0 py-2 w-full md:w-[270px]'
            placeholder="Copy link"
          />
          <DevClipboard text={url}  />
        </div>
          <ReactShare shareData={shareConfig} size={37} shareUrl={url} />
      </section>
  )
}

export default ReactShareUsage