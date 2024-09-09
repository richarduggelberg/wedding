import TalImage from "../../public/tal.jpg"; // Adjust the path as needed

const SpeechPage = () => {
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
          style={{
            textAlign: "center",
            fontSize: "2rem",
            fontFamily: "'Great Vibes', cursive",
          }}
        >
          Vill du hålla tal?
        </h1>
        <p>
          Om du vill hålla tal eller göra något annat skoj under bröllopet,
          vänligen skicka ett mejl till våra toastmasters Emma Wigfeldt och
          Josefin Lindgren på:&nbsp;
          <a
            href="mailto:taltillrichardochemma@gmail.com"
            style={{ color: "black", textDecoration: "none" }}
          >
            taltillrichardochemma@gmail.com
          </a>
          .
        </p>

        <p>Vänligen anmäl tal senast sista april.</p>

        {/* Image at the bottom */}
        <img
          src={TalImage}
          alt="Tal"
          style={{
            marginTop: "20px", // Adds some space above the image
            width: "100%",
            height: "auto", // Ensures the image maintains its aspect ratio
          }}
        />
      </div>
    </div>
  );
};

export default SpeechPage;
