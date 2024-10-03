import {
  DesktopContainer,
  MobileContainer,
  BackButton,
} from "@/components/user";
import * as motion from "framer-motion/client";

export default function User() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative flex flex-col lg:flex-row items-center justify-center min-h-screen lg:justify-start lg:items-start lg:mt-28 lg:ml-16"
    >
      <DesktopContainer />
      <MobileContainer />
      <BackButton />
    </motion.div>
  );
}
