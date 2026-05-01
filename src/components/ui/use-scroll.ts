'use client';
import React from 'react';

export function useScroll(threshold: number) {
  // Use useSyncExternalStore for a clean, hydration-safe way to track window scroll
  const isScrolled = React.useSyncExternalStore(
    (callback) => {
      window.addEventListener('scroll', callback);
      return () => window.removeEventListener('scroll', callback);
    },
    () => window.scrollY > threshold,
    () => false // Server-side value
  );

  return isScrolled;
}
