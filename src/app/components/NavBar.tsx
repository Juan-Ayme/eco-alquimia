"use client";

import { Trees, Menu, X } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from 'react';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-black/50 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        <div className="flex items-center gap-2">
          <Trees className="h-8 w-8 text-green-600" />
          <Link href="/" className="text-white hover:text-green-500 font-semibold">
            Inicio
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/sobre-nosotros" className="text-white hover:text-green-500 transition-colors">
            Sobre Nosotros
          </Link>
          <Link href="/proyectos" className="text-white hover:text-green-500 transition-colors">
            Proyectos
          </Link>
          <Link href="/blog" className="text-white hover:text-green-500 transition-colors">
            Blog
          </Link>
          <Link href="/donacion">
            <Button className="text-white bg-green-600 hover:bg-green-700 transition-colors">
              Donar
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            className="text-white hover:text-green-500 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-sm border-b border-white/10 p-4 md:hidden space-y-4">
          <Link href="/sobre-nosotros" className="block text-white hover:text-green-500 py-2 transition-colors">
            Sobre Nosotros
          </Link>
          <Link href="/proyectos" className="block text-white hover:text-green-500 py-2 transition-colors">
            Proyectos
          </Link>
          <Link href="/blog" className="block text-white hover:text-green-500 py-2 transition-colors">
            Blog
          </Link>
          <Link href="/donacion" className="block">
            <Button className="text-white w-full bg-green-600 hover:bg-green-700 transition-colors">
              Donar
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
}