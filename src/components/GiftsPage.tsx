const GiftsPage = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "20px",
        }}
      >
        {/* New Section with Fraunces Font */}
        <div
          style={{
            maxWidth: "600px",
            margin: "20px auto",
            padding: "20px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            backgroundColor: "#fff",
            fontFamily: "'Fraunces', serif", // Fraunces font
            fontWeight: 200, // Thinner weight
            textAlign: "center", // Center the text in this div
          }}
        >
          <h1
            style={{
              textAlign: "center",
              fontFamily: "'Great Vibes', cursive",
            }}
          >
            Presenter
          </h1>
          <p>
            Den största gåvan är att ni vill komma och fira med oss. Om ni vill
            ge en bröllopspresent så önskar vi oss ett bidrag till vår
            bröllopsresa.
          </p>
          <p>
            Ett eventuellt bidrag skickas till vår ena toastmaster:
            <> Josefin Lindgren (070 424 22 17). </>
            Detta görs i så fall tidigast den 15 maj 2025.
          </p>
        </div>
      </div>
    </>
  );
};

export default GiftsPage;
