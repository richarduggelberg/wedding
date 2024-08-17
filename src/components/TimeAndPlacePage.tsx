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
        }}
      >
        <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
          2025-05-31!
        </h1>

        {/* Section for the Church */}
        <div className="responsive-container">
          <img
            src="https://hedvigeleonora.se/wp-content/uploads/2018/02/Hedvig_ext_web1-1200x800.jpg"
            alt="Hedvig Eleonora Church"
            className="responsive-image"
          />
          <div>
            <h2>Vigsel</h2>
            <p>
              <span
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  marginRight: "8px",
                }}
              >
                Ⓣ
              </span>
              Östermalmstorg
            </p>
            <p>
              Vigsel sker i Hedvig Eleonora Kyrka klockan 15:00. Därmed kan det
              vara bra att komma dit lite tidigare, speciellt med tanke på att
              trafiken kan vara knasig i och med Stockholm Maraton. Kyrkan är
              öppen innan och vi rekommenderar att komma dit ungefär 14:45.
            </p>
            <p>
              Båda i brudparet tycker om samtliga gäster och därmed gäller fri
              sittning i kyrkan.
            </p>
          </div>
        </div>

        {/* Section for the Walk (Vandring) */}
        <div className="responsive-container">
          <img
            src="vandring.png"
            alt="Vandring between Church and Party Venue"
            className="responsive-image"
          />
          <div>
            <h2>Vandring</h2>
            <p>
              Efter vigseln tar vi en kort promenad från Hedvig Eleonora Kyrka
              till Sällskapets lokaler. Lättare dryck och underhållning kommer
              serveras för att mjukstarta festen.
            </p>
            <p>
              Denna promenad kommer inte korsa löparbanan för Stockholm Maraton.
            </p>
          </div>
        </div>

        {/* Section for the Party Venue */}
        <div className="responsive-container">
          <img
            src="https://sallskapet.se/wp-content/uploads/2019/08/1arsenalsgatan.jpg"
            alt="Sallskapet"
            className="responsive-image"
          />
          <div>
            <h2>Fest</h2>
            <p>
              <span
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  marginRight: "8px",
                }}
              >
                Ⓣ
              </span>
              Kungsträdgården
            </p>
            <p>
              Efter vigseln är det dags för fest! Det blir i Sällskapets lokaler
              på Arsenalsgatan 7.
            </p>
            <p>
              Festen pågår mellan 17:00 och 02:00. Ni behöver inte stanna till
              stängning bara för att brudparet gör det.
            </p>
            <p
              style={{
                backgroundColor: "#ffe6e6",
                color: "#d8000c",
                padding: "15px",
                border: "1px solid #d8000c",
                borderRadius: "4px",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              VIKTIGT angående festlokalen: Bilder som tas i lokalen får inte
              läggas ut offentligt på sociala medier.
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
