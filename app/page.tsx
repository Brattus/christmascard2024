import { Snowfall } from "@/components/Snowfall";
import { ChristmasHeader } from "@/components/ChristmasHeader";
import { ImageGallery } from "@/components/ImageGallery";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white relative overflow-hidden">
      <Snowfall />
      <div className="container mx-auto px-4 py-20">
        <ChristmasHeader />
        <ImageGallery />
      </div>
    </main>
  );
}