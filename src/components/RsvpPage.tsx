const RsvpPage = () => {
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
      <h1 style={{ textAlign: "center" }}>OSA</h1>
      <p>
        Vi ser fram emot att fira denna speciella dag med dig! Vänligen fyll i
        formuläret nedan för att meddela om du kan komma.
      </p>
      <p>
        Om formuläret inte fungerar, vänligen skicka ett mejl till{" "}
        <a href="mailto:dinmamma@gmail.com"> dinmamma@gmail.com</a> med ungefär
        samma information som formuläret frågar om.
      </p>
      <form>
        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor="name"
            style={{ display: "block", marginBottom: "5px" }}
          >
            Namn:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor="email"
            style={{ display: "block", marginBottom: "5px" }}
          >
            E-post:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor="attendance"
            style={{ display: "block", marginBottom: "5px" }}
          >
            Kan du komma?
          </label>
          <select
            id="attendance"
            name="attendance"
            style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
          >
            <option value="yes">Ja!</option>
            <option value="no">Tyvärr inte</option>
          </select>
        </div>

        {/* New section for answering for others */}
        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor="respondingForOthers"
            style={{ display: "block", marginBottom: "5px" }}
          >
            Svarar du för några andra?
          </label>
          <select
            id="respondingForOthers"
            name="respondingForOthers"
            style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
          >
            <option value="nej">Nej</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>

        {/* Section for allergies */}
        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor="allergies"
            style={{ display: "block", marginBottom: "5px" }}
          >
            Allergier eller specialkost:
          </label>
          <textarea
            id="allergies"
            name="allergies"
            style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
            placeholder="Ange om du har några allergier eller speciella kostbehov."
          ></textarea>
        </div>

        {/* Section for drink preferences */}
        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor="drinks"
            style={{ display: "block", marginBottom: "5px" }}
          >
            Dryckesval till middagen:
          </label>
          <select
            id="drinks"
            name="drinks"
            style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
          >
            <option value="wine">Jag gärna ha vinpaket!</option>
            <option value="nonAlcoholic">Alkoholfritt, tack!</option>
          </select>
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor="message"
            style={{ display: "block", marginBottom: "5px" }}
          >
            Meddelande (valfritt):
          </label>
          <textarea
            id="message"
            name="message"
            style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
          ></textarea>
        </div>
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            backgroundColor: "#007BFF",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Skicka
        </button>
      </form>
    </div>
  );
};

export default RsvpPage;
