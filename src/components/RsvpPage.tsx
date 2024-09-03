import emailjs from "emailjs-com";
import React from "react";

const RsvpPage = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget as HTMLFormElement;

    const nameInput = form.elements.namedItem("name") as HTMLInputElement;
    const emailInput = form.elements.namedItem("email") as HTMLInputElement;

    // Get the values and trim them
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();

    // Check if required fields are empty
    if (!name || !email) {
      alert("Vänligen fyll i både namn och e-post.");
      return;
    }

    // If validation passes, send the form
    emailjs
      .sendForm(
        "service_kdq8bam", // Your service ID
        "template_hl77gjt", // Your template ID
        form,
        "r_BWT__crNnsUHER4" // Your user ID
      )
      .then(
        () => {
          alert("Tack för ditt svar!");
        },
        (error) => {
          console.error("Error:", error);
          alert("Något gick fel. Försök igen.");
        }
      );
  };

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
        <h1 style={{ textAlign: "center" }}>OSA</h1>
        <p>
          Vi ser fram emot att fira denna speciella dag med dig! Vänligen fyll i
          formuläret nedan för att meddela om du kan komma.
        </p>
        <p>
          Om formuläret inte fungerar, vänligen skicka ett mejl till{" "}
          <a
            href="mailto:richardochemma@gmail.com"
            style={{ color: "black", textDecoration: "none" }}
          >
            {" "}
            richardochemma@gmail.com
          </a>{" "}
          med ungefär samma information som formuläret frågar om.
        </p>
        <form onSubmit={handleSubmit}>
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
              <option value="yes">Ja, självklart!</option>
              <option value="no">Tyvärr inte</option>
            </select>
          </div>

          {/* Section for allergies */}
          <div style={{ marginBottom: "15px" }}>
            <label
              htmlFor="allergies"
              style={{ display: "block", marginBottom: "5px" }}
            >
              Allergier eller specialkost (valfritt):
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
              <option value="wine">Jag vill gärna ha vinpaket</option>
              <option value="nonAlcoholic">Alkoholfritt, tack</option>
            </select>
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label
              htmlFor="message"
              style={{ display: "block", marginBottom: "5px" }}
            >
              Om den här låten spelas på dansgolvet så kommer jag att dansa
              (valfritt):
            </label>
            <textarea
              id="message"
              name="message"
              style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
              placeholder="Ex. 'Redex - Cotton Eye Joe'"
            ></textarea>
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
    </div>
  );
};

export default RsvpPage;
