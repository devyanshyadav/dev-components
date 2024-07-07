'use client'
import React, { useState } from 'react'
import ReactShare from '../../react-components/miscellaneous/react-share'


const ReactShareUsage = () => {
    const [url, setUrl] = useState('https://dev-components.vercel.app/')

    return (
        <div>
            <h2 className='ml-1 font-semibold'>Share the component</h2>
            <ReactShare size={37} shareUrl={url} setUrl={setUrl} />
        </div>
    )
}

export default ReactShareUsage