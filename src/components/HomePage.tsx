import SunsetImage from "../../public/sunset.jpg"; // Adjust the path as needed

const HomePage = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1 style={{ marginBottom: "10px", marginTop: "30px" }}>
          Vi gifter oss!
        </h1>
        <p style={{ fontSize: "16px", marginBottom: "30px", color: "#555" }}>
          Lördag 31 Maj 2025
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
        <h4 style={{ marginBottom: "10px", marginTop: "30px" }}>
          Vi ska gifta oss i vår och ser så mycket fram emot att fira med er!
        </h4>
        <p style={{ fontSize: "16px", marginBottom: "30px", color: "#555" }}>
          hej
        </p>
      </div>
    </>
  );
};

export default HomePage;
