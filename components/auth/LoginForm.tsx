"use client"

import * as z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { createClient } from "@/lib/supabase-browser"
import { Mail, Lock, LogIn, ArrowRight, Home } from "lucide-react"
import { Separator } from "@/components/ui/separator"

const formSchema = z.object({
  email: z.string().email({
    message: "Por favor ingresa un email válido.",
  }),
  password: z.string().min(6, {
    message: "La contraseña debe tener al menos 6 caracteres.",
  }),
})

export function LoginForm() {
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isRedirecting, setIsRedirecting] = useState(false)
  const router = useRouter()
  const supabase = createClient() // Use the same client as in the test

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsLoading(true)
      setError("")

      console.log("🔑 Attempting login for:", values.email)

      // Use Supabase client directly for better session handling
      const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
        email: values.email,
        password: values.password,
      })

      if (authError) {
        console.error("❌ Login error:", authError)
        
        // Handle specific auth errors with user-friendly messages
        let errorMessage = authError.message
        if (authError.message.includes('Invalid login credentials')) {
          errorMessage = 'Email o contraseña incorrectos. Por favor verifica tus credenciales.'
        } else if (authError.message.includes('Email not confirmed')) {
          errorMessage = 'Por favor confirma tu email antes de iniciar sesión. Revisa tu bandeja de entrada.'
        } else if (authError.message.includes('Too many requests')) {
          errorMessage = 'Demasiados intentos. Por favor espera unos minutos antes de intentar de nuevo.'
        } else if (authError.message.includes('Signup not allowed')) {
          errorMessage = 'El registro no está permitido. Contacta al administrador.'
        }
        
        throw new Error(errorMessage)
      }

      if (!authData.user || !authData.session) {
        console.error("❌ No user or session returned")
        throw new Error('No se pudo crear la sesión. Inténtalo de nuevo.')
      }

      console.log("✅ Login successful:", {
        userId: authData.user.id,
        email: authData.user.email,
        emailConfirmed: authData.user.email_confirmed_at,
        sessionExpiry: authData.session.expires_at
      })
      
      // HYBRID SOLUTION: Save token in localStorage for middleware (same as test)
      console.log("💾 Saving token in localStorage for middleware")
      localStorage.setItem('sb-access-token', authData.session.access_token)
      localStorage.setItem('sb-refresh-token', authData.session.refresh_token)
      localStorage.setItem('sb-user-id', authData.user.id)
      localStorage.setItem('sb-token-expiry', authData.session.expires_at?.toString() || '')
      
      console.log("✅ Session saved to localStorage")
      
      setIsRedirecting(true)
      
      // Get redirectTo parameter from URL
      const urlParams = new URLSearchParams(window.location.search)
      const redirectTo = urlParams.get('redirectTo') || '/dashboard'
      
      console.log("🔄 Redirecting to:", redirectTo)
      
      // Use the same navigation logic as the successful test
      const token = authData.session.access_token
      const redirectUrl = `${redirectTo}?token=${token}`
      
      console.log("🔄 Final redirect URL:", redirectUrl)
      
      // Small delay to ensure everything is saved, then redirect
      setTimeout(() => {
        window.location.href = redirectUrl
      }, 500)

    } catch (error) {
      console.error("❌ Login error:", error)
      const errorMessage = error instanceof Error ? error.message : "Error desconocido al iniciar sesión"
      setError(errorMessage)
    } finally {
      setIsLoading(false)
      setIsRedirecting(false)
    }
  }
  return (
    <div className="w-full max-w-md space-y-8">
      {/* Botón para regresar a la landing page */}
      <div className="flex justify-center">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => router.push("/")}
          className="text-muted-foreground hover:text-primary"
        >
          <Home className="h-4 w-4 mr-2" />
          Volver al inicio
        </Button>
      </div>

      <div className="space-y-4 text-center">
        <div className="flex justify-center">
          <div className="bg-primary/10 p-3 rounded-full">
            <LogIn className="h-8 w-8 text-primary" />
          </div>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-primary">
          ¡Bienvenido de nuevo!
        </h1>
        <p className="text-base text-muted-foreground">
          Ingresa tus credenciales para acceder a tu cuenta
        </p>
      </div>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base">Email</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Mail className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                    <Input 
                      placeholder="nombre@ejemplo.com" 
                      className="pl-10" 
                      {...field} 
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base">Contraseña</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Lock className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                    <Input 
                      type="password" 
                      placeholder="••••••••" 
                      className="pl-10"
                      {...field} 
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <Button 
            type="submit" 
            className="w-full h-11 text-base" 
            disabled={isLoading || isRedirecting}
          >
            {isRedirecting ? (
              "Redirigiendo..."
            ) : isLoading ? (
              "Iniciando sesión..."
            ) : (
              <>
                Iniciar sesión
                <ArrowRight className="ml-2 h-5 w-5" />
              </>
            )}
          </Button>
        </form>
      </Form>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <Separator className="w-full" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            ¿No tienes una cuenta?
          </span>
        </div>
      </div>
      
      <div className="text-center">
        <Button
          variant="outline"
          className="w-full h-11 text-base"
          onClick={() => router.push("/register")}
        >
          Crear una cuenta
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}
