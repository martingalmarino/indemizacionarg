import { type ClassValue, clsx } from 'clsx';

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

/**
 * Save calculation to localStorage
 */
export function saveCalculation(data: any): void {
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem('lastCalculation', JSON.stringify(data));
      localStorage.setItem('lastCalculationDate', new Date().toISOString());
    } catch (error) {
      console.error('Error saving calculation:', error);
    }
  }
}

/**
 * Load last calculation from localStorage
 */
export function loadLastCalculation(): any | null {
  if (typeof window !== 'undefined') {
    try {
      const data = localStorage.getItem('lastCalculation');
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error('Error loading calculation:', error);
      return null;
    }
  }
  return null;
}

/**
 * Generate shareable URL with encoded params
 */
export function generateShareUrl(params: Record<string, any>): string {
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';
  const searchParams = new URLSearchParams();
  
  Object.entries(params).forEach(([key, value]) => {
    searchParams.set(key, String(value));
  });
  
  return `${baseUrl}/calculadora-indemnizacion?${searchParams.toString()}`;
}

/**
 * Parse URL params into calculation input
 */
export function parseUrlParams(searchParams: URLSearchParams): Record<string, any> | null {
  try {
    const params: Record<string, any> = {};
    
    for (const [key, value] of searchParams.entries()) {
      if (value === 'true' || value === 'false') {
        params[key] = value === 'true';
      } else if (!isNaN(Number(value))) {
        params[key] = Number(value);
      } else {
        params[key] = value;
      }
    }
    
    return Object.keys(params).length > 0 ? params : null;
  } catch (error) {
    console.error('Error parsing URL params:', error);
    return null;
  }
}
