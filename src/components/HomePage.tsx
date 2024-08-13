import AsdImage from "../../public/asd.jpeg"; // Adjust the path as needed

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
        <h1 style={{ marginBottom: "10px" }}>Vi gifter oss!</h1>{" "}
        {/* Banner text */}
        <p style={{ fontSize: "16px", marginBottom: "20px", color: "#555" }}>
          {" "}
          {/* Smaller text for date and time */}
          31 Maj 2025, kl. 15:00
        </p>
        <img
          src={AsdImage}
          alt="Asd"
          style={{ width: "100%", height: "auto", maxWidth: "100%" }} // Ensures the image fits within the container while maintaining aspect ratio
        />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>asd</div>
    </>
  );
};

export default HomePage;
