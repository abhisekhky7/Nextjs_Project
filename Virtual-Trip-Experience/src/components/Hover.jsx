import { motion } from "framer-motion";

const outlineVariants = {
  default: {
    strokeWidth: 0,
    pathLength: 0,
    stroke: "grey",
    transition: { duration: 0.5, ease: "easeOut" }
  },
  hover: {
    strokeWidth: 1,
    pathLength: 1,
    stroke: "#BF4D00",
    transition: { duration: 0.5, ease: "easeOut" }
  
  }
};

const textVariants = {
  default: {
    color: "gray",
    fontSize: "1.1em",
    x: 0
  },
  hover: {
    color: "white",
    fontSize: "1.2em",
    x: 0,
    transition: {
      duration: 0.3
    }
  }
};

export default function HoverButton() {
  return (
    
    <div className="example ">
      <motion.div
        whileHover="hover"
        whileTap={{scale:0.7}}
        initial="default"
        animate="default"
        className="hoverButton  m-1 p-1"
      >
        <motion.p variants={textVariants} className="hoverButtonText  ">
          Virtual Tour
        </motion.p>
        <motion.svg viewBox="0 0 100 10" xmlns="http://www.w3.org/2000/svg" className="">
          <motion.path
            variants={outlineVariants}
            strokeWidth="1"
            fill="none"
            stroke="grey"
            d="M 0, 0 H 100 V 10 H 0 Z"
          />
        </motion.svg>
      </motion.div>
    </div>
  );
}
