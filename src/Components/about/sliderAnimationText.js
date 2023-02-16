import { motion } from "framer-motion";

export default function SliderAnimationText(data) {
  console.log(data, "data");
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.01, delayChildren: 0.1 * i },
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
  let word = data.text.split(" ");
  word[word.length - 1] = word[word.length - 1] + "...";
  console.log(word, "word");
  return (
    <>
      <motion.div
        // variants={container}
        initial="hidden"
        animate="visible"
        style={{
          // width: "450px",
          paddingTop: "10px",
          fontSize: "1.1rem",
          textAlign: "justify",
        }}
      >
        {word.map((txt, index) => (
          <motion.span
            key={index}
            style={{ marginRight: "5px" }}
            // variants={child}
          >
            {txt}{" "}
          </motion.span>
        ))}
      </motion.div>
    </>
  );
}
