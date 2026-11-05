import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Modal from "./Modal";

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      id="vision"
      className="
        relative
        min-h-[75vh]
        overflow-hidden
        bg-[#232323]
        text-white
      "
    >
      {/* MAIN VISION SECTION */}
      <div
        className="
          mx-auto
          flex
          min-h-[75vh]
          max-w-[1500px]
          items-center
          px-6
          py-20
          sm:px-10
          sm:py-24
          lg:px-16
          lg:py-28
        "
      >
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
          {/* TOP META */}
          <div
            className="
              mb-10
              flex
              items-center
              justify-between
              border-b
              border-white/15
              pb-5
              sm:mb-12
            "
          >
            <div className="flex items-center gap-4">
              <span
                className="
                  text-xs
                  font-medium
                  tracking-[0.18em]
                  text-white/45
                "
              >
                01
              </span>

              <span className="h-px w-8 bg-[#2455c3]" />

              <span
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.28em]
                  text-[#8eace6]
                  sm:text-xs
                "
              >
                Our Vision
              </span>
            </div>

            <span
              className="
                hidden
                text-[10px]
                uppercase
                tracking-[0.2em]
                text-white/45
                sm:block
              "
            >
              Ghosal Research Group
            </span>
          </div>

          {/* CONTENT GRID */}
          <div
            className="
              grid
              grid-cols-1
              gap-12
              lg:grid-cols-12
              lg:gap-16
            "
          >
            {/* LEFT — MAIN STATEMENT */}
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
                className="
                  max-w-4xl
                  text-[clamp(2.8rem,5vw,5.5rem)]
                  font-bold
                  leading-[0.95]
                  tracking-[-0.045em]
                  text-white
                "
              >
                Empowering Communities for{" "}
                <span className="text-[#8eace6]">
                  Transformative
                </span>{" "}
                Social Change
              </motion.h2>

              {/* Accent line */}
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: 64, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: 0.35,
                }}
                className="mt-8 h-[2px] bg-[#8eace6]"
              />
            </div>

            {/* RIGHT — DESCRIPTION */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{
                duration: 0.8,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                flex
                flex-col
                justify-between
                lg:col-span-5
              "
            >
              <div>
                <p
                  className="
                    max-w-xl
                    text-base
                    leading-[1.75]
                    text-white/70
                    sm:text-lg
                    lg:text-xl
                  "
                >
                  It is rooted in a profound commitment to
                  transformative social change, focusing on
                  empowering marginalized communities through
                  a holistic approach to development. We are
                  dedicated to systematically addressing the
                  United Nations Sustainable Development Goals
                  by creating comprehensive strategies that
                  transcend traditional humanitarian efforts.
                </p>
              </div>

              {/* READ FULL VISION */}
              <motion.button
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsModalOpen(true)}
                className="
                  group
                  mt-10
                  flex
                  w-fit
                  items-center
                  gap-3
                  text-sm
                  font-semibold
                  text-white
                  sm:text-base
                "
              >
                <span
                  className="
                    border-b
                    border-white/70
                    pb-1
                    transition-colors
                    duration-300
                    group-hover:border-[#8eace6]
                    group-hover:text-[#8eace6]
                  "
                >
                  Read Full Vision
                </span>

                <span
                  className="
                    flex
                    h-7
                    w-7
                    items-center
                    justify-center
                    rounded-full
                    bg-[#2455c3]
                    text-white
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                >
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </motion.button>
            </motion.div>
          </div>

          {/* BOTTOM RULE */}
          <div
            className="
              mt-16
              border-t
              border-white/15
              pt-5
              sm:mt-20
            "
          >
            <div
              className="
                flex
                items-center
                justify-between
                text-[9px]
                uppercase
                tracking-[0.2em]
                text-white/45
                sm:text-[10px]
              "
            >
              <span>Vision</span>
              <span>01 / 03</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* VISION MODAL */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Our Vision"
      >
        <div className="space-y-6">
          <p>
            It is rooted in a profound commitment to transformative
            social change, focusing on empowering marginalized
            communities through a holistic approach to development.
            We are dedicated to systematically addressing the{" "}
            <span className="font-semibold text-blue-900">
              United Nations Sustainable Development Goals
            </span>{" "}
            by creating comprehensive strategies that transcend
            traditional humanitarian efforts.
          </p>

          <p>
            At the core of our vision lies a deep understanding that
            sustainable progress requires a multifaceted approach.
            We aim to{" "}
            <span className="font-semibold text-blue-900">
              strategically intervene in critical areas
            </span>{" "}
            such as education, healthcare, economic opportunities,
            and infrastructure development. By targeting these
            fundamental pillars, we seek to dismantle the structural
            barriers that perpetuate inequality between urban and
            rural landscapes.
          </p>

          <p>
            Our comprehensive strategy focuses on innovative,
            context-specific interventions that are designed to be
            scalable and adaptable. We believe in leveraging
            cutting-edge technologies and sustainable solutions to
            provide communities with{" "}
            <span className="font-semibold text-blue-900">
              practical, affordable, and transformative resources
            </span>
            . From implementing digital learning platforms in remote
            schools to developing affordable healthcare technologies
            and creating sustainable economic models, our approach
            is intentionally dynamic and responsive to local needs.
          </p>

          <p>
            Ultimately, we envision a future where geographical
            boundaries and economic constraints no longer dictate an
            individual's potential. By providing equitable access to
            knowledge, resources, and opportunities, we are not just
            addressing immediate challenges but cultivating a
            generation empowered to drive their own sustainable
            development and create lasting, positive change in their
            communities.
          </p>
        </div>
      </Modal>
    </section>
  );
};

export default About;