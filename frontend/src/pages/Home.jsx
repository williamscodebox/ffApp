import { motion } from "motion/react";
import InformationCard from "../components/InformationCard";
import WelcomeCard from "../components/WelcomeCard";
import ScrollCard from "../components/ScrollCard";
import { useEffect } from "react";

function Home() {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

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
      <div className="border-1 mt-30 mr-35 ml-32 rounded-2xl bg-[#1e2939] opacity-90 border-white">
        <ScrollCard />
      </div>
    </div>
  );
}

export default Home;
