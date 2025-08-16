import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Iniciar Sesión | LinkerPro",
  description: "Inicia sesión en LinkerPro para conectar con freelancers y empresas.",
}

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
