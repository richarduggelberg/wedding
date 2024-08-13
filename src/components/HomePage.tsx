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
        <h1 style={{ marginBottom: "10px" }}>Vi gifter oss!</h1>
        <p style={{ fontSize: "16px", marginBottom: "20px", color: "#555" }}>
          31 Maj 2025, kl. 15:00
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
      </div>
    </>
  );
};

export default HomePage;
