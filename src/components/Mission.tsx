// import { useState } from "react";
// import { Target, ArrowRight } from "lucide-react";
// import { motion } from "framer-motion";
// import Modal from "./Modal";

// const Mission = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   return (
//     <div className="py-16 bg-gray-50 overflow-hidden">
//       <div className="container mx-auto px-4 md:px-6">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           className="relative group max-w-4xl mx-auto"
//         >
//           {/* Decorative background element */}
//           <div className="absolute -inset-4 bg-blue-100/30 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />

//           <div className="bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
//             <div className="flex flex-col md:flex-row-reverse h-full">
//               {/* Right sidebar with icon (mirrored from Vision) */}
//               <div className="w-full md:w-32 bg-blue-800 flex items-center justify-center p-6 md:p-0">
//                 <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm">
//                   <Target className="text-white h-10 w-10" />
//                 </div>
//               </div>

//               {/* Content area */}
//               <div className="flex-1 p-8 md:p-12">
//                 <div className="inline-flex items-center space-x-2 text-blue-800 font-bold mb-4 uppercase tracking-wider text-sm">
//                   <span>Our Mission</span>
//                   <div className="w-8 h-[2px] bg-blue-800" />
//                 </div>

//                 <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-serif">
//                   Developing <span className="text-blue-800 underline decoration-blue-100 underline-offset-8">Sustainable</span> Solutions for Rural Communities
//                 </h2>

//                 <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-8 line-clamp-3">
//                   To develop and implement cost-effective, innovative technical and engineering solutions that directly address the daily challenges faced by communities in rural areas. Through our dedicated approach, we aim to transform the quality of life in underserved regions.
//                 </p>

//                 <motion.button
//                   whileHover={{ x: -5 }}
//                   onClick={() => setIsModalOpen(true)}
//                   className="flex items-center space-x-3 text-blue-800 font-bold text-lg group/btn"
//                 >
//                   <ArrowRight className="h-5 w-5 bg-blue-800 text-white rounded-full p-1 group-hover/btn:scale-110 transition-transform rotate-180" />
//                   <span className="border-b-2 border-blue-800 pb-1 group-hover/btn:border-blue-600 transition-colors">Explore Our Mission</span>
//                 </motion.button>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </div>

//       {/* Mission Modal */}
//       <Modal
//         isOpen={isModalOpen}
//         onClose={() => setIsModalOpen(false)}
//         title="Our Mission"
//       >
//         <div className="space-y-6">
//           <p>
//             To develop and implement <span className="font-semibold text-blue-800">cost-effective, innovative technical and engineering solutions</span> that directly address the daily challenges faced by communities in rural areas. Through our dedicated approach, we aim to transform the quality of life in underserved regions by <span className="font-semibold text-blue-800">designing sustainable infrastructure</span> that respects the natural environment while meeting essential needs.
//           </p>
//           <p>
//             We are committed to uplifting communities through <span className="font-semibold text-blue-800">enhancing nature-friendly livelihoods</span> that preserve ecological balance while creating economic opportunities. By improving both soft infrastructure—such as education and healthcare systems—and hard infrastructure like roads, water systems, and energy solutions, we create the foundation for lasting prosperity.
//           </p>
//           <p>
//             Our work centers on <span className="font-semibold text-blue-800">promoting sustainable practices</span> that can be maintained by local communities with minimal external support. We believe in fostering inclusive growth that leaves no one behind, building capacity within communities, and ultimately creating pathways to <span className="font-semibold text-blue-800">self-reliance and empowerment</span> for generations to come.
//           </p>
//         </div>
//       </Modal>
//     </div>
//   );
// };

// export default Mission;











































































import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Modal from "./Modal";

const Mission = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      id="mission"
      className="
        relative
        min-h-[75vh]
        overflow-hidden
        bg-[#252525]
        text-white
      "
    >
      {/* =====================================================
          SUBTLE BACKGROUND DETAIL
      ===================================================== */}
      <div
        className="
          pointer-events-none
          absolute
          right-0
          top-0
          h-full
          w-[35%]
          opacity-[0.035]
        "
      >
        <div
          className="
            absolute
            right-[-15%]
            top-[15%]
            h-[500px]
            w-[500px]
            rounded-full
            border
            border-white
          "
        />

        <div
          className="
            absolute
            right-[-5%]
            top-[25%]
            h-[350px]
            w-[350px]
            rounded-full
            border
            border-white
          "
        />
      </div>


      {/* =====================================================
          MAIN MISSION CONTENT
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
          className="relative z-10 w-full"
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
                  text-white/40
                "
              >
                02
              </span>

              <span className="h-px w-8 bg-[#6f96e8]" />

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
                Our Mission
              </span>

            </div>


            <span
              className="
                hidden
                text-[10px]
                uppercase
                tracking-[0.2em]
                text-white/35
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
                  text-white
                "
              >
                Developing{" "}

                <span className="text-[#8eace6]">
                  Sustainable
                </span>{" "}

                Solutions for Rural Communities
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
                  bg-[#6f96e8]
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
                  text-white/65
                  sm:text-lg
                  lg:text-xl
                "
              >
                To develop and implement cost-effective,
                innovative technical and engineering solutions
                that directly address the daily challenges faced
                by communities in rural areas. Through our
                dedicated approach, we aim to transform the
                quality of life in underserved regions.
              </p>


              {/* =================================================
                  EXPLORE MISSION
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
                  Explore Our Mission
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
                text-white/35
                sm:text-[10px]
              "
            >

              <span>
                Mission
              </span>

              <span>
                02 / 03
              </span>

            </div>

          </div>

        </motion.div>

      </div>


      {/* =====================================================
          MISSION MODAL
      ===================================================== */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Our Mission"
      >
        <div className="space-y-6">

          <p>
            To develop and implement{" "}
            <span className="font-semibold text-blue-800">
              cost-effective, innovative technical and
              engineering solutions
            </span>{" "}
            that directly address the daily challenges faced by
            communities in rural areas. Through our dedicated
            approach, we aim to transform the quality of life in
            underserved regions by{" "}
            <span className="font-semibold text-blue-800">
              designing sustainable infrastructure
            </span>{" "}
            that respects the natural environment while meeting
            essential needs.
          </p>

          <p>
            We are committed to uplifting communities through{" "}
            <span className="font-semibold text-blue-800">
              enhancing nature-friendly livelihoods
            </span>{" "}
            that preserve ecological balance while creating
            economic opportunities. By improving both soft
            infrastructure—such as education and healthcare
            systems—and hard infrastructure like roads, water
            systems, and energy solutions, we create the
            foundation for lasting prosperity.
          </p>

          <p>
            Our work centers on{" "}
            <span className="font-semibold text-blue-800">
              promoting sustainable practices
            </span>{" "}
            that can be maintained by local communities with
            minimal external support. We believe in fostering
            inclusive growth that leaves no one behind, building
            capacity within communities, and ultimately creating
            pathways to{" "}
            <span className="font-semibold text-blue-800">
              self-reliance and empowerment
            </span>{" "}
            for generations to come.
          </p>

        </div>
      </Modal>

    </section>
  );
};

export default Mission;