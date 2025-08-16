'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';

export function BackToHomeButton() {
  const router = useRouter();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => router.push("/")}
      className="text-muted-foreground hover:text-primary mb-4"
    >
      <Home className="h-4 w-4 mr-2" />
      Volver al inicio
    </Button>
  );
}
