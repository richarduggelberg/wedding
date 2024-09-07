const MarathonPage = () => {
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
          Nej
        </h1>
        <p>
          Vi ska inte springa Stockholm Marathon och det ska inte ni heller.
        </p>
        <p>
          Däremot ska många andra göra det samma dag som vårt bröllop. Vi
          rekommenderar därför att ta tunnelbanan till Östermalmstorg för
          vigseln och att ni som behöver boka boende i Stockholm gör det i god
          tid.
        </p>
        <p>
          Från vigseln till festlokalen är det en kort promenad där du inte
          riskerar att bli tacklad av en löpare då vi inte behöver korsa banan.
        </p>
        <p>
          Efter middagen och festen fungerar Stockholmstrafiken som vanligt.
        </p>
      </div>
    </div>
  );
};

export default MarathonPage;
