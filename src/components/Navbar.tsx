import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { AnnouncementMarquee } from '@/components/AnnouncementMarquee';
import { NAV_LINKS } from '@/lib/constants';
import logo from '../logo.webp';

export const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [location.pathname]);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  /** Dark hero on home: transparent bar + light text until scroll */
  const onDarkHero = isHome && !isScrolled;

  const linkClass = cn(
    'text-sm font-medium transition-colors relative py-1',
    onDarkHero ? 'text-white/85 hover:text-white' : 'text-slate-600 hover:text-slate-900'
  );

  const underlineClass = cn(
    'absolute -bottom-0.5 left-0 h-0.5 rounded-full transition-all duration-300',
    onDarkHero ? 'bg-white/80 w-0 group-hover:w-full' : 'bg-primary w-0 group-hover:w-full'
  );

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        onDarkHero
          ? 'border-b border-transparent bg-transparent'
          : 'border-b border-slate-200/90 bg-white/95 shadow-sm backdrop-blur-md'
      )}
    >
      <nav className="container-custom">
        <div className="flex h-16 items-center justify-between md:h-[4.25rem]">
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={logo}
              alt="TechVistar"
              className={cn(
                'h-11 w-11 rounded-full object-cover ring-2 transition-all',
                onDarkHero ? 'ring-white/20' : 'ring-slate-200'
              )}
            />
            <span
              className={cn(
                'text-lg font-bold font-display tracking-tight transition-colors',
                onDarkHero ? 'text-white' : 'text-slate-900'
              )}
            >
              TechVistar
            </span>
          </Link>

          <div className="hidden items-center gap-5 lg:gap-7 xl:gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <Link key={link.label} to={link.href} className={cn(linkClass, 'group')}>
                {link.label}
                <span className={underlineClass} />
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Button
              variant="hero"
              size="default"
              className={cn(
                'rounded-full font-semibold',
                onDarkHero && 'shadow-lg shadow-primary/25'
              )}
              asChild
            >
              <Link to="/#contact">Get started</Link>
            </Button>
          </div>

          <button
            className={cn(
              'rounded-lg p-2 transition-colors md:hidden',
              onDarkHero ? 'text-white' : 'text-slate-900'
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {isHome ? <AnnouncementMarquee variant={onDarkHero ? 'dark' : 'light'} /> : null}

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-b border-slate-200 bg-white shadow-lg md:hidden"
          >
            <div className="container-custom space-y-1 py-5">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="block rounded-lg px-2 py-3 text-sm font-medium text-slate-700 hover:bg-muted hover:text-primary"
                  onClick={closeMobileMenu}
                >
                  {link.label}
                </Link>
              ))}
              <Button variant="hero" size="lg" className="mt-4 w-full" asChild>
                <Link to="/#contact" onClick={closeMobileMenu}>
                  Get started
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
