import React from "react";

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
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginBottom: "20px",
          }}
        >
          <img
            src="https://hedvigeleonora.se/wp-content/uploads/2018/02/Hedvig_ext_web1-1200x800.jpg"
            alt="Hedvig Eleonora Church"
            style={{ width: "300px", height: "auto" }}
          />
          <div>
            <h2>Vigsel</h2>
            <p>Vigsel sker i Hedvig Eleonora Kyrka klockan 15:00.</p>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <img
            src="https://sallskapet.se/wp-content/uploads/2019/08/1arsenalsgatan.jpg"
            alt="Sallskapet"
            style={{ width: "300px", height: "auto" }}
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
    </div>
  );
};

export default TimeAndPlacePage;
