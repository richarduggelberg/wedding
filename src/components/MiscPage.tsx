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
      {/* Section for information about dress code */}
      <h1 style={{ textAlign: "center" }}>Klädkod</h1>
      <p>
        För vårt bröllop har vi valt en klädkod som vi tror kommer att bidra
        till den festliga stämningen. Vi ser gärna att ni klär er i "mörk
        kostym" vilket innebär kostym för herrar och en finare klänning eller
        dräkt för damer. Vi ser fram emot att se er alla uppklädda för denna
        speciella dag!
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
      <h1 style={{ textAlign: "center" }}>Presenter</h1>
      <p>
        Den största gåvan är att ni vill komma och fira med oss. Om ni vill ge
        en bröllopspresent så önskar vi oss ett bidrag till vår bröllopsresa.
      </p>

      {/* Divider or space between sections */}
      <hr
        style={{
          margin: "40px 0",
          border: "none",
          borderTop: "1px solid #ddd",
        }}
      />

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

export default MiscPage;
