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
          // Simple init without namespace
          window.Cal('init', { origin: 'https://cal.com' });

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

// Create and click a hidden link with data-cal-link attribute
// This is the official recommended way by Cal.com
export const openCalModal = () => {
  console.log('🔵 Opening Cal.com modal via data-cal-link...');

  try {
    // Create a temporary link with data-cal-link attribute
    const link = document.createElement('a');
    link.setAttribute('data-cal-link', 'florian-autotasq/30min');
    link.setAttribute('data-cal-config', JSON.stringify({
      layout: 'month_view',
      theme: 'light'
    }));
    link.style.display = 'none';

    // Add to DOM temporarily
    document.body.appendChild(link);

    // Trigger click
    link.click();

    // Remove from DOM
    setTimeout(() => {
      document.body.removeChild(link);
    }, 100);

    console.log('✅ Modal triggered via data-cal-link');
  } catch (error) {
    console.error('❌ Error triggering modal:', error);
    console.log('↗️ Opening in new tab as fallback');
    window.open('https://cal.com/florian-autotasq/30min', '_blank');
  }
};
