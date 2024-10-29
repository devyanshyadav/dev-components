'use client'
import React, { useState } from 'react'
import DevPaginationV2 from './dev-pagination-v2'

const DevPaginationV2Usage = () => {
  const [initialPage, setInitialPage] = useState(1)
  return (
    <DevPaginationV2 initialPage={initialPage} totalPages={20} onPageChange={setInitialPage} />
  )
}

export default DevPaginationV2Usage

