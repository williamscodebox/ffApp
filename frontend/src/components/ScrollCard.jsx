import * as motion from "motion/react-client";

const ScrollCard = () => {
  return (
    <div
      style={container}
      className="h-[100vh] opacity-90 rounded-2xl border-white border-1"
    >
      <Card />
    </div>
  );
};

function Card() {
  // const background = `linear-gradient(306deg, ${hue(222)}, ${hue(10)})`;
  const background = "#1e2939";

  return (
    <motion.div
      className={`card-container-0`}
      style={cardContainer}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.8 }}
    >
      <div style={{ ...splash, background }} />
      <motion.div
        style={card}
        variants={cardVariants}
        className="card flex flex-col text-gray-300 font-bold"
      >
        <p style={football}>🏈</p>
        <p>Game Time</p>
      </motion.div>
    </motion.div>
  );
}

const hue = (h) => `hsl(${h}, 100%, 50%)`;

const cardVariants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const football = {
  fontSize: 150,
};

const container = {
  margin: "100px auto",
  maxWidth: 1000,
  paddingBottom: 80,
  width: "100%",
  background: "#1e2939",
};

const splash = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  clipPath: `path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")`,
};

const cardContainer = {
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  paddingTop: 20,
  marginBottom: -120,
};

const card = {
  fontSize: 32,
  width: 300,
  height: 430,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 20,
  //   background: "#22c337",
  background:
    "linear-gradient(0deg,rgba(34, 195, 55, 1) 40%, rgba(28, 115, 23, 1) 74%)",
  boxShadow:
    "0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075), 0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075), 0 0 16px hsl(0deg 0% 0% / 0.075)",
  transformOrigin: "10% 60%",
};

export default ScrollCard;
