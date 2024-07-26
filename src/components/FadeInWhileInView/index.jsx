import { motion as m } from "framer-motion";

// eslint-disable-next-line react/prop-types
const FadeInWhileInView = ({ children }) => {
  return (
    <m.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: 0.7 }}
      variants={{
        visible: { opacity: 1, y: -20 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      {children}
    </m.div>
  );
};

export default FadeInWhileInView;
