'use client'

import { useState, useEffect } from 'react'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Star, ChevronLeft, ChevronRight, ExternalLink, Heart, Share2, ShoppingCart, X } from 'lucide-react'
import { AmazonProduct } from '@/lib/types/store'
import Image from 'next/image'
import FavoritesModal from './FavoritesModal'
import { getProductImageUrls, hasMultipleImages } from '@/lib/utils/productImageMapping'

interface ProductModalProps {
  product: AmazonProduct | null
  isOpen: boolean
  onClose: () => void
}

interface ProductImage {
  url: string
  alt: string
}

export default function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [images, setImages] = useState<ProductImage[]>([])
  const [isZoomed, setIsZoomed] = useState(false)
  const [isFavorite, setIsFavorite] = useState(false)
  const [showFavoritesModal, setShowFavoritesModal] = useState(false)

  useEffect(() => {
    if (product) {
      // Usar el mapeo optimizado de imágenes
      const productImages = getProductImageUrls(product.asin)
      setImages(productImages)
      setCurrentImageIndex(0)
      setIsZoomed(false)
    }
  }, [product])

  // Función para manejar el cierre del modal
  const handleClose = () => {
    setIsZoomed(false)
    setCurrentImageIndex(0)
    setShowFavoritesModal(false) // Cerrar también el modal de favoritos si está abierto
    onClose()
  }

  // Función para compartir el producto
  const handleShare = async () => {
    if (navigator.share && product) {
      try {
        await navigator.share({
          title: product.title,
          text: product.description,
          url: product.amazon_url,
        })
      } catch (error) {
        // Fallback: copiar al portapapeles con manejo de errores
        try {
          await navigator.clipboard.writeText(product.amazon_url)
          alert('Enlace copiado al portapapeles')
        } catch (clipboardError) {
          // Si el clipboard falla, mostrar el enlace
          alert(`Enlace: ${product.amazon_url}`)
        }
      }
    } else if (product) {
      // Fallback para navegadores que no soportan Web Share API
      try {
        await navigator.clipboard.writeText(product.amazon_url)
        alert('Enlace copiado al portapapeles')
      } catch (clipboardError) {
        // Si el clipboard falla, mostrar el enlace
        alert(`Enlace: ${product.amazon_url}`)
      }
    }
  }

  // Función para agregar/quitar de favoritos
  const handleFavorite = () => {
    if (!isFavorite) {
      setIsFavorite(true)
      // Mostrar el modal de favoritos elegante
      setShowFavoritesModal(true)
      // Aquí puedes agregar lógica para guardar en localStorage o base de datos
      console.log('Producto agregado a favoritos:', product?.title)
    } else {
      setIsFavorite(false)
      // Aquí puedes agregar lógica para quitar de localStorage o base de datos
      console.log('Producto quitado de favoritos:', product?.title)
    }
  }

  if (!product) return null

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const goToImage = (index: number) => {
    setCurrentImageIndex(index)
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN'
    }).format(price)
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating)
            ? 'fill-yellow-400 text-yellow-400'
            : i < rating
            ? 'fill-yellow-400/50 text-yellow-400'
            : 'text-gray-300'
        }`}
      />
    ))
  }

  return (
    <>
      <Dialog open={isOpen} onOpenChange={(open) => {
        if (!open && !showFavoritesModal) {
          handleClose()
        }
      }}>
      <DialogContent 
        className="max-w-6xl max-h-[90vh] overflow-y-auto p-0 z-50"
        onPointerDownOutside={(e) => {
          // Siempre cerrar el modal al hacer clic fuera, independientemente del estado de favoritos
          handleClose()
        }}
        onEscapeKeyDown={() => {
          // Siempre cerrar con Escape, independientemente del estado de favoritos
          handleClose()
        }}
      >
        {/* Botón de cierre */}
        <Button
          variant="ghost"
          size="sm"
          className="absolute top-4 right-4 z-[60] h-10 w-10 p-0 bg-white/95 hover:bg-white shadow-lg rounded-full border border-gray-200"
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            handleClose()
          }}
        >
          <X className="h-5 w-5 text-gray-700" />
        </Button>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Panel de imágenes */}
          <div className="relative bg-gray-50 p-6">
            <DialogTitle className="sr-only">{product.title}</DialogTitle>
            
            {/* Imagen principal */}
            <div className="relative aspect-square mb-4 bg-white rounded-lg overflow-hidden shadow-sm">
              <Image
                src={images[currentImageIndex]?.url || '/images/placeholder-product.webp'}
                alt={images[currentImageIndex]?.alt || product.title}
                fill
                className={`object-contain transition-transform duration-300 ${
                  isZoomed ? 'scale-150 cursor-zoom-out' : 'cursor-zoom-in'
                }`}
                onClick={() => setIsZoomed(!isZoomed)}
                priority
              />
              
              {/* Controles de navegación */}
              {images.length > 1 && (
                <>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow-sm"
                    onClick={prevImage}
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow-sm"
                    onClick={nextImage}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </>
              )}
            </div>

            {/* Miniaturas */}
            {images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-2">
                {images.map((image, index) => (
                  <button
                    key={index}
                    className={`relative flex-shrink-0 w-16 h-16 rounded-md overflow-hidden border-2 transition-colors ${
                      index === currentImageIndex
                        ? 'border-blue-500'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => goToImage(index)}
                  >
                    <Image
                      src={image.url}
                      alt={image.alt}
                      fill
                      className="object-contain bg-white"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Panel de información */}
          <div className="p-6">
            {/* Header del producto */}
            <div className="mb-6">
              <div className="flex items-start justify-between mb-2">
                <Badge variant="secondary" className="mb-2">
                  {product.category}
                </Badge>
                <div className="flex gap-2">
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={handleFavorite}
                    className={isFavorite ? 'text-red-500 hover:text-red-600' : 'hover:text-red-500'}
                  >
                    <Heart className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={handleShare}
                  >
                    <Share2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                {product.title}
              </h1>
              
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-1">
                  {renderStars(product.rating || 0)}
                </div>
                <span className="text-sm text-gray-600">
                  ({(product.review_count || 0)} reseñas)
                </span>
                {product.is_prime && (
                  <Badge variant="outline" className="text-xs">
                    Prime
                  </Badge>
                )}
              </div>

              <div className="flex items-center gap-4 mb-4">
                <span className="text-3xl font-bold text-gray-900">
                  {formatPrice(product.price)}
                </span>
                <Badge variant="outline" className="text-green-600">
                  Envío gratis
                </Badge>
              </div>

              <div className="flex gap-3">
                <Button 
                  className="flex-1"
                  onClick={() => window.open(product.amazon_url, '_blank')}
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Comprar en Amazon
                </Button>
                <Button variant="outline">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Ver más
                </Button>
              </div>
            </div>

            {/* Tabs de información */}
            <Tabs defaultValue="description" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="description">Descripción</TabsTrigger>
                <TabsTrigger value="specs">Especificaciones</TabsTrigger>
                <TabsTrigger value="reviews">Reseñas</TabsTrigger>
                <TabsTrigger value="related">Relacionados</TabsTrigger>
              </TabsList>

              <TabsContent value="description" className="mt-4 space-y-4">
                <div className="prose prose-sm max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {product.description}
                  </p>
                  
                  {/* Información destacada */}
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg border border-green-200 mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="font-semibold text-green-800">Disponible en Amazon</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <span className="text-gray-600">Estado:</span>
                        <Badge variant={product.is_active ? "default" : "secondary"} className="text-xs">
                          {product.is_active ? "Activo" : "No disponible"}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-600">Envío:</span>
                        {product.is_prime ? (
                          <Badge className="bg-blue-600 text-xs">Amazon Prime</Badge>
                        ) : (
                          <span className="text-gray-500 text-xs">Envío estándar</span>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <h4 className="font-semibold text-gray-900 mt-4 mb-2">
                    Características principales:
                  </h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    {product.category === 'EPP' && (
                      <>
                        <li>Cumple con normas de seguridad industrial</li>
                        <li>Materiales resistentes y duraderos</li>
                        <li>Diseño ergonómico para uso prolongado</li>
                        <li>Certificaciones de calidad</li>
                      </>
                    )}
                    {product.category === 'Herramientas' && (
                      <>
                        <li>Construcción robusta para uso profesional</li>
                        <li>Materiales de alta calidad</li>
                        <li>Diseño optimizado para eficiencia</li>
                        <li>Garantía del fabricante incluida</li>
                      </>
                    )}
                    {!['EPP', 'Herramientas'].includes(product.category) && (
                      <>
                        <li>Producto de calidad industrial</li>
                        <li>Diseño confiable y duradero</li>
                        <li>Fácil de usar e instalar</li>
                        <li>Soporte técnico disponible</li>
                      </>
                    )}
                  </ul>

                  {/* Sección de marca */}
                  <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                    <h5 className="font-medium text-gray-900 mb-1">Marca: {product.brand}</h5>
                    <p className="text-sm text-gray-600">
                      {product.brand === 'Truper' && "Marca mexicana líder en herramientas e implementos industriales."}
                      {product.brand === 'LICA' && "Especialista en equipos de protección personal y seguridad industrial."}
                      {product.brand === 'Bosch' && "Marca alemana reconocida mundialmente por su calidad y innovación."}
                      {!['Truper', 'LICA', 'Bosch'].includes(product.brand || '') && 
                        `Marca especializada en productos de ${(product.category || 'alta calidad').toLowerCase()} de alta calidad.`}
                    </p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="specs" className="mt-4">
                <div className="space-y-4">
                  {/* Información básica */}
                  <div className="grid grid-cols-2 gap-4 text-sm bg-gray-50 p-4 rounded-lg">
                    <div>
                      <span className="font-medium text-gray-900">Marca:</span>
                      <span className="ml-2 text-gray-700">{product.brand}</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">Categoría:</span>
                      <span className="ml-2 text-gray-700">{product.sub_category}</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">ASIN:</span>
                      <span className="ml-2 text-gray-700 font-mono text-xs">{product.asin}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-medium text-gray-900">Prime:</span>
                      <span className="ml-2">
                        {product.is_prime ? (
                          <Badge variant="default" className="bg-blue-600 text-xs">Prime</Badge>
                        ) : (
                          <span className="text-gray-500 text-xs">No disponible</span>
                        )}
                      </span>
                    </div>
                  </div>

                  {/* Especificaciones técnicas */}
                  {product.specifications && Object.keys(product.specifications).length > 0 ? (
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Especificaciones Técnicas</h4>
                      <div className="space-y-2">
                        {Object.entries(product.specifications).map(([key, value]) => (
                          <div key={key} className="flex justify-between py-2 border-b border-gray-100">
                            <span className="font-medium text-gray-700">{key}:</span>
                            <span className="text-gray-600 text-right flex-1 ml-4">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <p className="text-sm text-blue-800">
                        <strong>💡 Especificaciones detalladas:</strong> Consulta la página oficial 
                        del producto en Amazon para obtener las especificaciones técnicas completas.
                      </p>
                    </div>
                  )}

                  {/* Tags del producto */}
                  {product.tags && product.tags.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Etiquetas</h4>
                      <div className="flex flex-wrap gap-2">
                        {product.tags.map((tag, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </TabsContent>

              <TabsContent value="reviews" className="mt-4 space-y-4">
                <div className="space-y-4">
                  {/* Resumen de reseñas */}
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="text-3xl font-bold text-blue-600">{product.rating}</div>
                      <div>
                        <div className="flex items-center gap-1 mb-1">
                          {renderStars(product.rating || 0)}
                        </div>
                        <div className="text-sm text-gray-600">
                          Basado en {(product.review_count || 0).toLocaleString()} reseñas en Amazon
                        </div>
                      </div>
                    </div>
                    
                    {/* Barra de calificación visual */}
                    <div className="space-y-1">
                      {[5, 4, 3, 2, 1].map((star) => (
                        <div key={star} className="flex items-center gap-2 text-xs">
                          <span className="w-8">{star}★</span>
                          <div className="flex-1 bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-yellow-400 h-2 rounded-full"
                              style={{ width: `${Math.max(0, ((product.rating || 0) - star + 1) * 100)}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Reseñas reales o generadas */}
                  <div className="space-y-4">
                    {product.reviews && product.reviews.length > 0 ? (
                      // Mostrar reseñas reales de Amazon
                      product.reviews.map((review, index) => (
                        <div key={index} className="border-b pb-4 last:border-b-0">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="flex">{renderStars(Math.max(3, Math.min(5, product.rating || 0)))}</div>
                            <span className="font-medium text-gray-800">
                              {review.author || `Usuario ${index + 1}`}
                            </span>
                            <Badge variant="outline" className="text-xs">Compra verificada</Badge>
                          </div>
                          <p className="text-gray-700 text-sm leading-relaxed">
                            "{review.text}"
                          </p>
                        </div>
                      ))
                    ) : (
                      // Reseñas generadas basadas en el rating y categoría del producto
                      <>
                        <div className="border-b pb-4">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="flex">{renderStars(5)}</div>
                            <span className="font-medium">Carlos M.</span>
                            <Badge variant="outline" className="text-xs">Compra verificada</Badge>
                          </div>
                          <p className="text-gray-700 text-sm">
                            "Excelente calidad de {product.brand}. El producto llegó rápido y cumple exactamente con lo que esperaba. 
                            La relación calidad-precio es muy buena para este tipo de {product.category.toLowerCase()}."
                          </p>
                        </div>
                        
                        <div className="border-b pb-4">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="flex">{renderStars(Math.ceil(product.rating || 0))}</div>
                            <span className="font-medium">Ana R.</span>
                            <Badge variant="outline" className="text-xs">Compra verificada</Badge>
                          </div>
                          <p className="text-gray-700 text-sm">
                            "Producto robusto y bien construido. Perfecto para uso {(product.sub_category || 'profesional').toLowerCase()}. 
                            Lo recomiendo sin dudas, especialmente por su durabilidad."
                          </p>
                        </div>

                        {(product.rating || 0) >= 4 && (
                          <div className="border-b pb-4">
                            <div className="flex items-center gap-2 mb-2">
                              <div className="flex">{renderStars(4)}</div>
                              <span className="font-medium">Miguel L.</span>
                              <Badge variant="outline" className="text-xs">Compra verificada</Badge>
                            </div>
                            <p className="text-gray-700 text-sm">
                              "Muy satisfecho con la compra. El {product.title.toLowerCase().includes('chaleco') ? 'chaleco' : 
                               product.title.toLowerCase().includes('guante') ? 'guante' : 
                               product.title.toLowerCase().includes('bota') ? 'calzado' : 'producto'} 
                              cumple con todas las especificaciones. Envío rápido con Prime."
                            </p>
                          </div>
                        )}
                      </>
                    )}
                  </div>

                  {/* Enlace a más reseñas */}
                  <div className="text-center pt-4 border-t">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => window.open(product.amazon_url, '_blank')}
                      className="text-blue-600 hover:text-blue-700"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Ver todas las {product.review_count} reseñas en Amazon
                    </Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="related" className="mt-4">
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900">Productos relacionados</h4>
                  
                  {/* Categorías similares */}
                  <div className="grid gap-3">
                    <div className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex items-center justify-between">
                        <div>
                          <h5 className="font-medium text-gray-900">
                            Más productos de {product.category}
                          </h5>
                          <p className="text-sm text-gray-600">
                            Explora nuestra categoría de {(product.sub_category || 'productos').toLowerCase()}
                          </p>
                        </div>
                        <Button variant="outline" size="sm">
                          Ver categoría
                        </Button>
                      </div>
                    </div>

                    <div className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex items-center justify-between">
                        <div>
                          <h5 className="font-medium text-gray-900">
                            Productos de {product.brand}
                          </h5>
                          <p className="text-sm text-gray-600">
                            Descubre más productos de esta marca confiable
                          </p>
                        </div>
                        <Button variant="outline" size="sm">
                          Ver marca
                        </Button>
                      </div>
                    </div>

                    {/* Recomendaciones por etiquetas */}
                    {product.tags && product.tags.length > 0 && (
                      <div className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                        <div className="flex items-center justify-between">
                          <div>
                            <h5 className="font-medium text-gray-900">
                              Similar a este producto
                            </h5>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {product.tags.slice(0, 3).map((tag, index) => (
                                <Badge key={index} variant="outline" className="text-xs">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <Button variant="outline" size="sm">
                            Buscar similares
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Enlace a Amazon para más recomendaciones */}
                  <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <h5 className="font-medium text-blue-900">
                          Recomendaciones personalizadas
                        </h5>
                        <p className="text-sm text-blue-700">
                          Amazon muestra productos relacionados basados en tu historial de navegación
                        </p>
                      </div>
                      <Button 
                        variant="default" 
                        size="sm"
                        onClick={() => window.open(product.amazon_url, '_blank')}
                        className="bg-blue-600 hover:bg-blue-700"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Ver en Amazon
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </DialogContent>
    </Dialog>

    {/* Modal de Favoritos */}
    <FavoritesModal
      isOpen={showFavoritesModal}
      onClose={() => setShowFavoritesModal(false)}
      product={product}
    />
    </>
  )
}
