import { useEffect } from 'react';

declare global {
  interface Window {
    Cal: any;
  }
}

export const useCalInit = () => {
  useEffect(() => {
    // Wait for Cal script to load and initialize
    const initCal = () => {
      if (typeof window !== 'undefined' && window.Cal) {
        // Initialize Cal.com
        window.Cal('init', { origin: 'https://app.cal.com' });

        // Set default namespace with custom styles
        window.Cal('ui', {
          theme: 'light',
          styles: {
            branding: {
              brandColor: '#0f172a'
            }
          },
          hideEventTypeDetails: false
        });

        console.log('✅ Cal.com initialized successfully');
        return true;
      }
      return false;
    };

    // Try to initialize immediately
    if (initCal()) return;

    // If not ready, wait for it
    const checkInterval = setInterval(() => {
      if (initCal()) {
        clearInterval(checkInterval);
      }
    }, 100);

    // Cleanup after 10 seconds
    const timeout = setTimeout(() => {
      clearInterval(checkInterval);
      console.warn('⚠️ Cal.com script not loaded after 10s');
    }, 10000);

    return () => {
      clearInterval(checkInterval);
      clearTimeout(timeout);
    };
  }, []);
};

// Open Cal.com modal with fallback to direct link
export const openCalModal = () => {
  console.log('🔵 Attempting to open Cal.com modal...');

  if (typeof window !== 'undefined' && window.Cal) {
    try {
      window.Cal('ui', {
        theme: 'light',
        styles: { branding: { brandColor: '#0f172a' } },
        hideEventTypeDetails: false
      });

      window.Cal('openModal', {
        calLink: 'florian-autotasq/30min'
      });

      console.log('✅ Modal opened successfully');
    } catch (error) {
      console.error('❌ Error opening modal:', error);
      // Fallback: open in new tab
      window.open('https://cal.com/florian-autotasq/30min', '_blank');
    }
  } else {
    console.warn('⚠️ Cal.com not loaded - opening direct link as fallback');
    // Fallback: open in new tab if Cal is not loaded
    window.open('https://cal.com/florian-autotasq/30min', '_blank');
  }
};
