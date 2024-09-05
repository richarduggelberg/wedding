import { Dispatch, SetStateAction } from "react";
import TopNavList from "./TopNavList";

interface Props {
  title: string;
  navBarText: string;
  setPage: Dispatch<SetStateAction<string>>;
}

function TopNav({ title, navBarText, setPage }: Props) {
  const handleNavItemClick = () => {
    const toggleButton = document.getElementById("navbar-toggler");
    const navbarCollapse = document.getElementById("navbarText");

    // Check if the navbar is currently expanded (i.e., open)
    if (
      toggleButton &&
      navbarCollapse &&
      navbarCollapse.classList.contains("show")
    ) {
      toggleButton.click();
    }
  };

  return (
    <>
      <nav className="navbar navbar-light bg-light navbar-expand-sm">
        <div className="container-fluid">
          <div
            style={{
              lineHeight: "17px",
              border: "1px solid #d4af37",
              padding: "2px",
              color: "#d4af37",
            }}
          >
            <div>結</div>
            <div>婚</div>
          </div>

          <a
            style={{ marginLeft: "15px", fontFamily: "'Great Vibes', cursive" }}
            className="navbar-brand justify-content-center"
            href="#"
            onClick={() => {
              setPage("home");
              handleNavItemClick(); // Trigger the navbar collapse when the title is clicked, but only if it's open
            }}
          >
            {title}
          </a>
          <button
            style={{
              color: "#d4af37",
              borderRadius: "0px",
              border: "none",
            }}
            id="navbar-toggler"
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <TopNavList setPage={setPage} onNavItemClick={handleNavItemClick} />
            <span className="navbar-text">{navBarText}</span>
          </div>
        </div>
      </nav>
    </>
  );
}

export default TopNav;
