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
        }}
      >
        <h1 style={{ textAlign: "center", fontSize: "2.5rem" }}>
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
      </div>
    </div>
  );
};

export default SpeechPage;
