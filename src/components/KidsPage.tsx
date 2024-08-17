const KidsPage = () => {
  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "0 auto",
        padding: "20px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#fff",
      }}
    >
      {/* Section for information about kids */}
      <h1 style={{ textAlign: "center" }}>Barn</h1>
      <p>
        Vi gillar barn i allmänhet och era barn i synnerhet men den här dagen
        får de stanna hemma.
      </p>
      <p>Självklart är ammande spädbarn välkomna.</p>

      {/* Divider or space between sections */}
      <hr
        style={{
          margin: "40px 0",
          border: "none",
          borderTop: "1px solid #ddd",
        }}
      />

      {/* Section for accommodation in Stockholm */}
      <h1 style={{ textAlign: "center" }}>Boende i Stockholm</h1>
      <p>
        Om ni planerar att resa till Stockholm för vårt bröllop, rekommenderar
        vi att ni bokar ert boende i god tid. Det finns många fina hotell i
        området, och att boka i förväg hjälper er att hitta det som passar bäst
        för er.
      </p>
    </div>
  );
};

export default KidsPage;
