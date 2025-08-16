'use client';

import { useState, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Progress } from '@/components/ui/progress';
import { 
  Upload, 
  X, 
  Copy, 
  Check, 
  ImageIcon,
  Trash2,
  Eye,
  Download
} from 'lucide-react';
import Link from 'next/link';

interface UploadedImage {
  id: string;
  name: string;
  url: string;
  size: number;
  type: string;
  uploadDate: Date;
}

export default function ImageUploadPage() {
  const [dragActive, setDragActive] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadedImages, setUploadedImages] = useState<UploadedImage[]>([
    {
      id: '1',
      name: 'gafas-3m-safety.jpg',
      url: 'https://m.media-amazon.com/images/I/61HHgDAW6kL._AC_SL1000_.jpg',
      size: 245760,
      type: 'image/jpeg',
      uploadDate: new Date('2025-08-01')
    },
    {
      id: '2',
      name: 'casco-truper.jpg',
      url: 'https://m.media-amazon.com/images/I/71aXZF5HVQL._AC_SL1500_.jpg',
      size: 189440,
      type: 'image/jpeg',
      uploadDate: new Date('2025-08-01')
    }
  ]);
  const [copiedUrl, setCopiedUrl] = useState('');
  const [message, setMessage] = useState('');

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFiles(e.target.files);
    }
  };

  const handleFiles = async (files: FileList) => {
    setUploading(true);
    setUploadProgress(0);

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      
      // Validar tipo de archivo
      if (!file.type.startsWith('image/')) {
        setMessage(`Error: ${file.name} no es un archivo de imagen válido.`);
        continue;
      }

      // Validar tamaño (máximo 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setMessage(`Error: ${file.name} es demasiado grande. Máximo 5MB.`);
        continue;
      }

      try {
        // Simular upload con progress
        for (let progress = 0; progress <= 100; progress += 10) {
          setUploadProgress(progress);
          await new Promise(resolve => setTimeout(resolve, 100));
        }

        // Crear URL temporal para la imagen
        const imageUrl = URL.createObjectURL(file);
        
        const newImage: UploadedImage = {
          id: Date.now().toString() + i,
          name: file.name,
          url: imageUrl,
          size: file.size,
          type: file.type,
          uploadDate: new Date()
        };

        setUploadedImages(prev => [newImage, ...prev]);
        setMessage(`Imagen ${file.name} subida exitosamente.`);
      } catch (error) {
        console.error('Error uploading file:', error);
        setMessage(`Error subiendo ${file.name}.`);
      }
    }

    setUploading(false);
    setUploadProgress(0);
  };

  const copyToClipboard = async (url: string) => {
    try {
      await navigator.clipboard.writeText(url);
      setCopiedUrl(url);
      setTimeout(() => setCopiedUrl(''), 2000);
    } catch (error) {
      console.error('Error copying to clipboard:', error);
    }
  };

  const deleteImage = (id: string) => {
    if (confirm('¿Estás seguro de que quieres eliminar esta imagen?')) {
      setUploadedImages(prev => prev.filter(img => img.id !== id));
      setMessage('Imagen eliminada exitosamente.');
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link href="/admin" className="text-blue-600 hover:text-blue-800">
                ← Panel Admin
              </Link>
              <h1 className="text-xl font-semibold text-gray-900">
                Gestión de Imágenes
              </h1>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {message && (
          <Alert className="mb-6">
            <AlertDescription>{message}</AlertDescription>
          </Alert>
        )}

        {/* Upload Area */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload className="w-5 h-5" />
              Subir Imágenes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div
              className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                dragActive
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-300 hover:border-gray-400'
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                disabled={uploading}
              />
              
              <div className="space-y-4">
                <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                  <ImageIcon className="w-8 h-8 text-gray-400" />
                </div>
                
                <div>
                  <p className="text-lg font-medium text-gray-900">
                    {dragActive ? 'Suelta las imágenes aquí' : 'Arrastra y suelta imágenes aquí'}
                  </p>
                  <p className="text-gray-600">
                    o <span className="text-blue-600 underline">haz clic para seleccionar</span>
                  </p>
                </div>
                
                <div className="text-sm text-gray-500">
                  <p>Formatos soportados: JPG, PNG, GIF, WEBP</p>
                  <p>Tamaño máximo: 5MB por imagen</p>
                </div>
              </div>
            </div>

            {uploading && (
              <div className="mt-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Subiendo imagen...</span>
                  <span className="text-sm text-gray-600">{uploadProgress}%</span>
                </div>
                <Progress value={uploadProgress} className="w-full" />
              </div>
            )}
          </CardContent>
        </Card>

        {/* Galería de imágenes */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <ImageIcon className="w-5 h-5" />
                Galería de Imágenes
              </span>
              <span className="text-sm font-normal text-gray-600">
                {uploadedImages.length} imágenes
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {uploadedImages.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                No hay imágenes subidas aún.
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {uploadedImages.map((image) => (
                  <div key={image.id} className="border rounded-lg overflow-hidden bg-white">
                    {/* Imagen */}
                    <div className="aspect-square relative bg-gray-100">
                      <img
                        src={image.url}
                        alt={image.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Información */}
                    <div className="p-4">
                      <h3 className="font-medium text-gray-900 truncate mb-2">
                        {image.name}
                      </h3>
                      
                      <div className="text-sm text-gray-600 space-y-1 mb-3">
                        <p>Tamaño: {formatFileSize(image.size)}</p>
                        <p>Fecha: {image.uploadDate.toLocaleDateString()}</p>
                      </div>
                      
                      {/* URL */}
                      <div className="mb-3">
                        <Label className="text-xs text-gray-500">URL de la imagen:</Label>
                        <div className="flex items-center gap-2 mt-1">
                          <Input
                            value={image.url}
                            readOnly
                            className="text-xs"
                          />
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => copyToClipboard(image.url)}
                            className="px-2"
                          >
                            {copiedUrl === image.url ? (
                              <Check className="w-4 h-4 text-green-600" />
                            ) : (
                              <Copy className="w-4 h-4" />
                            )}
                          </Button>
                        </div>
                      </div>
                      
                      {/* Acciones */}
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => window.open(image.url, '_blank')}
                          className="flex-1"
                        >
                          <Eye className="w-4 h-4 mr-1" />
                          Ver
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => deleteImage(image.id)}
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Instrucciones */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Instrucciones de Uso</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Formatos Recomendados:</h4>
                <ul className="space-y-1 text-gray-600">
                  <li>• JPG/JPEG para fotografías</li>
                  <li>• PNG para imágenes con transparencia</li>
                  <li>• WEBP para mejor compresión</li>
                  <li>• Resolución mínima: 800x800px</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Optimización:</h4>
                <ul className="space-y-1 text-gray-600">
                  <li>• Comprime las imágenes antes de subir</li>
                  <li>• Usa nombres descriptivos</li>
                  <li>• Mantén un ratio cuadrado para productos</li>
                  <li>• Fondo blanco para mejor visualización</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
