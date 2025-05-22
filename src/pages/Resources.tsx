
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Resources: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 section container-custom">
        <h1 className="text-3xl font-bold mb-6 text-gray-dark">Sumber Daya</h1>
        <p className="text-gray-DEFAULT mb-8">
          Halaman ini akan berisi sumber daya dan informasi tambahan untuk tuna rungu dan keluarganya.
        </p>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <p className="text-gray-DEFAULT">Konten sedang dikembangkan.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;
