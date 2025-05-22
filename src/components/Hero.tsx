
import React from "react";
import { Button } from "@/components/ui/button";
import { Ear, Volume2, MessageSquare } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-blue-light to-white py-16 md:py-24">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-dark leading-tight">
              Memahami Dunia <span className="text-blue-dark">Tuna Rungu</span>
            </h1>
            <p className="text-lg text-gray-DEFAULT">
              Portal informasi tentang tuna rungu, metode komunikasi, dan teknologi bantuan
              untuk membantu pemahaman dan inklusi yang lebih baik.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <a href="https://your-speech-to-text-tool-url.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" />
                  <span>Coba Alat Suara ke Teks</span>
                </a>
              </Button>
              <Button size="lg" variant="outline">
                Pelajari Lebih Lanjut
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-blue-light p-3 rounded-full mb-4">
                <Ear className="h-8 w-8 text-blue" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Memahami Tuna Rungu</h3>
              <p className="text-gray-DEFAULT text-sm">Pelajari tentang jenis, penyebab, dan dampak tuna rungu</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center mt-8">
              <div className="bg-teal-light p-3 rounded-full mb-4">
                <Volume2 className="h-8 w-8 text-teal-dark" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Teknologi Bantuan</h3>
              <p className="text-gray-DEFAULT text-sm">Telusuri teknologi yang membantu komunikasi tuna rungu</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-teal-light p-3 rounded-full mb-4">
                <MessageSquare className="h-8 w-8 text-teal-dark" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Metode Komunikasi</h3>
              <p className="text-gray-DEFAULT text-sm">Bahasa isyarat dan metode komunikasi lainnya</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center mt-8">
              <div className="bg-blue-light p-3 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-blue">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Komunitas & Dukungan</h3>
              <p className="text-gray-DEFAULT text-sm">Temukan komunitas dan sumber daya dukungan</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
