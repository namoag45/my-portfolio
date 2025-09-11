"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizeable-navbar";
import { navItems } from "@/data";
import { useState, useEffect } from "react";

export function NavbarDemo() {
  const [scrolled, setScrolled] = useState(false);

  // Add scroll event listener to detect when to show border
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative pt-8">
      <div className={`fixed top-4 left-0 right-0 z-50 transition-all duration-300 bg-transparent`}>
      <Navbar className="max-w-7xl mx-auto">
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          
          <div className="flex items-center gap-4">
            {navItems.map((item, idx) => (
              <NavbarButton 
                key={`desktop-nav-${idx}`} 
                variant="secondary" 
                href={item.link}
              >
                {item.name}
              </NavbarButton>
            ))}
            {/* <NavbarButton 
              variant="primary" 
              href="https://drive.google.com/file/d/1GIwMB3ApoYvWoKBE_3pXnbw-sCKB5UcR/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Resume
            </NavbarButton> */}
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            {/* <div className="flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
                href="https://drive.google.com/file/d/1GIwMB3ApoYvWoKBE_3pXnbw-sCKB5UcR/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </NavbarButton>
            </div> */}
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
      </div>

      {/* Navbar */}
    </div>
  );
}
