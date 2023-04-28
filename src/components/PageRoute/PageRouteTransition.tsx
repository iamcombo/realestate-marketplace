import { AnimatePresence, motion } from "framer-motion";
import type { ReactNode } from "react";

const PageRouteTransition = ({
  keyProp,
  children
}: {
  keyProp?: string,
  children: ReactNode
}) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={keyProp}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageRouteTransition;