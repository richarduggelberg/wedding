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
            Om ni planerar att resa till Stockholm för vårt bröllop,
            rekommenderar vi att ni bokar ert boende i god tid. Det finns många
            fina hotell i området, och att boka i förväg hjälper er att hitta
            det som passar bäst för er.
          </p>
        </div>
      </div>
    </>
  );
};

export default KidsPage;
