import { motion } from "framer-motion";

const focusAreas = [
  "Public Policy, Planning, and Development",
  "Community Participation for Action Research",
  "Science and Public Policy Integration",
  "Skill Development for Livelihood Generation",
  "Rural Infrastructure Planning and Development (Drinking Water, Health, and Education)",
  "Social Forestry and Natural Resource-Based Entrepreneurship",
  "Ethnographic, Qualitative, and Archival Research",
];

const backgroundImage =
  "https://res.cloudinary.com/dq1llsy7f/image/upload/v1743765121/cemke1rafuaoqewwjmhi.jpg";

const easing = [0.22, 1, 0.36, 1];

const Hero = () => {
  return (
    <main className="w-full overflow-hidden bg-black">
      {/* =================================================
          HERO SECTION
      ================================================= */}
      <section
        className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/8814563/pexels-photo-8814563.jpeg?auto=compress&cs=tinysrgb&h=650&w=940')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        {/* Subtle dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Black vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.65)_100%)]" />

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-black" />

        <div className="relative z-10 mx-auto w-full max-w-[1500px] px-5 py-24 text-center sm:px-8 lg:px-12">
          {/* Top label */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easing }}
            className="mb-7 flex items-center justify-center gap-4"
          >
            <span className="h-px w-8 bg-[#8eace6] sm:w-12" />
            <span className="text-[10px] font-medium uppercase tracking-[0.24em] text-[#8eace6] sm:text-xs">
              Participatory Geo-Action Research
            </span>
            <span className="h-px w-8 bg-[#8eace6] sm:w-12" />
          </motion.div>

          {/* Main title */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.12, ease: easing }}
            className="mx-auto max-w-6xl text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
          >
            <span className="block">Ghosal</span>
            <span className="block text-[#8eace6]">
              Participatory Geo-Action
            </span>
            <span className="block">Research Group</span>
          </motion.h1>

          {/* Accent line */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.45, ease: easing }}
            className="mx-auto mt-8 h-[2px] w-16 bg-[#6f96e8] sm:w-20"
          />

          {/* Taglines */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease: easing }}
            className="mt-7 space-y-4"
          >
            <p className="mx-auto max-w-5xl text-base font-normal leading-relaxed text-white sm:text-lg md:text-xl lg:whitespace-nowrap lg:text-2xl">
              "Empowering Rural Communities Through Participatory Action Research"
            </p>

            <p className="mx-auto max-w-4xl text-sm leading-relaxed text-white/75 sm:text-base md:text-lg">
              "Exploring Rural Landscapes, Shaping Sustainable Futures"
            </p>
          </motion.div>
        </div>
      </section>

      {/* =================================================
          RESEARCH FOCUS AREAS
      ================================================= */}
      <section
        id="research-focus"
        className="relative isolate overflow-hidden bg-black text-white"
      >
        {/* Background image */}
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />

        {/* Subtle image darkening */}
        <div className="absolute inset-0 -z-10 bg-black/45" />

        {/* Restrained black vignette around the image */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(0,0,0,0.7)_100%)]" />

        {/* Soft transition at the top, without a hard section boundary */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/80 to-transparent" />

        <div className="mx-auto w-full max-w-[1600px] px-5 pb-12 pt-14 sm:px-8 sm:pb-16 sm:pt-16 lg:px-12 lg:pb-20 lg:pt-20">
          {/* Section heading */}
          <div className="mb-0 border-b border-white/20 pb-0">
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.65, ease: easing }}
                className="mb-5 flex items-center gap-3"
              >
                <span className="h-px w-8 bg-[#8eace6] sm:w-10" />
                <span className="text-[10px] font-medium uppercase tracking-[0.24em] text-[#8eace6] sm:text-xs">
                  Research
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 25, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.75, ease: easing }}
                className="text-4xl font-medium leading-[1.05] tracking-[-0.045em] text-white sm:text-5xl md:text-6xl lg:text-7xl"
              >
                Research{" "}
                <span className="text-[#8eace6]">Focus Areas</span>
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.65, delay: 0.1, ease: easing }}
              className="max-w-xl text-sm leading-6 text-white/75 lg:col-span-4 lg:justify-self-end lg:text-right"
            >
              Areas of research spanning public policy, community participation,
              rural development, infrastructure, natural resources, and
              qualitative inquiry.
            </motion.p>
          </div>

          {/* Research list */}
          <div >
            {focusAreas.map((area, index) => (
              <motion.div
                key={area}
                initial={{
                  opacity: 0,
                  y: 25,
                  filter: "blur(4px)",
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }}
                viewport={{
                  once: true,
                  amount: 0.35,
                }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.04,
                  ease: easing,
                }}
                className="group border-b border-white/20"
              >
                <div className="flex min-h-[8.2vh] items-center gap-4 py-4 sm:min-h-[8.5vh] sm:gap-6 lg:min-h-[8.7vh] lg:gap-8">
                  {/* Number */}
                  <div className="w-8 shrink-0 sm:w-12 lg:w-16">
                    <span className="text-[9px] font-medium tracking-[0.15em] text-white/55 transition-colors duration-300 group-hover:text-[#8eace6] sm:text-[10px] lg:text-xs">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Topic */}
                  <div className="min-w-0 flex-1">
                    <h3 className="text-[clamp(0.95rem,1.7vw,1.55rem)] font-medium leading-tight tracking-[-0.015em] text-white/90 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white">
                      {area}
                    </h3>
                  </div>

                  {/* Arrow */}
                  <div className="hidden shrink-0 sm:block">
                    <span className="text-sm text-white/45 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#8eace6]">
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