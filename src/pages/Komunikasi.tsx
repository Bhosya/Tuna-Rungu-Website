
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Komunikasi: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 section container-custom">
        <h1 className="text-3xl font-bold mb-6 text-gray-dark">Metode Komunikasi</h1>
        <p className="text-gray-DEFAULT mb-8">
          Halaman ini akan berisi informasi detail tentang berbagai metode komunikasi untuk tuna rungu.
        </p>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <p className="text-gray-DEFAULT">Konten sedang dikembangkan.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Komunikasi;
