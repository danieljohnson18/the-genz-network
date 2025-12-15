"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Search } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    {
      title: "What We Do",
      items: [
        { label: "Mentorship Programs", href: "#mentorship-programs" },
        { label: "Workshops & Events", href: "#workshops-events" },
        { label: "Community Service", href: "#community-service" },
        { label: "Global Initiatives", href: "#global-initiatives" },
      ],
    },
    {
      title: "Where We Work",
      items: [
        { label: "North America", href: "#north-america" },
        { label: "Africa", href: "#africa" },
        { label: "Asia", href: "#asia" },
        { label: "Europe", href: "#europe" },
      ],
    },
    {
      title: "Our Learnings",
      items: [
        { label: "Research", href: "#research" },
        { label: "Reports", href: "#reports" },
        { label: "Insights", href: "#insights" },
        { label: "Case Studies", href: "#case-studies" },
      ],
    },
    {
      title: "News & Stories",
      items: [
        { label: "Latest News", href: "#latest-news" },
        { label: "Impact Stories", href: "#impact-stories" },
        { label: "Blog", href: "#blog" },
        { label: "Press", href: "#press" },
      ],
    },
    {
      title: "About Us",
      items: [
        { label: "About", href: "/about" },
        { label: "Our Founder", href: "#founder" },
        { label: "Leadership", href: "#leadership" },
        { label: "Mission", href: "#mission" },
        { label: "Contact", href: "#contact" },
      ],
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-sm" : "bg-white"
      }`}
      style={{ borderBottom: "1px solid #e5e5e5" }}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Text Only like Ford Foundation */}
          <a
            href="/"
            className="text-xl md:text-2xl font-semibold no-underline hover:opacity-70 leading-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            <span className="hidden sm:inline">The Gen Z Network</span>
            <span className="sm:hidden">GZ Network</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div
                key={item.title}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.title)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className="flex items-center space-x-1 px-3 py-2 text-sm hover:opacity-70 transition-opacity no-underline"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  <span>{item.title}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>

                {activeDropdown === item.title && (
                  <div className="absolute top-full left-0 mt-0 w-64 bg-white shadow-lg border border-gray-200">
                    {item.items.map((subItem) => (
                      <a
                        key={subItem.label}
                        href={subItem.href}
                        className="block px-4 py-3 text-sm hover:bg-gray-100 no-underline transition-colors"
                      >
                        {subItem.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Search Icon */}
          <button className="hidden lg:block p-2 hover:opacity-70">
            <Search className="w-5 h-5" />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="container py-4 space-y-4">
            {navItems.map((item) => (
              <div key={item.title} className="space-y-2">
                <div className="font-semibold text-sm">{item.title}</div>
                <div className="pl-4 space-y-2">
                  {item.items.map((subItem) => (
                    <a
                      key={subItem.label}
                      href={subItem.href}
                      className="block text-sm text-gray-600 no-underline hover:text-black"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {subItem.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
