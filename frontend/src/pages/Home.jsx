import { motion } from "motion/react";
import InformationCard from "../components/InformationCard";
import WelcomeCard from "../components/WelcomeCard";

function Home() {
  return (
    <div className="mt-10 home-bg">
      <div>
        <motion.div
          // className="box"
          initial={{ x: -1300 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.1, ease: "easeOut", duration: 1.75 }}
        >
          <InformationCard />
        </motion.div>
      </div>
      {/* <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <WelcomeCard />
      </motion.div> */}
    </div>
  );
}

export default Home;
