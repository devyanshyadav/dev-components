"use client";
import React, { useState } from "react";
import {
  WhatsappShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  FacebookShareButton,
  EmailShareButton,
  TelegramShareButton,
  RedditShareButton,
  WhatsappIcon,
  XIcon,
  LinkedinIcon,
  FacebookIcon,
  EmailIcon,
  TelegramIcon,
  RedditIcon,
} from "react-share";
import DevClipboardV1 from "../../clipboards/(dev-clipboard-v1)/dev-clipboard-v1";
const ReactShare = ({
  size = 25,
  defaultUrl = "https://dev-components.vercel.app/",
  isRounded = true,
  onChange,
}) => {
  const [url, setUrl] = useState(defaultUrl);

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
    },
  ];

  return (
    <div className="w-full md:max-w-sm bg-rtlLight p-3 dark:bg-rtlDark border border-accentNeon/50 rounded-xl">
      <span className="flex items-center gap-1 p-1 rounded-full border border-accentNeon/50">
        <input
          type="text"
          value={url}
          onChange={(e) => {
            setUrl(e.target.value);
            onChange?.(e.target.value);
          }}
          className="p-0.5 px-2 outline-none border-none bg-transparent flex-1"
          placeholder="Copy link"
        />
        <DevClipboardV1
          textClip={url}
          className="flex items-center justify-center gap-1 bg-accentNeon p-0.5 px-3 rounded-full text-white active:scale-95 active:bg-accentNeon/50"
          beforeCopy={<p>Copy</p>}
          afterCopy={<p>Copied</p>}
        />
      </span>
      <div role="icon-group" className="flex flex-wrap gap-2 mt-2">
        {shareConfig &&
          shareConfig.map((share, index) => (
            <share.shareWrapper url={url} key={index}>
              <share.shareIcon
                className="border border-accentNeon/50 hover:border-accentNeon rounded-full p-[2px] hover:scale-105 transition-all"
                size={size}
                round={isRounded}
              />
            </share.shareWrapper>
          ))}
      </div>
    </div>
  );
};

export default ReactShare;
