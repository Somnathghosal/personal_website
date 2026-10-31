// import React, { useState, useEffect } from "react";

// interface Slide {
//   url: string;
//   caption?: string;
// }

// interface ImageSliderProps {
//   slides: Slide[];
//   autoPlayInterval?: number;
//   height?: string;
//   maxWidth?: string;
// }

// const ImageSlider: React.FC<ImageSliderProps> = ({
//   slides,
//   autoPlayInterval = 4000,
//   height = "h-[350px] md:h-[600px]",
//   maxWidth = "max-w-4xl", // narrower slider
// }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const goToSlide = (index: number) => setCurrentIndex(index);

//   const goToPrevious = () => {
//     const isFirstSlide = currentIndex === 0;
//     setCurrentIndex(isFirstSlide ? slides.length - 1 : currentIndex - 1);
//   };

//   const goToNext = () => {
//     const isLastSlide = currentIndex === slides.length - 1;
//     setCurrentIndex(isLastSlide ? 0 : currentIndex + 1);
//   };

//   useEffect(() => {
//     const slideInterval = setInterval(goToNext, autoPlayInterval);
//     return () => clearInterval(slideInterval);
//   }, [currentIndex, autoPlayInterval]);

//   return (
//     <div
//       className={`relative w-full ${maxWidth} mx-auto my-12 px-4 md:px-0 ${height} rounded-xl overflow-hidden`}
//     >
//       {/* Image container */}
//       <div
//         className="w-full h-full bg-center bg-cover duration-700 transition-all"
//         style={{
//           backgroundImage: `url(${slides[currentIndex].url})`,
//         }}
//       >
//         {slides[currentIndex].caption && (
//           <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 text-center text-sm md:text-base">
//             {slides[currentIndex].caption}
//           </div>
//         )}
//       </div>

//       {/* Left Arrow */}
//       <div className="absolute top-1/2 -translate-y-1/2 left-4 md:left-6 text-white cursor-pointer">
//         <button
//           onClick={goToPrevious}
//           className="p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 transition-all"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-5 w-5 md:h-6 md:w-6"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M15 19l-7-7 7-7"
//             />
//           </svg>
//         </button>
//       </div>

//       {/* Right Arrow */}
//       <div className="absolute top-1/2 -translate-y-1/2 right-4 md:right-6 text-white cursor-pointer">
//         <button
//           onClick={goToNext}
//           className="p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 transition-all"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-5 w-5 md:h-6 md:w-6"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M9 5l7 7-7 7"
//             />
//           </svg>
//         </button>
//       </div>

//       {/* Dots */}
//       <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => goToSlide(index)}
//             className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${
//               currentIndex === index
//                 ? "bg-white"
//                 : "bg-white bg-opacity-50 hover:bg-opacity-80"
//             }`}
//           ></button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ImageSlider;








































































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
  height = "h-[400px] md:h-[72vh]",
  maxWidth = "max-w-[1500px]",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index: number) => setCurrentIndex(index);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    setCurrentIndex(isFirstSlide ? slides.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    setCurrentIndex(isLastSlide ? 0 : currentIndex + 1);
  };

  useEffect(() => {
    const slideInterval = setInterval(goToNext, autoPlayInterval);

    return () => clearInterval(slideInterval);
  }, [currentIndex, autoPlayInterval]);

  return (
    <section className="w-full bg-[#f7f7f5] py-12 md:py-16 overflow-hidden">
      <div className="w-full mx-auto px-5 md:px-8">

        {/* Section Label */}
        <div className="max-w-[1500px] mx-auto mb-7 md:mb-9 flex items-center gap-4">
          <span className="h-px w-10 md:w-14 bg-[#2455c3]" />

          <span className="text-[11px] md:text-xs font-medium tracking-[0.22em] uppercase text-[#172033]">
            Field Documentation
          </span>
        </div>

        {/* Image Container */}
        <div
          className={`relative w-full ${maxWidth} mx-auto ${height} rounded-lg overflow-hidden`}
        >
          <div
            className="w-full h-full bg-center bg-cover duration-700 transition-all"
            style={{
              backgroundImage: `url(${slides[currentIndex].url})`,
            }}
          />

          {/* Left Arrow */}
          <div className="absolute top-1/2 -translate-y-1/2 left-4 md:left-7 text-white">
            <button
              onClick={goToPrevious}
              aria-label="Previous image"
              className="p-2 md:p-2.5 rounded-full bg-black/25 hover:bg-black/45 transition-all duration-300 backdrop-blur-[2px]"
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

          {/* Right Arrow */}
          <div className="absolute top-1/2 -translate-y-1/2 right-4 md:right-7 text-white">
            <button
              onClick={goToNext}
              aria-label="Next image"
              className="p-2 md:p-2.5 rounded-full bg-black/25 hover:bg-black/45 transition-all duration-300 backdrop-blur-[2px]"
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
        </div>

        {/* Slide Counter */}
        <div className="max-w-[1500px] mx-auto mt-5 flex items-center justify-between">
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