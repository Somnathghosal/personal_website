import React, { useState } from "react";
import { motion } from "framer-motion";

// Define the structure for collaborator logos
interface CollaboratorLogo {
  name: string;
  logoUrl: string;
  websiteUrl?: string;
}

const Collaboration: React.FC = () => {
  // Academic collaborators
  const [academicCollaborators] = useState<CollaboratorLogo[]>([
    {
      name: "University 1",
      logoUrl:
        "https://res.cloudinary.com/dq1llsy7f/image/upload/v1743140615/Academic/x2wbwc200mw045vx2kuf.png",
      websiteUrl: "",
    },
    {
      name: "University 2",
      logoUrl:
        "https://res.cloudinary.com/dq1llsy7f/image/upload/v1743705063/vpywcg59hp8hdaj4bsi3.jpg",
      websiteUrl: "",
    },
    {
      name: "University 3",
      logoUrl:
        "https://res.cloudinary.com/dq1llsy7f/image/upload/v1743705185/Media/lack2kflobaarq1xwwha.png",
      websiteUrl: "",
    },
    {
      name: "University 4",
      logoUrl:
        "https://res.cloudinary.com/dq1llsy7f/image/upload/v1743705296/Media/rxbsfkqk4e6dkxhduvzl.jpg",
      websiteUrl: "",
    },
    {
      name: "University 5",
      logoUrl:
        "https://res.cloudinary.com/dq1llsy7f/image/upload/v1743140614/Academic/ymetzmva73wd5oorlr1l.png",
      websiteUrl: "",
    },
    {
      name: "University 6",
      logoUrl:
        "https://res.cloudinary.com/dq1llsy7f/image/upload/v1743140614/Academic/uowlixutpgz2dmcnlebb.png",
      websiteUrl: "",
    },
    {
      name: "University 7",
      logoUrl:
        "https://res.cloudinary.com/dq1llsy7f/image/upload/v1743140614/Academic/wihoafzwmmjskqo2p9vq.png",
      websiteUrl: "",
    },
    {
      name: "University 8",
      logoUrl:
        "https://res.cloudinary.com/dq1llsy7f/image/upload/v1743140614/Academic/dc5f6cdp0ojvpfkvuxse.png",
      websiteUrl: "",
    },
    {
      name: "University 9",
      logoUrl:
        "https://res.cloudinary.com/dq1llsy7f/image/upload/v1743140613/Academic/g1wblh3rydtpf4m7hyir.jpg",
      websiteUrl: "",
    },
    {
      name: "University 10",
      logoUrl:
        "https://res.cloudinary.com/dq1llsy7f/image/upload/v1743140613/Academic/f0xct9o0ouway7wcdbtq.png",
      websiteUrl: "",
    },
    {
      name: "University 11",
      logoUrl:
        "https://res.cloudinary.com/dq1llsy7f/image/upload/v1743140613/Academic/jc0usicjsxobdostseut.png",
      websiteUrl: "",
    },
  ]);

  // Industry collaborators
  const [industryCollaborators] = useState<CollaboratorLogo[]>([
    {
      name: "Company 1",
      logoUrl:
        "https://res.cloudinary.com/dq1llsy7f/image/upload/v1743140574/Industry/j09ocu9zbadsf8qwoebn.webp",
      websiteUrl: "",
    },
    {
      name: "Company 2",
      logoUrl:
        "https://res.cloudinary.com/dq1llsy7f/image/upload/v1743140574/Industry/zefmkwk3fdbgb4o7pgz1.jpg",
      websiteUrl: "",
    },
    {
      name: "Company 3",
      logoUrl:
        "https://res.cloudinary.com/dq1llsy7f/image/upload/v1743140574/Industry/d3tnhx0qalxnz4jxfryl.png",
      websiteUrl: "",
    },
    {
      name: "Company 4",
      logoUrl:
        "https://res.cloudinary.com/dq1llsy7f/image/upload/v1743140574/Industry/lanjt77irxgvjmvjthri.jpg",
      websiteUrl: "",
    },
  ]);

  // Render logos
  const renderLogos = (logos: CollaboratorLogo[]) => {
    const duration = logos.length * 3.5;

    return (
      <div className="relative overflow-hidden py-4">
        <div
          className="animate-collaborators flex gap-6 w-max px-4"
          style={{
            animationDuration: `${duration}s`,
          }}
        >
          {[...logos, ...logos, ...logos].map(
            (collaborator, index) => (
              <div
                key={index}
                className="
                flex-shrink-0
                w-40
                h-28
                flex
                items-center
                justify-center
                bg-blue-50
                rounded-lg
                shadow-md
                hover:shadow-xl
                transition-all
                duration-300
                hover:scale-105
                cursor-pointer
                border
                border-blue-100
                hover:border-blue-200
              "
                onClick={() =>
                  collaborator.websiteUrl &&
                  window.open(
                    collaborator.websiteUrl,
                    "_blank"
                  )
                }
              >
                <img
                  src={collaborator.logoUrl}
                  alt={collaborator.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            )
          )}
        </div>

        <style>
          {`
            @keyframes collaborators {
              0% {
                transform: translateX(0);
              }

              100% {
                transform: translateX(-33.333%);
              }
            }

            .animate-collaborators {
              animation-name: collaborators;
              animation-timing-function: linear;
              animation-iteration-count: infinite;
            }

            .animate-collaborators:hover {
              animation-play-state: paused;
            }
          `}
        </style>
      </div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="
      container
      mx-auto
      px-4
      py-8
      md:py-12
      bg-blue-50/50
      pt-20
      md:pt-32
      lg:pt-40
      scroll-mt-20
      md:scroll-mt-24
      lg:scroll-mt-32
      "
    >
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-blue-900">
        Our Collaborators
      </h2>

      {/* Academic Partners */}
      <div className="mb-16">
        <h3 className="text-xl md:text-2xl font-semibold text-center mb-8 text-blue-800">
          Academic Partners
        </h3>

        {renderLogos(academicCollaborators)}
      </div>

      {/* Industry Partners */}
      <div>
        <h3 className="text-xl md:text-2xl font-semibold text-center mb-8 text-blue-800">
          Industry Partners
        </h3>

        {renderLogos(industryCollaborators)}
      </div>
    </motion.div>
  );
};

export default Collaboration;