import React from 'react';
import useMediaQuery from '../../hooks/useMediaQuery';
import { MacbookProDesktop } from './MacbookProDesktop';
import { MacbookProMobile } from './MacbookProMobile';

export const MacbookPro = () => {
  // Tailwind's 'md' breakpoint is 768px. This will render the mobile version
  // for any screen width up to 768px.
  const isMobile = useMediaQuery('(max-width: 768px)');

  return isMobile ? <MacbookProMobile /> : <MacbookProDesktop />;
};