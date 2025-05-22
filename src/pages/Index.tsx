
import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import InfoSection from "@/components/InfoSection";
import CommunicationSection from "@/components/CommunicationSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main>
        <Hero />
        <InfoSection />
        <CommunicationSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
