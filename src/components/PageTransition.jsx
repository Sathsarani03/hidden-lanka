
import { motion, useReducedMotion } from 'motion/react';

export default function PageTransition({ children }) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      initial={
        reduced
          ? false
          : {
              opacity: 0,
              y: 35,
              filter: 'blur(8px)'
            }
      }
      animate={{
        opacity: 1,
        y: 0,
        filter: 'blur(0px)'
      }}
      exit={
        reduced
          ? undefined
          : {
              opacity: 0,
              y: -20,
              filter: 'blur(5px)'
            }
      }
      transition={{
        duration: reduced ? 0 : 0.75,
        ease: [0.22, 1, 0.36, 1]
      }}
    >
      {children}
    </motion.div>
  );
}
