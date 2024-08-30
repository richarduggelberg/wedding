const SpeechPage = () => {
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
      <h1 style={{ textAlign: "center" }}>Vill du hålla tal?</h1>
      <p>
        Om du vill hålla tal under bröllopet, vänligen skicka ett mejl till våra
        toastmasters:
        <a href="mailto:taltillrichardochemma@gmail.com">
          {" "}
          taltillrichardochemma@gmail.com
        </a>
        .
      </p>
      <p>Vänligen anmäl tal senast sista April. Spontana tal undanbedes.</p>
    </div>
  );
};

export default SpeechPage;
