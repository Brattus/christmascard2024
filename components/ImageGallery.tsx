"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import { useState } from "react";
import { ImageModal } from "./ImageModal";

const images = [
  "https://images.unsplash.com/photo-1543589077-47d81606c1bf?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1512389142860-9c449e58a543?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1544457070-4cd773b4d71e?q=80&w=1200&auto=format&fit=crop",
];

export function ImageGallery() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const handleNext = () => {
    setSelectedImageIndex((prev) => 
      prev !== null ? (prev + 1) % images.length : null
    );
  };

  const handlePrevious = () => {
    setSelectedImageIndex((prev) => 
      prev !== null ? (prev - 1 + images.length) % images.length : null
    );
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {images.map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Card 
              className="overflow-hidden bg-white/10 backdrop-blur-sm border-white/20 cursor-pointer"
              onClick={() => setSelectedImageIndex(index)}
            >
              <AspectRatio ratio={4/3} className="relative">
                <Image
                  src={src}
                  alt={`Christmas scene ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={index === 0}
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </AspectRatio>
            </Card>
          </motion.div>
        ))}
      </div>
      
      <ImageModal
        isOpen={selectedImageIndex !== null}
        onClose={() => setSelectedImageIndex(null)}
        src={selectedImageIndex !== null ? images[selectedImageIndex] : ""}
        onNext={handleNext}
        onPrevious={handlePrevious}
      />
    </>
  );
}