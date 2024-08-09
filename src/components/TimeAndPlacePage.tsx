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
        <div className="responsive-container">
          <img
            src="https://hedvigeleonora.se/wp-content/uploads/2018/02/Hedvig_ext_web1-1200x800.jpg"
            alt="Hedvig Eleonora Church"
            className="responsive-image"
          />
          <div>
            <h2>Vigsel</h2>
            <p>Vigsel sker i Hedvig Eleonora Kyrka klockan 15:00.</p>
          </div>
        </div>
        <div className="responsive-container">
          <img
            src="https://sallskapet.se/wp-content/uploads/2019/08/1arsenalsgatan.jpg"
            alt="Sallskapet"
            className="responsive-image"
          />
          <div>
            <h2>Fest</h2>
            <p>
              Efter vigseln är det dags för fest! Det blir i Sällskapets lokaler
              på Arsenalsgatan 7.
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
