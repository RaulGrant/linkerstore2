"use client"

import Image from "next/image"
import { LoginForm } from "@/components/auth/LoginForm"

export default function LoginPage() {
  return (
    <div className="container relative h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col bg-muted lg:flex overflow-hidden">
        {/* Fondo con imagen y overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/login-bg.jpg"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-primary/50 mix-blend-overlay" />
        </div>

        {/* Contenido sobre la imagen */}
        <div className="relative z-20 flex flex-col h-full p-10">
          <div className="flex items-center text-lg font-medium text-white">
            <Image 
              src="/placeholder-logo.svg"
              alt="LinkerPro"
              width={32}
              height={32}
              className="mr-2"
            />
            LinkerPro
          </div>

          <div className="flex flex-col justify-center flex-1 text-white">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tight">
                Conecta con los mejores talentos
              </h1>
              <p className="text-lg text-white/90">
                Únete a la comunidad de profesionales y empresas líderes en tecnología
              </p>
            </div>
          </div>

          <div className="relative">
            <blockquote className="space-y-2">
              <div className="flex items-center space-x-4">
                <div className="relative h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src="/images/testimonial-avatar.jpg"
                    alt="Sofia Martínez"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-lg font-medium text-white/80">
                    "LinkerPro me ha permitido encontrar los mejores proyectos y conectar con empresas increíbles."
                  </p>
                  <footer className="mt-2">
                    <p className="font-semibold text-white/80">Sofia Martínez</p>
                    <p className="text-sm text-white/80">Desarrolladora Web Senior</p>
                  </footer>
                </div>
              </div>
            </blockquote>
          </div>
        </div>
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <LoginForm />
        </div>
      </div>
    </div>
  )
}
