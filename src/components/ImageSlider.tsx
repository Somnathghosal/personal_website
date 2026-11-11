import React, { useState, useEffect } from "react";

interface Slide {
  url: string;
  caption?: string;
}

interface ImageSliderProps {
  slides: Slide[];
  autoPlayInterval?: number;
  height?: string;
  maxWidth?: string;
}

const ImageSlider: React.FC<ImageSliderProps> = ({
  slides,
  autoPlayInterval = 4000,
  height = "h-[450px] md:h-[78vh]",
  maxWidth = "max-w-[1400px]",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };

  useEffect(() => {
    if (slides.length <= 1) return;

    const slideInterval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, autoPlayInterval);

    return () => clearInterval(slideInterval);
  }, [slides.length, autoPlayInterval]);

  if (!slides.length) return null;

  return (
    <section className="w-full bg-[#f7f7f5] py-12 md:py-16 overflow-hidden">
      <div className="w-full mx-auto px-5 md:px-8">

        {/* Section Label */}
        <div className="max-w-[1400px] mx-auto mb-7 md:mb-9 flex items-center gap-4">
          <span className="h-px w-10 md:w-14 bg-[#2455c3]" />

          <span className="text-[11px] md:text-xs font-medium tracking-[0.22em] uppercase text-[#172033]">
            Field Documentation
          </span>
        </div>

        {/* Image Container */}
        <div
          className={`relative w-full ${maxWidth} mx-auto ${height} rounded-lg overflow-hidden bg-[#eaeae7]`}
        >
          {/* Image - Full image visible without cropping */}
          <img
            key={currentIndex}
            src={slides[currentIndex].url}
            alt={slides[currentIndex].caption || `Field documentation ${currentIndex + 1}`}
            className="w-full h-full object-contain transition-opacity duration-700"
          />

          {/* Left Arrow */}
          {slides.length > 1 && (
            <div className="absolute top-1/2 -translate-y-1/2 left-4 md:left-7 text-white">
              <button
                onClick={goToPrevious}
                aria-label="Previous image"
                className="p-2 md:p-2.5 rounded-full bg-black/30 hover:bg-black/55 transition-all duration-300 backdrop-blur-[2px]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 md:h-6 md:w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
            </div>
          )}

          {/* Right Arrow */}
          {slides.length > 1 && (
            <div className="absolute top-1/2 -translate-y-1/2 right-4 md:right-7 text-white">
              <button
                onClick={goToNext}
                aria-label="Next image"
                className="p-2 md:p-2.5 rounded-full bg-black/30 hover:bg-black/55 transition-all duration-300 backdrop-blur-[2px]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 md:h-6 md:w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>

        {/* Slide Counter */}
        <div className="max-w-[1400px] mx-auto mt-5 flex items-center justify-between">
          <span className="text-xs tracking-[0.15em] text-[#172033]/60">
            {String(currentIndex + 1).padStart(2, "0")} /{" "}
            {String(slides.length).padStart(2, "0")}
          </span>
        </div>

      </div>
    </section>
  );
};

export default ImageSlider;