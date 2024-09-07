import SunsetImage from "../../public/sunset.jpg"; // Adjust the path as needed

const HomePage = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          fontFamily: "'Fraunces', serif", // Fraunces font
          fontWeight: 200, // Thinner weight
        }}
      >
        <p style={{ fontSize: "16px", marginTop: "30px", color: "#555" }}>
          Välkommen på bröllop
        </p>
        <h1
          style={{
            fontFamily: "'Great Vibes', cursive",
            marginBottom: "10px",
            marginTop: "10px",
            fontSize: "45px", // Further reduced size for a lighter feel
            color: "#666", // Lighter gray color for a soft effect
            textShadow: "0.3px 0.3px 1px rgba(0, 0, 0, 0.08)", // Softer shadow
            opacity: 0.9, // Reduced opacity to make it appear lighter
          }}
        >
          Emma och Richard
        </h1>
        <p style={{ fontSize: "16px", marginBottom: "30px", color: "#555" }}>
          31 Maj 2025
        </p>
        <div
          style={{
            width: "100%",
            maxWidth: "700px", // Set max-width for wider screens
            border: "2px solid #ccc", // Add a nice border
            overflow: "hidden", // Ensure the border-radius applies to the image
          }}
        >
          <img
            src={SunsetImage}
            alt="Sunset"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
            }} // Image should fill the container while maintaining aspect ratio
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p style={{ margin: "30px", color: "#555" }}>
            Äntligen bröllop! Vi ska gifta oss i vår och ser så mycket fram emot
            att fira med er!
          </p>
        </div>
      </div>
    </>
  );
};

export default HomePage;
