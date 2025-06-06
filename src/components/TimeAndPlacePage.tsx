const TimeAndPlacePage = () => {
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
          fontFamily: "'Fraunces', serif", // Fraunces font
          fontWeight: 200, // Thinner weight
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: "20px",
            fontFamily: "'Great Vibes', cursive",
          }}
        >
          2025 . 05 . 31
        </h1>

        {/* Section for the Church */}
        <div className="responsive-container">
          <img
            src="kyrka.jpg"
            alt="Hedvig Eleonora Church"
            className="responsive-image"
          />
          <div>
            <h2
              style={{
                display: "flex",
                justifyContent: "center",
                fontFamily: "'Great Vibes', cursive",
              }}
            >
              Vigsel
            </h2>
            <p>
              Vigsel sker i Hedvig Eleonora kyrka klockan 15.00. Vänligen var på
              plats ca kl. 14.45. Tänk på att det kan ta lite längre tid än
              vanligt att ta sig till kyrkan på grund av Stockholm Marathon. Vi
              rekommenderar därmed att åka tunnelbana till Östermalmstorg.
            </p>
            <p>
              Båda i brudparet tycker om samtliga gäster och därmed gäller fri
              sittning i kyrkan. Första raden är däremot bara för närmsta
              familjen.
            </p>
          </div>
        </div>

        {/* Section for the Walk (Vandring) */}
        <div className="responsive-container">
          <img
            src="marathon2.png"
            alt="Vandring between Church and Party Venue"
            className="responsive-image"
          />
          <div>
            <h2
              style={{
                display: "flex",
                justifyContent: "center",
                fontFamily: "'Great Vibes', cursive",
              }}
            >
              Promenad
            </h2>
            <div
              style={{
                backgroundColor: "#fff3cd",
                borderLeft: "6px solid #ffc107",
                padding: "10px",
                marginBottom: "10px",
                fontWeight: "bold",
              }}
            >
              <strong>UPPDATERING:</strong> På grund av ändrad rutt för
              Stockholm Marathon behöver vi nu korsa löparbanan på väg till
              festen. Det finns ett övergångsställe vid Nybroplan där vi kan
              slussas över. Se uppdaterad bild.
            </div>
            <p>
              Efter vigseln tar vi en kortare promenad från Hedvig Eleonora
              kyrka till Sällskapets lokaler.
            </p>
            <p>
              Tidigare skulle vi undvika löparbanan, men nu måste vi korsa den.
            </p>
          </div>
        </div>

        {/* Section for the Party Venue */}
        <div className="responsive-container">
          <img
            src="sallskapet.jpg"
            alt="Sallskapet"
            className="responsive-image"
          />
          <div>
            <h2
              style={{
                display: "flex",
                justifyContent: "center",
                fontFamily: "'Great Vibes', cursive",
              }}
            >
              Middag och fest
            </h2>
            <p>
              Efter vigseln är det dags för middag och fest! Det blir i
              Sällskapets lokaler på Arsenalsgatan 7 från och med klockan 16.30.
              Middagen börjar vid 17.30. Festen pågår till 02.00.
            </p>
            <p>
              <strong>Viktigt angående festlokalen: </strong>Bilder som tas i
              lokalen får inte läggas ut offentligt på sociala medier.
            </p>
          </div>
        </div>
      </div>

      <style>
        {`
          .responsive-container {
            display: flex;
            align-items: center;
            gap: 20px;
            margin-bottom: 20px;
          }

          .responsive-image {
            width: 300px; /* Default image width on larger screens */
            height: auto;
          }

          @media (max-width: 768px) {
            .responsive-container {
              flex-direction: column; /* Stack items vertically on smaller screens */
            }

            .responsive-image {
              width: 100%; /* Make the image stretch to full width */
              height: auto; /* Keep the aspect ratio */
            }
          }
        `}
      </style>
    </div>
  );
};

export default TimeAndPlacePage;
