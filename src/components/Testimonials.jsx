import { TESTIMONIALS_CONTENT } from "../constants";
import { motion } from "framer-motion";

const testimonialVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.2,
      ease: "easeOut",
    },
  }),
};

const Testimonials = () => {
  return (
    <section id="testimonials">
      <div className="max-w-7xl mx-auto px-4 mt-20">
        <motion.div
          className="text-center mb-12 border-t border-neutral-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-5xl mt-20 tracking-tighter bg-gradient-to-t from-neutral-50 via-neutral-300 to-neutral-600 bg-clip-text text-transparent">
            {TESTIMONIALS_CONTENT.sectionTitle}
          </h2>

          <p className="mt-4 max-w-xl mx-auto">
            {TESTIMONIALS_CONTENT.sectionDescription}
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.5,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {TESTIMONIALS_CONTENT.reviews.map((reviewObj, index) => (
            <motion.div
              custom={index}
              variants={testimonialVariants}
              className="mt-10  flex flex-col items-center justify-center overflow-hidden bg-neutral-900/50 border border-neutral-900 p-10"
            >
              <p className="mb-4 text-neutral-200">{reviewObj.review}</p>

              <div className="flex items-center mt-4">
                <img
                  src={reviewObj.image}
                  alt={reviewObj.alt}
                  className="w-12 h-12 rounded-full mr-4"
                />

                <div className="text-sm">
                  <p className="font-bold text-white">
                    {reviewObj.name}
                  </p>

                  <p className="text-gray-500">{reviewObj.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
