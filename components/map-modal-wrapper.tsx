"use client"

import type React from "react"

import { useEffect } from "react"

interface MapModalWrapperProps {
  isOpen: boolean
  children: React.ReactNode
}

export function MapModalWrapper({ isOpen, children }: MapModalWrapperProps) {
  useEffect(() => {
    if (isOpen) {
      // Prevenir scroll del body cuando el modal está abierto
      document.body.style.overflow = "hidden"

      // Asegurar que el modal tenga el z-index más alto
      const modalElements = document.querySelectorAll('[role="dialog"]')
      modalElements.forEach((element) => {
        ;(element as HTMLElement).style.zIndex = "9999"
      })

      const overlayElements = document.querySelectorAll("[data-radix-dialog-overlay]")
      overlayElements.forEach((element) => {
        ;(element as HTMLElement).style.zIndex = "9998"
      })
    } else {
      // Restaurar scroll del body
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  return <>{children}</>
}
