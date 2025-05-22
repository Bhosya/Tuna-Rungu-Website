
import React from "react";
import { Button } from "@/components/ui/button";
import { Headphones } from "lucide-react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm py-4">
      <div className="container-custom flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Headphones className="h-6 w-6 text-blue" />
          <h1 className="text-xl font-bold text-gray-dark">InfoTunaDengar</h1>
        </div>
        <nav>
          <ul className="hidden md:flex items-center space-x-8">
            <li><Link to="/" className="text-gray-dark hover:text-blue transition-colors">Beranda</Link></li>
            <li><Link to="/jenis-tuna-rungu" className="text-gray-dark hover:text-blue transition-colors">Jenis Tuna Rungu</Link></li>
            <li><Link to="/komunikasi" className="text-gray-dark hover:text-blue transition-colors">Metode Komunikasi</Link></li>
            <li><Link to="/resources" className="text-gray-dark hover:text-blue transition-colors">Sumber Daya</Link></li>
          </ul>
          <Button className="md:hidden" variant="ghost" size="sm">
            <span className="sr-only">Buka menu</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
