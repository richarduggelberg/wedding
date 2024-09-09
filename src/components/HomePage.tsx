import SunsetImage from "../../public/puss.jpg"; // Adjust the path as needed
import SakuraImage from "../../public/sakura1.png"; // Adjust the path as needed

const HomePage = () => {
  return (
    <>
      <div
        style={{
          position: "relative", // This is necessary for the absolute positioning of the images
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          fontFamily: "'Fraunces', serif", // Fraunces font
          fontWeight: 200, // Thinner weight
        }}
      >
        {/* Left cherry blossom image */}
        <img
          src={SakuraImage}
          alt="Cherry Blossom Left"
          className="sakura-left" // Move all relevant styles to CSS
        />

        {/* Right cherry blossom image, mirrored */}
        <img
          src={SakuraImage}
          alt="Cherry Blossom Right"
          className="sakura-right" // Move all relevant styles to CSS
        />

        <p style={{ fontSize: "18px", marginTop: "30px", color: "#555" }}>
          Välkommen på bröllop
        </p>
        <h1
          style={{
            fontFamily: "'Great Vibes', cursive",
            marginBottom: "10px",
            marginTop: "10px",
            fontSize: "45px", // Further reduced size for a lighter feel
            color: "#666", // Lighter gray color for a soft effect
            textShadow: "0.3px 0.3px 1px rgba(0, 0, 0, 0.08)", // Softer shadow
            opacity: 0.9, // Reduced opacity to make it appear lighter
          }}
        >
          Emma och Richard
        </h1>
        <p style={{ fontSize: "18px", marginBottom: "30px", color: "#555" }}>
          31 Maj 2025
        </p>
        <div
          style={{
            width: "100%",
            maxWidth: "700px", // Set max-width for wider screens
            overflow: "hidden", // Ensure the border-radius applies to the image
          }}
        >
          <img
            src={SunsetImage}
            alt="Sunset"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
            }} // Image should fill the container while maintaining aspect ratio
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p style={{ fontSize: "18px", margin: "30px", color: "#555" }}>
            Äntligen bröllop! Vi ska gifta oss i vår och ser så mycket fram emot
            att fira med er!
          </p>
        </div>
      </div>

      {/* Inline style for media queries */}
      <style>
        {`
          /* Default styles for larger screens */
          .sakura-left {
            position: absolute;
            top: 0;
            left: -40px;
            width: 300px;
            height: auto;
            transform: scaleX(-1);
            z-index: -1;
          }
          
          .sakura-right {
            position: absolute;
            top: 0;
            right: -40px;
            width: 300px;
            height: auto;
            z-index: -1;
          }

          /* Media query for screens smaller than 768px (like mobile screens) */
          @media (max-width: 768px) {
            .sakura-left, .sakura-right {
              width: 80px; /* Smaller width for cherry blossoms on mobile */
            }
            .sakura-left {
              left: -10px;
            }
            .sakura-right {
              right: -10px;
            }
          }
        `}
      </style>
    </>
  );
};

export default HomePage;
