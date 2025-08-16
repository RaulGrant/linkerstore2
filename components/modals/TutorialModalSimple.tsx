'use client';

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

interface TutorialModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSection?: string;
}

export default function TutorialModal({ isOpen, onClose, initialSection = 'navigation' }: TutorialModalProps) {
  console.log('TutorialModal rendered with:', { isOpen, initialSection });

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <div className="flex items-start justify-between">
            <div>
              <DialogTitle className="text-2xl font-bold text-gray-900">
                Tutorial de LinkerPro
              </DialogTitle>
              <p className="text-gray-600 mt-2">
                Sección: {initialSection}
              </p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="h-10 w-10 p-0"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
        </DialogHeader>

        <div className="p-6">
          <h3 className="text-lg font-semibold mb-4">Tutorial Simple de Prueba</h3>
          <p className="text-gray-700 mb-4">
            Este es un modal de prueba para verificar que la funcionalidad funciona correctamente.
          </p>
          <p className="text-sm text-gray-500">
            Sección actual: <strong>{initialSection}</strong>
          </p>
          
          <div className="mt-6 flex justify-end">
            <Button onClick={onClose}>
              Cerrar Tutorial
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
