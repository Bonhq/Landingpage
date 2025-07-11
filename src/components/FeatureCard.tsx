
import React from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface FeatureCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const FeatureCard = ({ title, description, imageSrc, imageAlt }: FeatureCardProps) => {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-900/90 to-black/95 backdrop-blur-sm border border-gray-800/50 shadow-2xl">
      <AspectRatio ratio={3/4} className="relative">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/20" />
        
        <div className="absolute top-0 left-0 right-0 p-6 text-white">
          <h3 className="text-xl font-bold mb-3 leading-tight">
            {title}
          </h3>
          <p className="text-sm text-gray-300 leading-relaxed opacity-90">
            {description}
          </p>
        </div>
      </AspectRatio>
    </div>
  );
};

export default FeatureCard;
