'use client'

import { useEffect } from 'react'

const useChunkLoadErrorHandler = () => {
  useEffect(() => {
    const handleChunkLoadError = (event: ErrorEvent) => {
      const { message, filename } = event
      
      // Detectar ChunkLoadError
      if (
        message.includes('Loading chunk') ||
        message.includes('ChunkLoadError') ||
        filename?.includes('/_next/static/chunks/')
      ) {
        console.warn('Chunk load error detected, reloading page...')
        
        // Pequeño delay antes de recargar para evitar loops
        setTimeout(() => {
          window.location.reload()
        }, 100)
      }
    }

    // Manejar errores de recursos que fallan al cargar
    const handleResourceError = (event: Event) => {
      const target = event.target as HTMLElement & { src?: string; href?: string }
      const url = target?.src || target?.href
      
      if (url && url.includes('/_next/static/chunks/')) {
        console.warn('Chunk resource failed to load:', url)
        setTimeout(() => {
          window.location.reload()
        }, 100)
      }
    }

    // Manejar errores no capturados
    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      const reason = event.reason
      
      if (reason?.message?.includes('Loading chunk') || 
          reason?.name === 'ChunkLoadError') {
        console.warn('Unhandled chunk load error:', reason)
        event.preventDefault()
        setTimeout(() => {
          window.location.reload()
        }, 100)
      }
    }

    // Agregar listeners
    window.addEventListener('error', handleChunkLoadError)
    window.addEventListener('error', handleResourceError, true) // true para captura
    window.addEventListener('unhandledrejection', handleUnhandledRejection)

    // Cleanup
    return () => {
      window.removeEventListener('error', handleChunkLoadError)
      window.removeEventListener('error', handleResourceError, true)
      window.removeEventListener('unhandledrejection', handleUnhandledRejection)
    }
  }, [])
}

export default useChunkLoadErrorHandler