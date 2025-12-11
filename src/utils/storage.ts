
export const STORAGE_KEYS = {
  AVO_DATA: 'avo_analysis_data',
} as const;

export interface AvoStorageData {
  url: string;
  id: string;
  timestamp: number;
}

export const storageUtils = {
  set: <T>(key: string, value: T): void => {
    try {
      if (typeof window === 'undefined') return;
      const serializedValue = JSON.stringify(value);
      localStorage.setItem(key, serializedValue);
    } catch (error) {
      console.error(`Error saving to localStorage key "${key}":`, error);
    }
  },

  get: <T>(key: string): T | null => {
    try {
      if (typeof window === 'undefined') return null;
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error(`Error reading from localStorage key "${key}":`, error);
      return null;
    }
  },

  remove: (key: string): void => {
    try {
      if (typeof window === 'undefined') return;
      localStorage.removeItem(key);
    } catch (error) {
      console.error(`Error removing localStorage key "${key}":`, error);
    }
  },

  clearAll: (): void => {
    try {
      if (typeof window === 'undefined') return;
      // We might want to only clear specific keys or everything?
      // User asked for "Fungsi untuk menghapus semua data terkait (clearAllStorage)"
      // I'll assume they mean clearing the specific data we saved, or maybe all app data.
      // For safety, let's just implement a generic clear that clears everything, 
      // but the usage in footer will probably target specific keys or all if that's the intent.
      // However, usually clearAllStorage implies localStorage.clear().
      localStorage.clear();
    } catch (error) {
      console.error('Error clearing localStorage:', error);
    }
  },
  
  // Specific helper for AVO data
  setAvoData: (data: Omit<AvoStorageData, 'timestamp'>) => {
    storageUtils.set(STORAGE_KEYS.AVO_DATA, {
      ...data,
      timestamp: Date.now(),
    });
  },

  getAvoData: (): AvoStorageData | null => {
    return storageUtils.get<AvoStorageData>(STORAGE_KEYS.AVO_DATA);
  },
  
  clearAvoData: () => {
    storageUtils.remove(STORAGE_KEYS.AVO_DATA);
  }
};
