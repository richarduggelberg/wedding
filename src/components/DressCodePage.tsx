import kostym3Image from "../../public/kostym3.jpg"; // Adjust the path as needed

const DressCodePage = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "20px" }}>
      <div
        style={{
          maxWidth: "800px",
          width: "100%",
          padding: "20px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#fff",
          textAlign: "center",
          fontFamily: "'Fraunces', serif", // Fraunces font
          fontWeight: 200, // Thinner weight
        }}
      >
        <h1
          style={{ textAlign: "center", fontFamily: "'Great Vibes', cursive" }}
        >
          Klädkod
        </h1>
        <p>
          Mörk kostym (somriga färger tillåtna) och långklänning eller minst
          knälång klänning.
        </p>
        <p>Tänk på att det endast är bruden som bär vitt.</p>

        {/* Image section for kostym1 and kostym2, arranged vertically */}
        <div
          style={{
            display: "flex",
            flexDirection: "column", // Change the layout to vertical
            alignItems: "center", // Center align the images
            marginTop: "20px",
          }}
        >
          <img
            src={kostym3Image}
            alt="Kostym Example 1"
            style={{
              width: "100%",
              height: "auto",
              marginBottom: "20px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default DressCodePage;
