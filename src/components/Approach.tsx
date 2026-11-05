import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Modal from "./Modal";

const Approach = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      id="approach"
      className="relative min-h-[75vh] overflow-hidden bg-[#232323] text-white"
    >
      <div className="mx-auto flex min-h-[75vh] max-w-[1500px] items-center px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="w-full"
        >
          {/* Top Meta */}
          <div className="mb-10 flex items-center justify-between border-b border-white/15 pb-5 sm:mb-12">
            <div className="flex items-center gap-4">
              <span className="text-xs font-medium tracking-[0.18em] text-white/50">
                03
              </span>

              <span className="h-px w-8 bg-[#8eace6]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#8eace6] sm:text-xs">
                Our Approach
              </span>
            </div>

            <span className="hidden text-[10px] uppercase tracking-[0.2em] text-white/40 sm:block">
              Ghosal Research Group
            </span>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left — Main Statement */}
            <div className="lg:col-span-7">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{
                  duration: 0.8,
                  delay: 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="max-w-4xl text-[clamp(2.8rem,5vw,5.5rem)] font-bold leading-[0.95] tracking-[-0.045em] text-white"
              >
                Research-Driven{" "}
                <span className="text-[#8eace6]">Interventions</span>{" "}
                for Social Impact
              </motion.h2>

              {/* Accent Line */}
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: 64, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.35 }}
                className="mt-8 h-[2px] bg-[#8eace6]"
              />
            </div>

            {/* Right — Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{
                duration: 0.8,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-col justify-between lg:col-span-5"
            >
              <p className="max-w-xl text-base leading-[1.75] text-white/70 sm:text-lg lg:text-xl">
                At the heart of our approach lies a profound commitment to
                empowering socio-economically marginalized communities through
                innovative, research-driven interventions. We recognize that
                sustainable development is about deeply understanding the unique
                contextual challenges.
              </p>

              {/* Discover Methodology */}
              <motion.button
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsModalOpen(true)}
                className="group mt-10 flex w-fit items-center gap-3 text-sm font-semibold text-white sm:text-base"
              >
                <span className="border-b border-white/70 pb-1 transition-colors duration-300 group-hover:border-[#8eace6] group-hover:text-[#8eace6]">
                  Discover Our Methodology
                </span>

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#8eace6] text-[#172033] transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </motion.button>
            </motion.div>
          </div>

          {/* Approach Principle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-16 border-y border-white/15 py-6 sm:mt-20 sm:py-7"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-white/40 sm:text-[10px]">
                Our Principle
              </span>

              <p className="max-w-3xl text-sm font-medium italic leading-relaxed text-white/80 sm:text-base">
                "We don't just see challenges; we see opportunities for
                collaborative, sustainable transformation."
              </p>
            </div>
          </motion.div>

          {/* Bottom Rule */}
          <div className="mt-8 pt-5">
            <div className="flex items-center justify-between text-[9px] uppercase tracking-[0.2em] text-white/40 sm:text-[10px]">
              <span>Approach</span>
              <span>03 / 03</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Approach Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Our Approach"
      >
        <div className="space-y-6">
          <p>
            At the heart of our approach lies a profound commitment to
            empowering socio-economically marginalized communities through{" "}
            <span className="font-semibold text-blue-700">
              innovative, research-driven interventions
            </span>
            . We recognize that sustainable development is not about
            implementing one-size-fits-all solutions, but about deeply
            understanding the unique contextual challenges and potential of each
            community we engage with.
          </p>

          <p>
            Our{" "}
            <span className="font-semibold text-blue-700">
              Action Research methodology
            </span>{" "}
            is a dynamic and participatory approach that goes beyond traditional
            research paradigms. We don't just observe or analyze communities;
            we actively collaborate with local stakeholders, ensuring that
            every intervention is co-created, culturally sensitive, and aligned
            with the community's aspirations and existing strengths.
          </p>

          <p>
            Our ultimate goal is not just to implement projects, but to
            catalyze transformative change that empowers communities to become
            architects of their own development. By combining rigorous academic
            research with grassroots-level understanding, we strive to create
            meaningful, lasting impact that transcends traditional boundaries
            of academic and social intervention.
          </p>

          <p className="font-semibold italic text-blue-800">
            "We don't just see challenges; we see opportunities for
            collaborative, sustainable transformation."
          </p>

          <p>
            By focusing on sustainable practices and inclusive growth, we aim
            to create meaningful and lifelong changes for the communities we
            serve.
          </p>
        </div>
      </Modal>
    </section>
  );
};

export default Approach;