'use client'
import React from 'react'
import DevPaginationV2 from './dev-pagination-v2'

const DevPaginationV2Usage = () => {
  return (
    <DevPaginationV2 totalPages={20} onPageChange={(page) => console.log(`Page changed to ${page}`)} />
  )
}

export default DevPaginationV2Usage

