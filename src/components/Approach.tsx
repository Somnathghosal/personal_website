// import { useState } from "react";
// import { Compass, ArrowRight } from "lucide-react";
// import { motion } from "framer-motion";
// import Modal from "./Modal";

// const Approach = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   return (
//     <div className="py-16 bg-white overflow-hidden">
//       <div className="container mx-auto px-4 md:px-6">
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           className="relative group max-w-4xl mx-auto"
//         >
//           {/* Decorative background element */}
//           <div className="absolute -inset-4 bg-blue-50/50 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />

//           <div className="bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
//             <div className="flex flex-col md:flex-row h-full">
//               {/* Left sidebar with icon */}
//               <div className="w-full md:w-32 bg-blue-700 flex items-center justify-center p-6 md:p-0">
//                 <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm">
//                   <Compass className="text-white h-10 w-10" />
//                 </div>
//               </div>

//               {/* Content area */}
//               <div className="flex-1 p-8 md:p-12">
//                 <div className="inline-flex items-center space-x-2 text-blue-700 font-bold mb-4 uppercase tracking-wider text-sm">
//                   <div className="w-8 h-[2px] bg-blue-700" />
//                   <span>Our Approach</span>
//                 </div>

//                 <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-serif">
//                   Research-Driven <span className="text-blue-700 underline decoration-blue-100 underline-offset-8">Interventions</span> for Social Impact
//                 </h2>

//                 <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-8 line-clamp-3">
//                   At the heart of our approach lies a profound commitment to empowering socio-economically marginalized communities through innovative, research-driven interventions. We recognize that sustainable development is about deeply understanding the unique contextual challenges.
//                 </p>

//                 <motion.button
//                   whileHover={{ x: 5 }}
//                   onClick={() => setIsModalOpen(true)}
//                   className="flex items-center space-x-3 text-blue-700 font-bold text-lg group/btn"
//                 >
//                   <span className="border-b-2 border-blue-700 pb-1 group-hover/btn:border-blue-500 transition-colors">Discover Our Methodology</span>
//                   <ArrowRight className="h-5 w-5 bg-blue-700 text-white rounded-full p-1 group-hover/btn:scale-110 transition-transform" />
//                 </motion.button>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </div>

//       {/* Approach Modal */}
//       <Modal
//         isOpen={isModalOpen}
//         onClose={() => setIsModalOpen(false)}
//         title="Our Approach"
//       >
//         <div className="space-y-6">
//           <p>
//             At the heart of our approach lies a profound commitment to empowering socio-economically marginalized communities through <span className="font-semibold text-blue-700">innovative, research-driven interventions</span>. We recognize that sustainable development is not about implementing one-size-fits-all solutions, but about deeply understanding the unique contextual challenges and potential of each community we engage with.
//           </p>
//           <p>
//             Our <span className="font-semibold text-blue-700">Action Research methodology</span> is a dynamic and participatory approach that goes beyond traditional research paradigms. We don't just observe or analyze communities; we actively collaborate with local stakeholders, ensuring that every intervention is co-created, culturally sensitive, and aligned with the community's aspirations and existing strengths.
//           </p>
//           <p>
//             Our ultimate goal is not just to implement projects, but to catalyze transformative change that empowers communities to become architects of their own development. By combining rigorous academic research with grassroots-level understanding, we strive to create meaningful, lasting impact that transcends traditional boundaries of academic and social intervention.
//           </p>
//           <p className="font-semibold text-blue-800 italic">
//             "We don't just see challenges; we see opportunities for collaborative, sustainable transformation."
//           </p>
//           <p>
//             By focusing on sustainable practices and inclusive growth, we aim to create meaningful and lifelong changes for the communities we serve.
//           </p>
//         </div>
//       </Modal>
//     </div>
//   );
// };

// export default Approach;







































































import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Modal from "./Modal";

const Approach = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      id="approach"
      className="
        relative
        min-h-[75vh]
        overflow-hidden
        bg-[#f7f7f5]
        text-[#172033]
      "
    >
      {/* =====================================================
          MAIN APPROACH SECTION
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
                03
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
                Our Approach
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
              MAIN CONTENT
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
                Research-Driven{" "}

                <span className="text-[#2455c3]">
                  Interventions
                </span>{" "}

                for Social Impact
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
                At the heart of our approach lies a profound
                commitment to empowering socio-economically
                marginalized communities through innovative,
                research-driven interventions. We recognize
                that sustainable development is about deeply
                understanding the unique contextual challenges.
              </p>


              {/* =================================================
                  DISCOVER METHODOLOGY
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
                  Discover Our Methodology
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
              APPROACH PRINCIPLE
          ================================================= */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.7,
              delay: 0.35,
            }}
            className="
              mt-16
              border-y
              border-[#d8dadd]
              py-6
              sm:mt-20
              sm:py-7
            "
          >

            <div
              className="
                flex
                flex-col
                gap-3
                sm:flex-row
                sm:items-center
                sm:justify-between
              "
            >

              <span
                className="
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-[#9aa0aa]
                  sm:text-[10px]
                "
              >
                Our Principle
              </span>

              <p
                className="
                  max-w-3xl
                  text-sm
                  font-medium
                  italic
                  leading-relaxed
                  text-[#3f4b5f]
                  sm:text-base
                "
              >
                "We don't just see challenges; we see opportunities
                for collaborative, sustainable transformation."
              </p>

            </div>

          </motion.div>


          {/* =================================================
              BOTTOM RULE
          ================================================= */}
          <div
            className="
              mt-8
              pt-5
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
                Approach
              </span>

              <span>
                03 / 03
              </span>

            </div>

          </div>

        </motion.div>

      </div>


      {/* =====================================================
          APPROACH MODAL
      ===================================================== */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Our Approach"
      >
        <div className="space-y-6">

          <p>
            At the heart of our approach lies a profound commitment
            to empowering socio-economically marginalized communities
            through{" "}
            <span className="font-semibold text-blue-700">
              innovative, research-driven interventions
            </span>
            . We recognize that sustainable development is not about
            implementing one-size-fits-all solutions, but about
            deeply understanding the unique contextual challenges
            and potential of each community we engage with.
          </p>

          <p>
            Our{" "}
            <span className="font-semibold text-blue-700">
              Action Research methodology
            </span>{" "}
            is a dynamic and participatory approach that goes beyond
            traditional research paradigms. We don't just observe or
            analyze communities; we actively collaborate with local
            stakeholders, ensuring that every intervention is
            co-created, culturally sensitive, and aligned with the
            community's aspirations and existing strengths.
          </p>

          <p>
            Our ultimate goal is not just to implement projects, but
            to catalyze transformative change that empowers
            communities to become architects of their own
            development. By combining rigorous academic research
            with grassroots-level understanding, we strive to create
            meaningful, lasting impact that transcends traditional
            boundaries of academic and social intervention.
          </p>

          <p className="font-semibold text-blue-800 italic">
            "We don't just see challenges; we see opportunities for
            collaborative, sustainable transformation."
          </p>

          <p>
            By focusing on sustainable practices and inclusive
            growth, we aim to create meaningful and lifelong changes
            for the communities we serve.
          </p>

        </div>
      </Modal>

    </section>
  );
};

export default Approach;