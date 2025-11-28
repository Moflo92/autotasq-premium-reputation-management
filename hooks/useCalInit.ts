import { useEffect } from 'react';

declare global {
  interface Window {
    Cal: any;
  }
}

export const useCalInit = () => {
  useEffect(() => {
    // Wait for Cal script to load
    const checkCalLoaded = setInterval(() => {
      if (typeof window !== 'undefined' && window.Cal) {
        window.Cal('init', { origin: 'https://app.cal.com' });

        // Configure default UI settings
        window.Cal('ui', {
          theme: 'light',
          styles: { branding: { brandColor: '#0f172a' } },
          hideEventTypeDetails: false,
          layout: 'month_view'
        });

        clearInterval(checkCalLoaded);
        console.log('Cal.com initialized successfully');
      }
    }, 100);

    // Cleanup after 10 seconds
    setTimeout(() => clearInterval(checkCalLoaded), 10000);

    return () => clearInterval(checkCalLoaded);
  }, []);
};

export const openCalModal = () => {
  if (typeof window !== 'undefined' && window.Cal) {
    window.Cal('openModal', {
      calLink: 'florian-autotasq/30min',
      config: { layout: 'month_view' }
    });
  } else {
    console.error('Cal.com not loaded yet');
  }
};
