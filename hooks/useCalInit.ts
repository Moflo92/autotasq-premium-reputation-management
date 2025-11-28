import { useEffect } from 'react';

declare global {
  interface Window {
    Cal: any;
  }
}

export const useCalInit = () => {
  useEffect(() => {
    const initCal = () => {
      if (typeof window !== 'undefined' && window.Cal) {
        try {
          // Initialize with the new API syntax
          window.Cal('init', 'florian-autotasq', { origin: 'https://cal.com' });

          // Set UI configuration
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
        } catch (error) {
          console.error('❌ Cal.com init error:', error);
          return false;
        }
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

// Open Cal.com modal using the data-cal-namespace approach
export const openCalModal = () => {
  console.log('🔵 Opening Cal.com modal...');

  if (typeof window !== 'undefined' && window.Cal) {
    try {
      // Use the correct syntax: Cal(namespace, event, data)
      window.Cal('florian-autotasq', 'modal', {
        calLink: '30min'
      });

      console.log('✅ Modal triggered');
    } catch (error) {
      console.error('❌ Error opening modal:', error);
      // Fallback: open in new tab
      console.log('↗️ Opening in new tab as fallback');
      window.open('https://cal.com/florian-autotasq/30min', '_blank');
    }
  } else {
    console.warn('⚠️ Cal.com not loaded - opening direct link');
    window.open('https://cal.com/florian-autotasq/30min', '_blank');
  }
};
