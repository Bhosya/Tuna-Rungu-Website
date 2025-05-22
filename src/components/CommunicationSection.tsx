
import React from "react";
import { Accessibility, MessageSquare, Ear } from "lucide-react";

const CommunicationSection: React.FC = () => {
  return (
    <section className="section bg-gray-light">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-dark">Metode Komunikasi</h2>
          <p className="text-gray-DEFAULT max-w-3xl mx-auto">
            Terdapat berbagai metode komunikasi yang digunakan oleh komunitas tuna rungu dan kurang dengar untuk berinteraksi dengan dunia sekitar.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
            <div className="bg-blue-light p-4 rounded-full mb-4">
              <Accessibility className="h-8 w-8 text-blue" />
            </div>
            <h3 className="font-semibold text-xl mb-3">Bahasa Isyarat</h3>
            <p className="text-gray-DEFAULT">
              Bahasa visual yang menggunakan gerakan tangan, ekspresi wajah, dan postur tubuh untuk berkomunikasi. 
              Setiap negara memiliki bahasa isyarat sendiri, seperti BISINDO (Bahasa Isyarat Indonesia).
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
            <div className="bg-teal-light p-4 rounded-full mb-4">
              <MessageSquare className="h-8 w-8 text-teal-dark" />
            </div>
            <h3 className="font-semibold text-xl mb-3">Membaca Bibir</h3>
            <p className="text-gray-DEFAULT">
              Teknik memahami ucapan dengan mengamati gerakan bibir, ekspresi wajah, dan bahasa tubuh pembicara. 
              Membutuhkan konsentrasi tinggi dan pencahayaan yang baik.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
            <div className="bg-blue-light p-4 rounded-full mb-4">
              <Ear className="h-8 w-8 text-blue" />
            </div>
            <h3 className="font-semibold text-xl mb-3">Komunikasi Total</h3>
            <p className="text-gray-DEFAULT">
              Pendekatan yang menggabungkan berbagai metode komunikasi seperti bahasa isyarat, membaca bibir, 
              penulisan, dan penggunaan alat bantu dengar untuk komunikasi yang lebih efektif.
            </p>
          </div>
        </div>

        <div className="mt-12 bg-white p-6 rounded-lg shadow-sm">
          <h3 className="font-semibold text-xl mb-4 text-center">Teknologi Pendukung Komunikasi</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-l-4 border-blue p-4">
              <h4 className="font-semibold mb-2">Alat Bantu Dengar</h4>
              <p className="text-sm text-gray-DEFAULT">
                Perangkat elektronik yang memperkuat suara untuk membantu pendengaran, tersedia dalam berbagai 
                jenis seperti di belakang telinga (BTE), dalam telinga (ITE), atau implan koklea.
              </p>
            </div>
            <div className="border-l-4 border-teal-DEFAULT p-4">
              <h4 className="font-semibold mb-2">Aplikasi Pengenalan Suara</h4>
              <p className="text-sm text-gray-DEFAULT">
                Mengubah suara menjadi teks secara real-time untuk membantu orang tuna rungu mengikuti percakapan. 
                Seperti aplikasi suara-ke-teks yang Anda kembangkan!
              </p>
            </div>
            <div className="border-l-4 border-blue-dark p-4">
              <h4 className="font-semibold mb-2">Sistem Peringatan Visual</h4>
              <p className="text-sm text-gray-DEFAULT">
                Mengubah suara seperti bel pintu, alarm kebakaran, atau telepon menjadi sinyal visual seperti 
                lampu berkedip atau getaran untuk memperingatkan orang tuna rungu.
              </p>
            </div>
            <div className="border-l-4 border-teal-dark p-4">
              <h4 className="font-semibold mb-2">Layanan Penerjemah Jarak Jauh</h4>
              <p className="text-sm text-gray-DEFAULT">
                Layanan video yang menghubungkan pengguna dengan penerjemah bahasa isyarat secara real-time 
                untuk memfasilitasi komunikasi dengan orang yang bisa mendengar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunicationSection;
