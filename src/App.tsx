import React, { useState, useEffect, useCallback } from 'react';
import type { Currency } from './types';
import { SLIDES_CONFIG } from './data/slides';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { NavigationControls } from './components/layout/NavigationControls';
import { SlideContainer } from './components/layout/SlideContainer';
import { SlideOverviewModal } from './components/modals/SlideOverviewModal';
import { SponsorModal } from './components/modals/SponsorModal';
import { ShortcutsModal } from './components/modals/ShortcutsModal';

// Slide components
import { Slide1Hero } from './components/slides/Slide1Hero';
import { Slide2Impact } from './components/slides/Slide2Impact';
import { Slide3LocalImpact } from './components/slides/Slide3LocalImpact';
import { Slide4Profiles } from './components/slides/Slide4Profiles';
import { Slide5Companies } from './components/slides/Slide5Companies';
import { Slide6Channels } from './components/slides/Slide6Channels';
import { Slide7Packages } from './components/slides/Slide7Packages';
import { Slide8AddOns } from './components/slides/Slide8AddOns';
import { Slide9Process } from './components/slides/Slide9Process';

export const App: React.FC = () => {
  const totalSlides = SLIDES_CONFIG.length;

  // Extract initial slide from window.location.hash (e.g. #/3 -> 3)
  const getSlideFromHash = (): number => {
    const hash = window.location.hash;
    const match = hash.match(/^#\/([1-9])$/);
    if (match && match[1]) {
      const parsed = parseInt(match[1], 10);
      if (parsed >= 1 && parsed <= totalSlides) {
        return parsed;
      }
    }
    return 1;
  };

  const [currentSlide, setCurrentSlide] = useState<number>(getSlideFromHash);
  const [direction, setDirection] = useState<number>(1);
  const [currency, setCurrency] = useState<Currency>('USD');

  // Modals state
  const [isOverviewOpen, setIsOverviewOpen] = useState(false);
  const [isShortcutsOpen, setIsShortcutsOpen] = useState(false);
  const [isSponsorModalOpen, setIsSponsorModalOpen] = useState(false);
  const [modalTierId, setModalTierId] = useState<string>('impact');
  const [modalAddOnIds, setModalAddOnIds] = useState<string[]>([]);

  // Update hash when slide changes
  const navigateToSlide = useCallback((targetSlide: number) => {
    if (targetSlide < 1 || targetSlide > totalSlides || targetSlide === currentSlide) return;
    setDirection(targetSlide > currentSlide ? 1 : -1);
    setCurrentSlide(targetSlide);
    window.location.hash = `#/${targetSlide}`;
  }, [currentSlide, totalSlides]);

  const handleNext = useCallback(() => {
    if (currentSlide < totalSlides) {
      navigateToSlide(currentSlide + 1);
    }
  }, [currentSlide, totalSlides, navigateToSlide]);

  const handlePrev = useCallback(() => {
    if (currentSlide > 1) {
      navigateToSlide(currentSlide - 1);
    }
  }, [currentSlide, navigateToSlide]);

  const toggleCurrency = useCallback(() => {
    setCurrency((prev) => (prev === 'USD' ? 'MXN' : 'USD'));
  }, []);

  const openSponsorModalWithConfig = (tierId = 'impact', addOnIds: string[] = []) => {
    setModalTierId(tierId);
    setModalAddOnIds(addOnIds);
    setIsSponsorModalOpen(true);
  };

  // Sync with browser back/forward and hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const slide = getSlideFromHash();
      if (slide !== currentSlide) {
        setDirection(slide > currentSlide ? 1 : -1);
        setCurrentSlide(slide);
      }
    };

    // If initial load has no hash, set it to #/1
    if (!window.location.hash || !window.location.hash.match(/^#\/[1-9]$/)) {
      window.location.hash = `#/1`;
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [currentSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't capture keys if user is typing in an input/textarea
      const activeEl = document.activeElement;
      const isInput = activeEl && (activeEl.tagName === 'INPUT' || activeEl.tagName === 'TEXTAREA');
      if (isInput) return;

      if (e.key === 'Escape') {
        setIsOverviewOpen(false);
        setIsShortcutsOpen(false);
        setIsSponsorModalOpen(false);
        return;
      }

      // If any modal is open, don't trigger slide jumps
      if (isOverviewOpen || isShortcutsOpen || isSponsorModalOpen) return;

      switch (e.key) {
        case 'ArrowRight':
        case 'PageDown':
        case ' ': // Space
          e.preventDefault();
          handleNext();
          break;
        case 'ArrowLeft':
        case 'PageUp':
          e.preventDefault();
          handlePrev();
          break;
        case 'Home':
          e.preventDefault();
          navigateToSlide(1);
          break;
        case 'End':
          e.preventDefault();
          navigateToSlide(totalSlides);
          break;
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9': {
          const num = parseInt(e.key, 10);
          if (num >= 1 && num <= totalSlides) {
            navigateToSlide(num);
          }
          break;
        }
        case 'g':
        case 'G':
          setIsOverviewOpen((prev) => !prev);
          break;
        case 'm':
        case 'M':
          toggleCurrency();
          break;
        case '?':
          setIsShortcutsOpen((prev) => !prev);
          break;
        case 'f':
        case 'F':
          if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(() => {});
          } else {
            document.exitFullscreen().catch(() => {});
          }
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev, navigateToSlide, isOverviewOpen, isShortcutsOpen, isSponsorModalOpen, totalSlides, toggleCurrency]);

  // Render slide component based on active slide ID
  const renderCurrentSlide = () => {
    switch (currentSlide) {
      case 1:
        return (
          <Slide1Hero
            onNext={handleNext}
            onOpenSponsorModal={() => openSponsorModalWithConfig('impact', [])}
            onNavigateToSlide={navigateToSlide}
          />
        );
      case 2:
        return <Slide2Impact />;
      case 3:
        return <Slide3LocalImpact />;
      case 4:
        return <Slide4Profiles />;
      case 5:
        return <Slide5Companies />;
      case 6:
        return <Slide6Channels />;
      case 7:
        return (
          <Slide7Packages
            currency={currency}
            onSelectTier={(tierId) => openSponsorModalWithConfig(tierId, [])}
            onOpenSponsorModalWithTier={(tierId) => openSponsorModalWithConfig(tierId, [])}
          />
        );
      case 8:
        return (
          <Slide8AddOns
            currency={currency}
            onOpenSponsorModalWithConfig={openSponsorModalWithConfig}
          />
        );
      case 9:
        return (
          <Slide9Process
            onOpenSponsorModal={() => openSponsorModalWithConfig('impact', [])}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="relative w-screen h-screen bg-[#f8f9fa] text-slate-800 overflow-hidden bg-light-pattern flex flex-col justify-between select-none">
      {/* Fixed Header with Google 4-color top strip */}
      <Header
        currentSlide={currentSlide}
        onNavigate={navigateToSlide}
        currency={currency}
        onToggleCurrency={toggleCurrency}
        onOpenOverview={() => setIsOverviewOpen(true)}
        onOpenShortcuts={() => setIsShortcutsOpen(true)}
        onOpenSponsorModal={() => openSponsorModalWithConfig('impact', [])}
      />

      {/* Slide Transition Area */}
      <SlideContainer
        slideKey={currentSlide}
        direction={direction}
        onSwipeLeft={handleNext}
        onSwipeRight={handlePrev}
      >
        {renderCurrentSlide()}
      </SlideContainer>

      {/* Navigation arrows & bottom dot indicators */}
      <NavigationControls
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        onPrev={handlePrev}
        onNext={handleNext}
        onNavigate={navigateToSlide}
      />

      {/* Fixed Footer with Google 4-color bottom strip */}
      <Footer
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        onPrev={handlePrev}
        onNext={handleNext}
        onOpenSponsorModal={() => openSponsorModalWithConfig('impact', [])}
      />

      {/* Modals */}
      <SlideOverviewModal
        isOpen={isOverviewOpen}
        onClose={() => setIsOverviewOpen(false)}
        currentSlide={currentSlide}
        onSelectSlide={navigateToSlide}
      />

      <ShortcutsModal
        isOpen={isShortcutsOpen}
        onClose={() => setIsShortcutsOpen(false)}
      />

      <SponsorModal
        isOpen={isSponsorModalOpen}
        onClose={() => setIsSponsorModalOpen(false)}
        currency={currency}
        initialTierId={modalTierId}
        initialAddOnIds={modalAddOnIds}
      />
    </div>
  );
};

export default App;
