'use client'

import React from 'react'
import ErrorBoundary from './ErrorBoundary'
import useChunkLoadErrorHandler from '@/hooks/useChunkLoadErrorHandler'

interface ChunkErrorProviderProps {
  children: React.ReactNode
}

function ChunkErrorHandler() {
  useChunkLoadErrorHandler()
  return null
}

export default function ChunkErrorProvider({ children }: ChunkErrorProviderProps) {
  return (
    <ErrorBoundary>
      <ChunkErrorHandler />
      {children}
    </ErrorBoundary>
  )
}