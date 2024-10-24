import React from "react";
import OrangeButton from "../common/OrangeButton";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.15,
    },
  },
};

// Child variants
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const Hero = () => {
  return (
    <section>
      <div className="w-full grid grid-cols-[1fr_1fr] pt-20 pb-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex items-center"
        >
          <div className="relative">
            <img
              src="/color 2.svg"
              alt="Hero Image"
              draggable="false"
              className="absolute -top-[50%] -left-[30%] w-[100%] z-0 select-none"
            />
            <div className="relative z-10">
              <motion.p
                variants={itemVariants}
                className="flex items-center gap-2"
              >
                <img
                  src="/instant-message.png"
                  alt="instant message"
                  draggable="false"
                  className="w-6 select-none"
                />
                <span className="text-lg font-bold text-dark-purple">
                  Effortless Notifications, Always On Time
                </span>
              </motion.p>
              <motion.h1
                variants={itemVariants}
                className="text-5xl font-bold  mt-4 mb-8"
              >
                <span className="text-main-purple">Get Notify</span>
                <br />
                <span className="mt-2 inline-block text-dark-purple">
                  Simplify Your Life.
                </span>
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="text-purple-text font-normal w-[70%]"
              >
                The simplest way to never miss important tasks, keep your
                schedule organized, and receive timely reminders for everything
                that matters.
              </motion.p>
              <motion.div variants={itemVariants}>
                <OrangeButton shine={true} className="mt-8">
                  Get Started
                </OrangeButton>
              </motion.div>
            </div>
          </div>
        </motion.div>
        <div className="relative h-full flex items-center justify-center">
          <img
            src="/color.svg"
            alt="Hero Image"
            draggable="false"
            className="absolute -top-[50%] w-[100%] z-0 select-none"
          />
          <img
            src="/color.svg"
            alt="Hero Image"
            draggable="false"
            className="absolute top-0 w-[100%] z-0 select-none"
          />
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
          >
            <motion.img
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                delay: 1,
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
              }}
              src="/hero.png"
              alt="Hero Image"
              className="w-[80%] z-10 select-none"
              draggable="false"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
