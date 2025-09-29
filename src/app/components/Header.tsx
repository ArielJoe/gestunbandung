"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const scrollToSection = (id: string, offset: number = 0) => {
    const element = document.getElementById(id);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Brand */}
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/rajawali_group.png"
            alt="Rajawali Group"
            width={55}
            height={55}
          />
          <span className="ml-3 font-bold text-2xl text-[var(--secondary-blue)]">
            Rajawali Group
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 text-black font-semibold text-lg">
          {[
            { id: "about", label: "Tentang Kami", offset: 110 },
            { id: "adv", label: "Keunggulan", offset: 90 },
            { id: "review", label: "Review", offset: 115 },
            { id: "loc", label: "Lokasi", offset: 80 },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id, item.offset)}
              className="cursor-pointer hover:bg-[var(--secondary-blue)] hover:text-white transition-colors px-4 py-2 rounded-md"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden cursor-pointer" onClick={toggleSidebar}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isSidebarOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden bg-white shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${
          isSidebarOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="flex flex-col space-y-3 p-6 text-lg font-semibold">
          {[
            { id: "about", label: "Tentang Kami", offset: 100 },
            { id: "adv", label: "Keunggulan", offset: 95 },
            { id: "review", label: "Review", offset: 115 },
            { id: "loc", label: "Lokasi", offset: 85 },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => {
                scrollToSection(item.id, item.offset);
                toggleSidebar();
              }}
              className="cursor-pointer text-left text-black hover:bg-[var(--secondary-blue)] hover:text-white transition-colors py-3 px-4 rounded-md"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
