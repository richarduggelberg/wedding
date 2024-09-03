import sunsetImage from "../../public/sunset.jpg"; // Adjust the path to your image

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
        }}
      >
        <h1 style={{ textAlign: "center" }}>Klädkod</h1>
        <p>
          Mörk kostym (somriga färger tillåtna) och långklänning eller minst
          knälång klänning.
        </p>
        <p>Tänk på att det endast är bruden som bär vitt.</p>

        {/* Image section */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
          }}
        >
          <img
            src={sunsetImage}
            alt="Dress Code Example 1"
            style={{ width: "30%", height: "auto", borderRadius: "8px" }}
          />
          <img
            src={sunsetImage}
            alt="Dress Code Example 2"
            style={{ width: "30%", height: "auto", borderRadius: "8px" }}
          />
          <img
            src={sunsetImage}
            alt="Dress Code Example 3"
            style={{ width: "30%", height: "auto", borderRadius: "8px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default DressCodePage;
