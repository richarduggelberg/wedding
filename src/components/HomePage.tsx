import AsdImage from "../../public/asd.jpeg"; // Adjust the path as needed

const HomePage = () => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
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
