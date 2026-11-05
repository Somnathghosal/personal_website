import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Modal from "./Modal";

const Mission = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      id="mission"
      className="relative min-h-[75vh] overflow-hidden bg-[#f7f7f5] text-[#172033]"
    >
      <div className="relative mx-auto flex min-h-[75vh] max-w-[1600px] flex-col px-6 py-12 sm:px-10 lg:px-20 lg:py-16">
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-[#d8dadd] pb-6">
          <div className="flex items-center gap-4">
            <span className="text-xs tracking-[0.15em] text-[#8b929e]">
              02
            </span>

            <span className="h-px w-10 bg-[#2455c3]" />

            <span className="text-xs font-medium uppercase tracking-[0.28em] text-[#2455c3]">
              Our Mission
            </span>
          </div>

          <span className="hidden text-[10px] uppercase tracking-[0.2em] text-[#8b929e] sm:block">
            Ghosal Research Group
          </span>
        </div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="grid flex-1 grid-cols-1 gap-10 py-12 lg:grid-cols-12 lg:gap-16 lg:py-16"
        >
          {/* Heading */}
          <div className="lg:col-span-7">
            <h2 className="max-w-4xl text-[clamp(2.8rem,6vw,6rem)] font-semibold leading-[0.98] tracking-[-0.055em]">
              Developing{" "}
              <span className="text-[#2455c3]">Sustainable</span>{" "}
              Solutions for Rural Communities
            </h2>

            <div className="mt-8 h-[2px] w-20 bg-[#2455c3]" />
          </div>

          {/* Summary and Link */}
          <div className="flex flex-col justify-between gap-10 lg:col-span-5">
            <p className="max-w-2xl text-base leading-relaxed text-[#526078] sm:text-lg lg:text-xl">
              To develop and implement cost-effective, innovative technical and
              engineering solutions that directly address the daily challenges
              faced by communities in rural areas. Through our dedicated
              approach, we aim to transform the quality of life in underserved
              regions.
            </p>

            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="group flex w-fit items-center gap-4 text-left"
            >
              <span className="border-b border-[#172033] pb-1 text-sm font-medium text-[#172033] transition-colors duration-300 group-hover:border-[#2455c3] group-hover:text-[#2455c3] sm:text-base">
                Explore Our Mission
              </span>

              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#2455c3] text-white transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight size={16} />
              </span>
            </button>
          </div>
        </motion.div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-[#d8dadd] pt-6">
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#8b929e]">
            Mission
          </span>

          <span className="text-[10px] tracking-[0.2em] text-[#8b929e]">
            02 / 03
          </span>
        </div>
      </div>

      {/* Mission Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Our Mission"
      >
        <div className="space-y-6">
          <p>
            Our mission is to develop and implement cost-effective, innovative
            technical and engineering solutions that directly address the daily
            challenges faced by communities in rural areas. We focus on
            designing sustainable infrastructure that improves living
            conditions and responds to local needs.
          </p>

          <p>
            We aim to enhance nature-friendly livelihoods by supporting both
            soft and hard infrastructure development. Our work seeks to create
            opportunities that strengthen communities and improve access to
            essential resources and services.
          </p>

          <p>
            Through the promotion of sustainable practices, we strive to
            foster self-reliance and empowerment, enabling rural communities
            to build resilient futures and improve their quality of life.
          </p>
        </div>
      </Modal>
    </section>
  );
};

export default Mission;