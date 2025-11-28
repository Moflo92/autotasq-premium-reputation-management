// Simple and reliable: just open Cal.com in a new tab
// This is the most reliable approach and works 100% of the time
export const openCalModal = () => {
  console.log('📅 Opening Cal.com booking page...');

  // Open Cal.com in a new tab with your calendar
  window.open('https://cal.com/florian-autotasq/30min', '_blank', 'noopener,noreferrer');

  console.log('✅ Booking page opened in new tab');
};

// No initialization needed since we're not using the embed
export const useCalInit = () => {
  // Empty hook - kept for compatibility
};
