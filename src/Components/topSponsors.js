import { motion } from "framer-motion";

const Sponsors = [
  {
    id: 0,
    text: "sp1",
  },
  {
    id: 1,
    text: "sp2",
  },
  {
    id: 2,
    text: "sp3",
  },
  {
    id: 3,
    text: "sp4",
  },
];

export default function TopSponsors() {
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 2,
        stiffness: 10,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 10,
      },
    },
  };

  return (
    <>
      <div
        style={{
          height: "100vh",
          width: "100%",
          background: "transparent",
          zIndex: 1,
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "40%",
            display: "flex",
            justifyContent: "center",
            paddingTop: "20px",
            // backgroundColor: "red"
          }}
        >
          <motion.span
           initial="hidden"
           variants={{
            hidden: {
                opacity: 0
            },
            visible: {
                opacity: 1
            }
           }}
           whileInView="visible"
           transition={{
             duration: "1",
             times: [0, 1]
           }}
            style={{
              fontSize: "3rem",
              fontWeight: 500,
              color: "#FE1C80"
            }}
          >
            Top Sponsors
          </motion.span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "60%",
            // marginTop: "60px",
            margin: "0px 20px 0px 20px",
          }}
        >
          <motion.div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
            }}
            variants={container}
            initial="hidden"
            // animate="visible"
            whileInView="visible"
          >
            {Sponsors.map((sp) => (
              <motion.span
                key={sp.id}
                //   whileInView="visible"
                style={{
                  height: "200px",
                  width: "90%",
                  border: "2px solid black",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "40px",
                }}
                variants={child}
              >
                {sp.text}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
}
