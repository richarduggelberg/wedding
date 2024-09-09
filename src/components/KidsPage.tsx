import stockholmImage from "../../public/stockholm.jfif"; // Adjust the path as needed

const KidsPage = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "20px",
        }}
      >
        <div
          style={{
            maxWidth: "600px",
            margin: "20px auto",
            padding: "20px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            backgroundColor: "#fff",
            fontFamily: "'Fraunces', serif", // Fraunces font
            fontWeight: 200, // Thinner weight
            textAlign: "center", // Center the text in this div
          }}
        >
          <h1
            style={{
              textAlign: "center",
              fontFamily: "'Great Vibes', cursive",
            }}
          >
            Barn
          </h1>
          <p>
            Barn är underbara, men den här dagen får de stanna hemma. Självklart
            är ammande spädbarn välkomna.
          </p>
        </div>

        {/* New Section with Fraunces Font */}
        <div
          style={{
            maxWidth: "600px",
            margin: "20px auto",
            padding: "20px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            backgroundColor: "#fff",
            fontFamily: "'Fraunces', serif", // Fraunces font
            fontWeight: 200, // Thinner weight
            textAlign: "center", // Center the text in this div
          }}
        >
          <h1
            style={{
              textAlign: "center",
              fontFamily: "'Great Vibes', cursive",
            }}
          >
            Boende i Stockholm
          </h1>
          <p>
            Om ni planerar att resa till Stockholm för vårt bröllop
            rekommenderar vi att ni bokar ert boende i god tid. Hör av er till
            oss om ni har någon fundering eller vill ha några tips.
          </p>

          {/* Image of Stockholm */}
          <img
            src={stockholmImage}
            alt="Stockholm"
            style={{
              width: "100%", // Make the image full width within the container
              height: "auto",
              marginTop: "20px", // Add some space between text and image
            }}
          />
        </div>
      </div>
    </>
  );
};

export default KidsPage;
