import { HotmartBanner } from './types/store';

/**
 * Selecciona banners de forma aleatoria con peso
 */
export function getRandomBanners(banners: HotmartBanner[], count: number = 1): HotmartBanner[] {
  if (banners.length === 0) return [];
  
  // Filtrar banners activos
  const activeBanners = banners.filter(banner => banner.is_active);
  
  if (activeBanners.length === 0) return [];
  if (count >= activeBanners.length) return activeBanners;
  
  // Selección aleatoria con peso
  const weightedBanners = activeBanners.flatMap(banner => 
    Array(banner.priority).fill(banner)
  );
  
  const selectedBanners: HotmartBanner[] = [];
  const usedIds = new Set<string>();
  
  while (selectedBanners.length < count && selectedBanners.length < activeBanners.length) {
    const randomIndex = Math.floor(Math.random() * weightedBanners.length);
    const selectedBanner = weightedBanners[randomIndex];
    
    if (!usedIds.has(selectedBanner.id)) {
      selectedBanners.push(selectedBanner);
      usedIds.add(selectedBanner.id);
    }
  }
  
  return selectedBanners;
}

/**
 * Filtra banners por categoría
 */
export function getBannersByCategory(banners: HotmartBanner[], category: string): HotmartBanner[] {
  return banners.filter(banner => 
    banner.is_active && banner.category.toLowerCase() === category.toLowerCase()
  );
}

/**
 * Registra un clic en un banner (mock function)
 */
export async function registerBannerClick(bannerId: string, userId?: string): Promise<void> {
  // Mock implementation - en el futuro se conectará con la API
  console.log('Banner click registered:', { bannerId, userId, timestamp: new Date().toISOString() });
  
  // Aquí iría la lógica para enviar datos a la API
  // fetch('/api/banners/click', {
  //   method: 'POST',
  //   body: JSON.stringify({ bannerId, userId }),
  // });
}

/**
 * Obtiene banners para una ubicación específica
 */
export function getBannersForLocation(banners: HotmartBanner[], location: string, count: number = 1): HotmartBanner[] {
  // Por ahora, devuelve banners aleatorios
  // En el futuro se podría filtrar por ubicación o contexto
  return getRandomBanners(banners, count);
}

/**
 * Valida si un banner debe mostrarse
 */
export function shouldShowBanner(banner: HotmartBanner): boolean {
  if (!banner.is_active) return false;
  
  const now = new Date();
  const startDate = banner.created_at ? new Date(banner.created_at) : null;
  const endDate = banner.updated_at ? new Date(banner.updated_at) : null;
  
  if (startDate && now < startDate) return false;
  if (endDate && now > endDate) return false;
  
  return true;
}

/**
 * Mezcla array de banners de forma aleatoria
 */
export function shuffleBanners(banners: HotmartBanner[]): HotmartBanner[] {
  const shuffled = [...banners];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
