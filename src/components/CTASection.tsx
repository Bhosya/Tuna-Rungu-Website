
import React from "react";
import { Button } from "@/components/ui/button";
import { MessageSquare, ArrowRight } from "lucide-react";

const CTASection: React.FC = () => {
  return (
    <section className="section bg-gradient-to-r from-blue to-blue-dark text-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Coba Alat Suara ke Teks Kami
          </h2>
          <p className="text-lg mb-8 text-white/90">
            Alat kami mengubah suara menjadi teks secara real-time, membantu memudahkan komunikasi 
            antara tuna rungu dan orang yang dapat mendengar. Mudah digunakan dan tersedia secara gratis.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="secondary" className="bg-white text-blue hover:bg-blue-light" asChild>
              <a href="https://your-speech-to-text-tool-url.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                <span>Coba Sekarang</span>
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
              <a href="#" className="flex items-center gap-2">
                <span>Pelajari Cara Menggunakan</span>
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
