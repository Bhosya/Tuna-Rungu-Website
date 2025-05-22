import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const InfoSection: React.FC = () => {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-dark">
            Memahami Tuna Rungu
          </h2>
          <p className="text-gray-DEFAULT max-w-3xl mx-auto">
            Gangguan pendengaran atau tuna rungu adalah kondisi di mana
            seseorang mengalami penurunan atau kehilangan kemampuan mendengar,
            baik sebagian maupun seluruhnya.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="border-t-4 border-t-blue">
            <CardHeader>
              <CardTitle>Jenis Tuna Rungu</CardTitle>
              <CardDescription>Berdasarkan lokasi gangguan</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div>
                <h4 className="font-semibold">Konduktif</h4>
                <p className="text-sm text-gray-DEFAULT">
                  Gangguan pada telinga bagian luar atau tengah yang menghambat
                  transmisi suara
                </p>
              </div>
              <div>
                <h4 className="font-semibold">Sensorineural</h4>
                <p className="text-sm text-gray-DEFAULT">
                  Kerusakan pada telinga bagian dalam atau saraf pendengaran
                </p>
              </div>
              <div>
                <h4 className="font-semibold">Campuran</h4>
                <p className="text-sm text-gray-DEFAULT">
                  Kombinasi dari gangguan konduktif dan sensorineural
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-t-teal-DEFAULT">
            <CardHeader>
              <CardTitle>Tingkat Gangguan</CardTitle>
              <CardDescription>Berdasarkan derajat keparahan</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div>
                <h4 className="font-semibold">Ringan (26-40 dB)</h4>
                <p className="text-sm text-gray-DEFAULT">
                  Kesulitan mendengar suara pelan atau percakapan dari jarak
                  jauh
                </p>
              </div>
              <div>
                <h4 className="font-semibold">Sedang (41-60 dB)</h4>
                <p className="text-sm text-gray-DEFAULT">
                  Kesulitan mendengar percakapan normal tanpa alat bantu dengar
                </p>
              </div>
              <div>
                <h4 className="font-semibold">Berat (61-80 dB)</h4>
                <p className="text-sm text-gray-DEFAULT">
                  Hanya dapat mendengar suara keras, memerlukan alat bantu
                  dengar
                </p>
              </div>
              <div>
                <h4 className="font-semibold">Sangat Berat ({">"}80 dB)</h4>
                <p className="text-sm text-gray-DEFAULT">
                  Tidak dapat mendengar sebagian besar suara, termasuk suara
                  keras
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-t-blue-dark md:col-span-2 lg:col-span-1">
            <CardHeader>
              <CardTitle>Penyebab Umum</CardTitle>
              <CardDescription>
                Berbagai faktor penyebab tuna rungu
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div>
                <h4 className="font-semibold">Genetik</h4>
                <p className="text-sm text-gray-DEFAULT">
                  Tuna rungu yang diturunkan dari orangtua
                </p>
              </div>
              <div>
                <h4 className="font-semibold">Komplikasi saat lahir</h4>
                <p className="text-sm text-gray-DEFAULT">
                  Kelahiran prematur atau trauma saat kelahiran
                </p>
              </div>
              <div>
                <h4 className="font-semibold">Infeksi telinga</h4>
                <p className="text-sm text-gray-DEFAULT">
                  Infeksi berulang dapat merusak organ pendengaran
                </p>
              </div>
              <div>
                <h4 className="font-semibold">Paparan suara keras</h4>
                <p className="text-sm text-gray-DEFAULT">
                  Kebisingan tinggi dalam waktu lama dapat merusak pendengaran
                </p>
              </div>
              <div>
                <h4 className="font-semibold">Penuaan</h4>
                <p className="text-sm text-gray-DEFAULT">
                  Presbycusis, gangguan pendengaran terkait usia
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
