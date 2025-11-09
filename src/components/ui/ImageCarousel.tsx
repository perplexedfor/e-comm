// src/components/ui/ImageCarousel.tsx

'use client';

import React, { useState, useEffect, useCallback } from 'react';
// === THE FIX IS ON THE NEXT TWO LINES ===
import useEmblaCarousel from 'embla-carousel-react';
import EmblaOptionsType  from 'embla-carousel-react'; // This correctly imports the type
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

type PropType = {
  slides: string[];
  options?: any;
  altText: string;
};

const ImageCarousel: React.FC<PropType> = (props) => {
  const { slides, options, altText } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative w-full h-full">
      <div className="overflow-hidden w-full h-full" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((src, index) => (
            <div className="relative flex-[0_0_100%] h-full" key={index}>
              <Image src={src} alt={`${altText} - view ${index + 1}`} fill className="object-contain p-4" />
            </div>
          ))}
        </div>
      </div>

      <button
        className="absolute top-1/2 left-2 -translate-y-1/2 rounded-full bg-white/70 p-1 text-slate-800 shadow-md transition hover:bg-white disabled:opacity-0"
        onClick={scrollPrev}
        disabled={prevBtnDisabled}
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        className="absolute top-1/2 right-2 -translate-y-1/2 rounded-full bg-white/70 p-1 text-slate-800 shadow-md transition hover:bg-white disabled:opacity-0"
        onClick={scrollNext}
        disabled={nextBtnDisabled}
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
};

export default ImageCarousel;