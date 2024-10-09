import { twMerge } from "tailwind-merge";
import { BRAND_LOGOS, HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

const Hero = () => {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="pt-28 lg:pt-36"
    >
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
        <motion.div
          variants={fadeInUp}
          className="mb-8 border border-neutral-800 px-3 py-2 rounded-full"
        >
          {HERO_CONTENT.badgeText}
        </motion.div>

        <motion.h1
          variants={fadeInUp}
          className="text-5xl text-center lg:text-8xl my-4 font-semibold tracking-tighter bg-gradient-to-b from-neutral-50 via-neutral-300 to-neutral-700 bg-clip-text text-transparent"
        >
          {HERO_CONTENT.mainHeading.split("\n").map((text) => (
            <span key={text}>
              {text}
              <br />
            </span>
          ))}
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="mt-6 text-neutral-400 max-w-xl text-center"
        >
          {HERO_CONTENT.subHeading}
        </motion.p>

        <motion.div variants={fadeInUp} className="mt-6 space-x-4">
          <HeroActionLinkButton
            href="#"
            className=" bg-blue-600 hover:bg-blue-500"
          >
            {HERO_CONTENT.callToAction.primary}
          </HeroActionLinkButton>

          <HeroActionLinkButton
            href="#"
            className=" border  border-gray-500 hover:border-gray-400"
          >
            {HERO_CONTENT.callToAction.secondary}
          </HeroActionLinkButton>
        </motion.div>

        <motion.div variants={fadeIn} className="py-10">
          <p className="text-gray-400 text-center mb-8">
            {HERO_CONTENT.trustedByText}
          </p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap gap-8 justify-center"
          >
            {BRAND_LOGOS.map((logo) => (
              <img
                src={logo.src}
                key={logo.alt}
                alt={logo.alt}
                className="h-8"
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;

function HeroActionLinkButton({ className, children, ...props }) {
  return (
    <a
      href="#"
      className={twMerge(
        "inline-block text-white py-3 px-6 rounded-lg font-medium",
        className
      )}
    >
      {children}
    </a>
  );
}
