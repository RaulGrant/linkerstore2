"use client"

import * as z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { UserPlus, Mail, Lock, User, Building2, Briefcase, ArrowRight, ArrowLeft, Home } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import type { Database } from "@/types/supabase"
import { useRegister } from "@/hooks/useRegister"
import { getCallbackUrl } from "@/lib/utils/urls"

const formSchema = z.object({
  email: z.string().email({
    message: "Por favor ingresa un email válido.",
  }),
  password: z.string().min(6, {
    message: "La contraseña debe tener al menos 6 caracteres.",
  }),
  confirmPassword: z.string(),
  userType: z.enum(["freelancer", "company"], {
    required_error: "Por favor selecciona un tipo de usuario.",
  }),
  fullName: z.string().min(2, {
    message: "El nombre debe tener al menos 2 caracteres.",
  }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Las contraseñas no coinciden",
  path: ["confirmPassword"],
})

export function RegisterForm() {
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [canResend, setCanResend] = useState(true)
  const [resendCountdown, setResendCountdown] = useState(0)
  const router = useRouter()
  const supabase = createClientComponentClient<Database>()

  // Countdown para el reenvío
  useEffect(() => {
    if (resendCountdown > 0) {
      const timer = setTimeout(() => {
        setResendCountdown(resendCountdown - 1)
      }, 1000)
      return () => clearTimeout(timer)
    } else if (resendCountdown === 0 && !canResend) {
      setCanResend(true)
    }
  }, [resendCountdown, canResend])

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      userType: "freelancer",
      fullName: "",
    },
  })

  const resendEmail = async (email: string) => {
    if (!canResend) return
    
    try {
      setIsLoading(true)
      setError("")
      
      const callbackUrl = `${window.location.origin}/auth/callback`
      
      const { error } = await supabase.auth.resend({
        type: 'signup',
        email: email,
        options: {
          emailRedirectTo: callbackUrl
        }
      })
      
      if (error) {
        throw error
      }
      
      // Iniciar countdown de 60 segundos
      setCanResend(false)
      setResendCountdown(60)
      
      setError("Email de confirmación reenviado exitosamente. Revisa tu bandeja de entrada.")
      
    } catch (error: any) {
      console.error("Error reenviando email:", error)
      if (error?.message?.includes("For security purposes")) {
        setError("Debes esperar 60 segundos antes de reenviar el email.")
      } else {
        setError(error?.message || "Error reenviando email")
      }
    } finally {
      setIsLoading(false)
    }
  }

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsLoading(true)
      setError("")

      console.log("Iniciando registro para:", values.email)

      const callbackUrl = getCallbackUrl()
      console.log("URL de callback:", callbackUrl)

      // 1. Registrar el usuario en Supabase Auth
      const { data: authData, error: signUpError } = await supabase.auth.signUp({
        email: values.email,
        password: values.password,
        options: {
          data: {
            full_name: values.fullName,
            user_type: values.userType,
          },
          emailRedirectTo: callbackUrl
        }
      })

      if (signUpError) {
        console.error("Error en el registro:", signUpError)
        console.error("Error code:", signUpError.code)
        console.error("Error message:", signUpError.message)
        
        // Manejar errores específicos de Supabase
        if (signUpError.message.includes('User already registered')) {
          throw new Error("Este email ya está registrado. Por favor, inicia sesión.")
        } else if (signUpError.message.includes('Database error saving new user')) {
          throw new Error("Error de configuración en el servidor. Esto puede ocurrir cuando las políticas de seguridad de la base de datos necesitan configuración.")
        } else if (signUpError.message.includes('Invalid email')) {
          throw new Error("El formato del email no es válido.")
        } else if (signUpError.message.includes('Password')) {
          throw new Error("La contraseña debe tener al menos 6 caracteres.")
        } else if (signUpError.message.includes('Email not confirmed')) {
          throw new Error("Email no confirmado. Por favor, verifica tu email.")
        } else if (signUpError.message.includes('Too many requests')) {
          throw new Error("Demasiados intentos. Por favor, espera unos minutos antes de intentar de nuevo.")
        } else {
          throw new Error(`Error de registro: ${signUpError.message}`)
        }
      }

      console.log("Respuesta de registro:", authData)

      if (!authData.user) {
        throw new Error("No se pudo crear el usuario")
      }

      // 2. El usuario fue creado exitosamente
      // Supabase automáticamente envía el email de confirmación durante signUp
      // NO necesitamos reenviarlo manualmente aquí
      console.log("Usuario creado exitosamente. Email de confirmación enviado automáticamente.")

      // 3. Redirigir a la página de confirmación
      console.log("Redirigiendo a check-email...")
      router.push("/register/check-email")

    } catch (error: any) {
      console.error("Error de registro:", error)
      
      // Manejo específico de errores comunes
      let errorMessage = "Error al crear la cuenta. Por favor intenta de nuevo."
      
      if (error?.message?.includes("For security purposes, you can only request this after")) {
        errorMessage = "Ya se envió un email de confirmación recientemente. Por favor espera 60 segundos antes de intentar de nuevo."
      } else if (error?.message?.includes("User already registered")) {
        errorMessage = "Este email ya está registrado. ¿Quieres iniciar sesión?"
      } else if (error?.message?.includes("Invalid email")) {
        errorMessage = "El formato del email no es válido."
      } else if (error?.message?.includes("Password should be at least")) {
        errorMessage = "La contraseña debe tener al menos 6 caracteres."
      } else if (error?.message) {
        errorMessage = error.message
      }
      
      setError(errorMessage)
    } finally {
      setIsLoading(false)
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
            <UserPlus className="h-8 w-8 text-primary" />
          </div>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-primary">
          Crea tu cuenta
        </h1>
        <p className="text-base text-muted-foreground">
          Ingresa tus datos para registrarte en LinkerPro
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="userType"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel className="text-base">Tipo de cuenta</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    value={field.value}
                    className="grid grid-cols-2 gap-4"
                  >
                    <Label
                      htmlFor="freelancer"
                      className={`
                        relative border-2 rounded-lg p-4 cursor-pointer transition-all
                        ${field.value === 'freelancer' 
                          ? 'border-primary bg-primary/5' 
                          : 'hover:border-primary/50'}
                      `}
                    >
                      <RadioGroupItem 
                        value="freelancer" 
                        id="freelancer" 
                        className="absolute w-0 h-0 opacity-0"
                      />
                      <div className="flex flex-col items-center gap-2">
                        <Briefcase className={`h-6 w-6 ${field.value === 'freelancer' ? 'text-primary' : ''}`} />
                        <span className="font-normal">Freelancer</span>
                      </div>
                    </Label>

                    <Label
                      htmlFor="company"
                      className={`
                        relative border-2 rounded-lg p-4 cursor-pointer transition-all
                        ${field.value === 'company' 
                          ? 'border-primary bg-primary/5' 
                          : 'hover:border-primary/50'}
                      `}
                    >
                      <RadioGroupItem 
                        value="company" 
                        id="company" 
                        className="absolute w-0 h-0 opacity-0"
                      />
                      <div className="flex flex-col items-center gap-2">
                        <Building2 className={`h-6 w-6 ${field.value === 'company' ? 'text-primary' : ''}`} />
                        <span className="font-normal">Empresa</span>
                      </div>
                    </Label>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base">Nombre completo</FormLabel>
                <FormControl>
                  <div className="relative">
                    <User className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                    <Input 
                      placeholder="Juan Pérez" 
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

          <div className="space-y-4">
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
                  <FormDescription>
                    Mínimo 6 caracteres
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base">Confirmar contraseña</FormLabel>
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
            />
          </div>          {error && (
            <Alert variant="destructive">
              <AlertDescription>
                {error}
                {error.includes('Error de configuración en el servidor') && (
                  <div className="mt-2">
                    <Link 
                      href="/debug/supabase" 
                      className="text-sm underline hover:no-underline"
                    >
                      Ver instrucciones de configuración →
                    </Link>
                  </div>
                )}
              </AlertDescription>
            </Alert>
          )}

          <Button 
            type="submit" 
            className="w-full h-11 text-base" 
            disabled={isLoading}
          >
            {isLoading ? (
              "Creando cuenta..."
            ) : (
              <>
                Crear cuenta
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
            ¿Ya tienes una cuenta?
          </span>
        </div>
      </div>

      <div className="text-center">
        <Button
          variant="outline"
          className="w-full h-11 text-base"
          onClick={() => router.push("/login")}
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Volver al inicio de sesión
        </Button>
      </div>
    </div>
  )
}
