//Icon Imports
import { SiKubernetes } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { SiGnubash } from "react-icons/si";
import { TbBrandAnsible } from "react-icons/tb";
import { FaGitAlt } from "react-icons/fa";
import { TbBrandPython } from "react-icons/tb";
import { FaDocker } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";

//Libraries
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: {y: -10},
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "linear",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2 
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0, y: -100}}
        transition={{duration: 1.5}}
        className="my-20 text-center text-4xl"
      >
        Skills
      </motion.h2>
      <motion.div 
        whileInView={{opacity: 1, x: 0}}
        initial={{opacity: 0, x: -100}}
        transition={{duration: 1.5}}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div 
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        > 
          <TbBrandAnsible className="text-7xl"/>
        </motion.div>
        <motion.div 
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        > 
          <SiGnubash className="text-7xl text-neutral-600"/>
        </motion.div>
        <motion.div 
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        > 
          <TbBrandPython className="text-7xl text-yellow-300"/>
        </motion.div>
        <motion.div 
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        > 
          <SiKubernetes className="text-7xl text-blue-600"/>
        </motion.div>
        <motion.div 
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        > 
          <TbBrandCpp className="text-7xl text-sky-300"/>
        </motion.div>
        <motion.div 
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        > 
          <FaDocker className="text-7xl text-sky-600"/>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
