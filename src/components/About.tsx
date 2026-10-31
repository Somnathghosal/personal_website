// import { useState } from "react";
// import { Eye, ArrowRight } from "lucide-react";
// import { motion } from "framer-motion";
// import Modal from "./Modal";

// const About = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   return (
//     <div className="py-16 bg-white overflow-hidden">
//       <div className="container mx-auto px-4 md:px-6">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           className="relative group max-w-4xl mx-auto"
//         >
//           {/* Decorative background element */}
//           <div className="absolute -inset-4 bg-blue-50/50 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />

//           <div className="bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
//             <div className="flex flex-col md:flex-row h-full">
//               {/* Left sidebar with icon */}
//               <div className="w-full md:w-32 bg-blue-900 flex items-center justify-center p-6 md:p-0">
//                 <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm">
//                   <Eye className="text-white h-10 w-10" />
//                 </div>
//               </div>

//               {/* Content area */}
//               <div className="flex-1 p-8 md:p-12">
//                 <div className="inline-flex items-center space-x-2 text-blue-900 font-bold mb-4 uppercase tracking-wider text-sm">
//                   <div className="w-8 h-[2px] bg-blue-900" />
//                   <span>Our Vision</span>
//                 </div>

//                 <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-serif">
//                   Empowering Communities for <span className="text-blue-900 underline decoration-blue-200 underline-offset-8">Transformative</span> Social Change
//                 </h2>

//                 <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-8 line-clamp-3">
//                   It is rooted in a profound commitment to transformative social change, focusing on empowering marginalized communities through a holistic approach to development. We are dedicated to systematically addressing the United Nations Sustainable Development Goals by creating comprehensive strategies that transcend traditional humanitarian efforts.
//                 </p>

//                 <motion.button
//                   whileHover={{ x: 5 }}
//                   onClick={() => setIsModalOpen(true)}
//                   className="flex items-center space-x-3 text-blue-900 font-bold text-lg group/btn"
//                 >
//                   <span className="border-b-2 border-blue-900 pb-1 group-hover/btn:border-blue-700 transition-colors">Read Full Vision</span>
//                   <ArrowRight className="h-5 w-5 bg-blue-900 text-white rounded-full p-1 group-hover/btn:scale-110 transition-transform" />
//                 </motion.button>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </div>

//       {/* Vision Modal */}
//       <Modal
//         isOpen={isModalOpen}
//         onClose={() => setIsModalOpen(false)}
//         title="Our Vision"
//       >
//         <div className="space-y-6">
//           <p>
//             It is rooted in a profound commitment to transformative social change, focusing on empowering marginalized communities through a holistic approach to development. We are dedicated to systematically addressing the <span className="font-semibold text-blue-900">United Nations Sustainable Development Goals</span> by creating comprehensive strategies that transcend traditional humanitarian efforts.
//           </p>
//           <p>
//             At the core of our vision lies a deep understanding that sustainable progress requires a multifaceted approach. We aim to <span className="font-semibold text-blue-900">strategically intervene in critical areas</span> such as education, healthcare, economic opportunities, and infrastructure development. By targeting these fundamental pillars, we seek to dismantle the structural barriers that perpetuate inequality between urban and rural landscapes.
//           </p>
//           <p>
//             Our comprehensive strategy focuses on innovative, context-specific interventions that are designed to be scalable and adaptable. We believe in leveraging cutting-edge technologies and sustainable solutions to provide communities with <span className="font-semibold text-blue-900">practical, affordable, and transformative resources</span>. From implementing digital learning platforms in remote schools to developing affordable healthcare technologies and creating sustainable economic models, our approach is intentionally dynamic and responsive to local needs.
//           </p>
//           <p>
//             Ultimately, we envision a future where geographical boundaries and economic constraints no longer dictate an individual's potential. By providing equitable access to knowledge, resources, and opportunities, we are not just addressing immediate challenges but cultivating a generation empowered to drive their own sustainable development and create lasting, positive change in their communities.
//           </p>
//         </div>
//       </Modal>
//     </div>
//   );
// };

// export default About;






























































































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
        bg-[#f7f7f5]
        text-[#172033]
      "
    >
      {/* =====================================================
          MAIN VISION SECTION
      ===================================================== */}
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
          initial={{
            opacity: 0,
            y: 45,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="w-full"
        >

          {/* =================================================
              TOP META
          ================================================= */}
          <div
            className="
              mb-10
              flex
              items-center
              justify-between
              border-b
              border-[#d8dadd]
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
                  text-[#9aa0aa]
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
                  text-[#2455c3]
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
                text-[#9aa0aa]
                sm:block
              "
            >
              Ghosal Research Group
            </span>

          </div>


          {/* =================================================
              CONTENT GRID
          ================================================= */}
          <div
            className="
              grid
              grid-cols-1
              gap-12
              lg:grid-cols-12
              lg:gap-16
          "
          >

            {/* =================================================
                LEFT — MAIN STATEMENT
            ================================================= */}
            <div className="lg:col-span-7">

              <motion.h2
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.35,
                }}
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
                  text-[#172033]
                "
              >
                Empowering Communities for{" "}

                <span className="text-[#2455c3]">
                  Transformative
                </span>{" "}

                Social Change
              </motion.h2>


              {/* Accent line */}
              <motion.div
                initial={{
                  width: 0,
                  opacity: 0,
                }}
                whileInView={{
                  width: 64,
                  opacity: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.35,
                }}
                className="
                  mt-8
                  h-[2px]
                  bg-[#2455c3]
                "
              />

            </div>


            {/* =================================================
                RIGHT — DESCRIPTION
            ================================================= */}
            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.35,
              }}
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
                    text-[#596579]
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


              {/* =================================================
                  READ FULL VISION
              ================================================= */}
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
                  text-[#172033]
                  sm:text-base
                "
              >

                <span
                  className="
                    border-b
                    border-[#172033]
                    pb-1
                    transition-colors
                    duration-300
                    group-hover:border-[#2455c3]
                    group-hover:text-[#2455c3]
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


          {/* =================================================
              BOTTOM RULE
          ================================================= */}
          <div
            className="
              mt-16
              border-t
              border-[#d8dadd]
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
                text-[#9aa0aa]
                sm:text-[10px]
              "
            >

              <span>
                Vision
              </span>

              <span>
                01 / 03
              </span>

            </div>

          </div>

        </motion.div>

      </div>


      {/* =====================================================
          VISION MODAL
      ===================================================== */}
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