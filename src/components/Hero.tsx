


import { motion } from "framer-motion";

const Hero = () => {
  const focusAreas = [
    "Public Policy, Planning, and Development",
    "Community Participation for Action Research",
    "Science and Public Policy Integration",
    "Skill Development for Livelihood Generation",
    "Rural Infrastructure Planning and Development (Drinking Water, Health, and Education)",
    "Social Forestry and Natural Resource-Based Entrepreneurship",
    "Ethnographic, Qualitative, and Archival Research",
  ];

  return (
    <main className="w-full overflow-hidden bg-[#f7f7f5]">

      {/* =====================================================
          LANDING / HERO VIEWPORT
      ===================================================== */}
      <section className="relative min-h-screen w-full overflow-hidden bg-[#111820]">

        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            // src="https://res.cloudinary.com/dq1llsy7f/image/upload/v1743765121/cemke1rafuaoqewwjmhi.jpg"
            src="https://images.pexels.com/photos/8814563/pexels-photo-8814563.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt="Rural landscape and community"
            className="
              h-full
              w-full
              object-cover
              object-center
            "
          />

          {/* Overall subtle darkening */}
          <div className="absolute inset-0 bg-black/20" />

          {/* Left-side readability */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-r
              from-[#0c1218]/70
              via-[#0c1218]/35
              to-transparent
            "
          />

          {/* Bottom atmospheric fade */}
          <div
            className="
              absolute
              inset-x-0
              bottom-0
              h-48
              bg-gradient-to-t
              from-black/50
              to-transparent
            "
          />
        </div>


        {/* =================================================
            HERO CONTENT
        ================================================= */}
        <div className="relative z-10 flex min-h-screen items-center justify-center">

          <div
            className="
              w-full
              px-6
              pb-16
              pt-24
              sm:px-10
              lg:px-16
            "
          >

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                mx-auto
                flex
                max-w-6xl
                flex-col
                items-center
                text-center
              "
            >

              {/* =================================================
                  SMALL TOP LABEL
              ================================================= */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.15,
                }}
                className="
                  mb-7
                  flex
                  items-center
                  justify-center
                  gap-4
                "
              >
                <span className="h-px w-10 bg-blue-400" />

                <span
                  className="
                    text-[10px]
                    font-medium
                    uppercase
                    tracking-[0.3em]
                    text-white/70
                    sm:text-xs
                  "
                >
                  Participatory Geo-Action Research
                </span>

                <span className="h-px w-10 bg-blue-400" />
              </motion.div>


              {/* =================================================
                  MAIN TITLE
              ================================================= */}
              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.9,
                  delay: 0.25,
                }}
                className="
                  font-bold
                  leading-[0.95]
                  tracking-[-0.045em]
                "
              >

                {/* Ghosal */}
                <span
                  className="
                    block
                    text-white
                    text-[clamp(4rem,8vw,7.5rem)]
                  "
                >
                  Ghosal
                </span>


                {/* Participatory Geo-Action */}
                <span
                  className="
                    mt-3
                    block
                    text-[#8eace6]
                    text-[clamp(2.25rem,5vw,5rem)]
                  "
                >
                  Participatory Geo-Action
                </span>


                {/* Research Group */}
                <span
                  className="
                    mt-2
                    block
                    text-white
                    text-[clamp(2.25rem,5vw,5rem)]
                  "
                >
                  Research Group
                </span>

              </motion.h1>


              {/* =================================================
                  ACCENT LINE
              ================================================= */}
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 72, opacity: 1 }}
                transition={{
                  duration: 0.7,
                  delay: 0.65,
                }}
                className="
                  mt-8
                  h-[2px]
                  bg-blue-400
                "
              />


              {/* =================================================
                  TAGLINES
              ================================================= */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.8,
                }}
                className="
                  mt-7
                  w-full
                  max-w-6xl
                "
              >

                {/* First tagline */}
                <p
                  className="
                    whitespace-normal
                    text-base
                    leading-relaxed
                    text-white/95
                    sm:text-lg
                    lg:whitespace-nowrap
                    lg:text-xl
                    xl:text-2xl
                  "
                >
                  "Empowering Rural Communities Through Participatory Action
                  Research"
                </p>


                {/* Second tagline */}
                <p
                  className="
                    mt-4
                    text-sm
                    leading-relaxed
                    text-white/65
                    sm:text-base
                    lg:text-lg
                  "
                >
                  "Exploring Rural Landscapes, Shaping Sustainable Futures"
                </p>

              </motion.div>

            </motion.div>

          </div>
        </div>

      </section>


      {/* =====================================================
          RESEARCH FOCUS AREAS
      ===================================================== */}
      <section
        id="research-focus"
        className="
          min-h-screen
          bg-[#f7f7f5]
          text-[#172033]
        "
      >

        <div
          className="
            mx-auto
            flex
            min-h-screen
            max-w-[1500px]
            flex-col
            justify-center
            px-6
            py-16
            sm:px-10
            sm:py-14
            lg:px-16
            lg:py-16
          "
        >

          {/* =================================================
              SECTION HEADER
          ================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mb-8
              flex
              items-end
              justify-between
              gap-8
              sm:mb-10
            "
          >

            <div>

              {/* Small label */}
              <div className="mb-3 flex items-center gap-3">

                <span className="h-px w-8 bg-[#2455c3]" />

                <span
                  className="
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.25em]
                    text-[#2455c3]
                    sm:text-[10px]
                  "
                >
                  Research
                </span>

              </div>


              {/* Heading */}
              <h2
                className="
                  text-[clamp(2.5rem,5vw,4.8rem)]
                  font-semibold
                  leading-[0.9]
                  tracking-[-0.045em]
                  text-[#172033]
                "
              >
                Research{" "}
                <span className="text-[#2455c3]">
                  Focus Areas
                </span>
              </h2>

            </div>


            {/* Desktop description */}
            <p
              className="
                hidden
                max-w-sm
                text-right
                text-sm
                leading-relaxed
                text-[#697386]
                lg:block
              "
            >
              Areas of research spanning public policy,
              community participation, rural development,
              infrastructure, natural resources, and
              qualitative inquiry.
            </p>

          </motion.div>


          {/* =================================================
              RESEARCH LIST
          ================================================= */}
          <div className="border-t border-[#d8dadd]">

            {focusAreas.map((area, index) => (

              <motion.div
                key={area}
                initial={{
                  opacity: 0,
                  y: 35,
                  filter: "blur(5px)",
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }}
                viewport={{
                  once: true,
                  amount: 0.65,
                }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.04,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  group
                  border-b
                  border-[#d8dadd]
                "
              >

                <div
                  className="
                    flex
                    min-h-[8.2vh]
                    items-center
                    gap-4
                    py-3
                    sm:min-h-[8.5vh]
                    sm:gap-6
                    sm:py-3
                    lg:min-h-[8.7vh]
                    lg:gap-8
                  "
                >

                  {/* Number */}
                  <div
                    className="
                      w-8
                      shrink-0
                      sm:w-12
                      lg:w-16
                    "
                  >
                    <span
                      className="
                        text-[9px]
                        font-medium
                        tracking-[0.15em]
                        text-[#9aa0aa]
                        transition-colors
                        duration-300
                        group-hover:text-[#2455c3]
                        sm:text-[10px]
                        lg:text-xs
                      "
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>


                  {/* Research Topic */}
                  <div className="min-w-0 flex-1">

                    <h3
                      className="
                        text-[clamp(0.95rem,1.7vw,1.55rem)]
                        font-medium
                        leading-tight
                        tracking-[-0.015em]
                        text-[#263247]
                        transition-all
                        duration-300
                        group-hover:translate-x-1
                        group-hover:text-[#172033]
                      "
                    >
                      {area}
                    </h3>

                  </div>


                  {/* Arrow */}
                  <div
                    className="
                      hidden
                      shrink-0
                      sm:block
                    "
                  >
                    <span
                      className="
                        text-sm
                        text-[#a6abb3]
                        transition-all
                        duration-300
                        group-hover:translate-x-1
                        group-hover:text-[#2455c3]
                      "
                    >
                      →
                    </span>
                  </div>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

    </main>
  );
};

export default Hero;