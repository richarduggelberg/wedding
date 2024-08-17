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
        toastmasters!
        <a href="mailto:dinmamma@gmail.com"> dinmamma@gmail.com</a>.
      </p>
      <p>
        Vänligen anmäl tal senast sista April. Spontana tal är strängt förbjudna
        och kommer tillåtas med ungefär samma sannolikhet som att få en
        kolonilott på Södermalm utan kötid.
      </p>
    </div>
  );
};

export default SpeechPage;
