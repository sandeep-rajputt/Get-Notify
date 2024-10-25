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

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const Hero = () => {
  return (
    <section>
      <div className="w-full grid xl:grid-cols-[1fr_1fr] grid-cols-1 pt-20 pb-10 xl:gap-3 gap-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex items-center z-30 justify-center"
        >
          <div className="relative">
            <img
              src="/color 2.svg"
              alt="Hero Image"
              draggable="false"
              className="absolute xl:-top-[50%] xl:-left-[30%] left-1/4 xl:w-[100%] w-[80%] -top-1/4 z-0 select-none"
            />
            <div className="relative z-10 flex flex-col base:gap-0 gap-3">
              <motion.p
                variants={itemVariants}
                className="flex items-center xl:justify-start justify-center gap-2 "
              >
                <img
                  src="/instant-message.png"
                  alt="instant message"
                  draggable="false"
                  className="w-6 select-none"
                />
                <span className="base:text-lg text-base font-bold text-dark-purple">
                  Effortless Notifications, Always On Time
                </span>
              </motion.p>
              <motion.h1
                variants={itemVariants}
                className="base:text-5xl text-4xl font-bold xl:text-start text-center mt-4 mb-8"
              >
                <span className="text-main-purple">Get Notify</span>
                <br />
                <span className="mt-2 inline-block text-dark-purple">
                  Simplify Your Life.
                </span>
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="text-purple-text font-normal md:w-[70%] md:max-w-full max-w-xl  xl:text-start text-center mx-auto xl:mx-0"
              >
                The simplest way to never miss important tasks, keep your
                schedule organized, and receive timely reminders for everything
                that matters.
              </motion.p>
              <motion.div
                variants={itemVariants}
                className="flex xl:justify-start justify-center"
              >
                <OrangeButton shine={true} className="mt-8">
                  Get Started
                </OrangeButton>
              </motion.div>
            </div>
          </div>
        </motion.div>
        <div className="relative h-full flex items-center justify-center grid-rows-1 z-10">
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
            className="absolute xl:top-0 -top-1/4 xl:w-[100%] w-1/2  z-0 select-none"
          />
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0 }}
            className="flex items-center justify-center z-10"
          >
            <motion.img
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                delay: 0,
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
              }}
              src="/hero.png"
              alt="Hero Image"
              className="xl:w-[80%] lg:w-[50%] md:w-[70%] md:max-w-full max-w-md w-full z-10 select-none"
              draggable="false"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
