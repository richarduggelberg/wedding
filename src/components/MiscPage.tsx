const MiscPage = () => {
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
      <h1 style={{ textAlign: "center" }}>Information om barn</h1>
      <p>
        Vi älskar era barn, men för att kunna fira denna speciella dag på bästa
        sätt har vi valt att ha ett bröllop utan barn. Vi hoppas att ni förstår
        och att ni kan njuta av en kväll utan barn.
      </p>
      <p>
        Självklart är ammande mammor mer än välkomna. Vi ser fram emot att fira
        med er!
      </p>

      {/* Divider or space between sections */}
      <hr
        style={{
          margin: "40px 0",
          border: "none",
          borderTop: "1px solid #ddd",
        }}
      />

      {/* Section for information about gifts */}
      <h1 style={{ textAlign: "center" }}>Gåvor</h1>
      <p>
        Den största gåvan för oss är att ni vill komma och fira vår speciella
        dag med oss. Er närvaro betyder allt för oss och vi ser verkligen fram
        emot att dela denna dag med er.
      </p>
      <p>
        Om ni ändå vill ge oss en gåva, skulle vi bli väldigt glada för ett
        bidrag till vår smekmånad.
      </p>
    </div>
  );
};

export default MiscPage;
