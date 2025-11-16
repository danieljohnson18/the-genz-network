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
        "Mentorship Programs",
        "Workshops & Events",
        "Community Service",
        "Global Initiatives",
      ],
    },
    {
      title: "Where We Work",
      items: [
        "North America",
        "Africa",
        "Asia",
        "Europe",
      ],
    },
    {
      title: "Our Learnings",
      items: [
        "Research",
        "Reports",
        "Insights",
        "Case Studies",
      ],
    },
    {
      title: "News & Stories",
      items: [
        "Latest News",
        "Impact Stories",
        "Blog",
        "Press",
      ],
    },
    {
      title: "About Us",
      items: [
        "Our Founder",
        "Leadership",
        "Mission",
        "Contact",
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
            href="#"
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
                        key={subItem}
                        href={`#${subItem.toLowerCase().replace(/\s+/g, "-")}`}
                        className="block px-4 py-3 text-sm hover:bg-gray-100 no-underline transition-colors"
                      >
                        {subItem}
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
                      key={subItem}
                      href={`#${subItem.toLowerCase().replace(/\s+/g, "-")}`}
                      className="block text-sm text-gray-600 no-underline hover:text-black"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {subItem}
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
