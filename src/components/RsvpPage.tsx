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
            Kommer du att delta?
          </label>
          <select
            id="attendance"
            name="attendance"
            style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
          >
            <option value="yes">Ja</option>
            <option value="no">Nej</option>
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
            <option value="wine">Vin</option>
            <option value="beer">Öl</option>
            <option value="nonAlcoholic">Alkoholfritt</option>
            <option value="noPreference">Ingen preferens</option>
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
