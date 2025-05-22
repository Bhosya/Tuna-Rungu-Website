
import React from "react";
import { Headphones } from "lucide-react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-dark text-white py-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Headphones className="h-6 w-6 text-blue" />
              <h2 className="text-xl font-bold">InfoTunaDengar</h2>
            </div>
            <p className="text-gray-light mb-6">
              Portal informasi untuk meningkatkan pemahaman tentang tuna rungu dan 
              menyediakan sumber daya untuk mendukung komunikasi yang lebih baik.
            </p>
            <p className="text-sm text-gray-light">
              © {new Date().getFullYear()} InfoTunaDengar. Hak cipta dilindungi undang-undang.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Tautan Cepat</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-light hover:text-blue transition-colors">Beranda</Link></li>
              <li><Link to="/jenis-tuna-rungu" className="text-gray-light hover:text-blue transition-colors">Jenis Tuna Rungu</Link></li>
              <li><Link to="/komunikasi" className="text-gray-light hover:text-blue transition-colors">Metode Komunikasi</Link></li>
              <li><Link to="/resources" className="text-gray-light hover:text-blue transition-colors">Sumber Daya</Link></li>
              <li><a href="https://your-speech-to-text-tool-url.com" target="_blank" rel="noopener noreferrer" className="text-blue hover:text-blue-light transition-colors">Alat Suara ke Teks</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Hubungi Kami</h3>
            <ul className="space-y-2">
              <li className="text-gray-light">email@infotunadenar.com</li>
              <li className="text-gray-light">+62 123 4567 890</li>
              <li className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-light hover:text-blue transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-light hover:text-blue transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-light hover:text-blue transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
