const styles = {
  cahero: {
    position: "relative",
    height: "calc(100vh - 80px)",
    backgroundColor: "black",
    maxWidth: "100vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    // paddingLeft: "2rem",
    // paddingRight: "2rem",
    paddingTop: "100px",
    // overflowY: "hidden",
    // flexWrap: "wrap",
  },

  l1: {
    // fontSize: 32,
    paddingBottom: 50,
    fontFamily: "Syne",
    fontStyle: "normal",
    fontWeight: 400,
    textAlign: "center",
    color: "#C0C0C0",
  },

  l2: {
    // fontSize: "48px",
    // fontSize: "128px",
    fontFamily: "Syne",
    fontStyle: "normal",
    fontWeight: 800,
    // lineHeight: "115px",
    textAlign: "center",
    background:
      "linear-gradient(94.76deg, #9E86FF 46.15%, #9FFF7E 90.01%),linear-gradient(0deg, #FFFFFF, #FFFFFF)",
    webkitBackgroundClip: "text",
    webkitTextFillColor: "transparent",
    mozBackgroundClip: "text",
    mozTextFillColor: "transparent",
  },

  l3: {
    // fontSize: "32px",
    // fontSize: "96px",
    fontFamily: "Syne",
    fontStyle: "normal",
    fontWeight: 800,
    // lineHeight: "115px",
    textAlign: "center",
    webkitTextStroke: "2px #FFFFFF",
  },

  about_heading: {
    fontFamily: "Syne",
    fontStyle: "normal",
    fontWeight: 800,
    /* identical to box height */
    letterSpacing: "1rem",

    textAlign: "center",

    color: "white",
  },

  about_content: {
    color: "white",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    // textAlign: "center",
  },

  neon_divider: {
    border: "2px solid",
    borderImage: "linear-gradient(45deg, #5be896, #1e8dda) 1",
    width: "25%",
    marginTop: "40px",
  },

  neon: {
    green: {
      position: "absolute",
      width: "100%",
      height: "40%",
      // left: "0",
      top: "50%",
      zIndex: 1,

      background: "rgba(55, 66, 37, 1)",
    },
    blue: {
      position: "absolute",
      width: "40%",
      height: "60%",
      left: "0",
      top: "205px",

      background: "rgba(57, 47, 95, 0.90)",
      zIndex: 1,
    },
  },
};

export default styles;
