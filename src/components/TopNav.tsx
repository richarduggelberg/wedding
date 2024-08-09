import { Dispatch, SetStateAction } from "react";
import TopNavList from "./TopNavList";
import Heart from "../../public/heart.svg";

interface Props {
  title: string;
  navBarText: string;
  setPage: Dispatch<SetStateAction<string>>;
}

function TopNav({ title, navBarText, setPage }: Props) {
  const handleNavItemClick = () => {
    // Find the button with id 'navbar-toggler' and trigger a click event
    const toggleButton = document.getElementById("navbar-toggler");
    if (toggleButton) {
      toggleButton.click();
    }
  };

  return (
    <>
      <nav className="navbar navbar-light bg-light navbar-expand-sm">
        <div className="container-fluid">
          <a
            className="navbar-brand justify-content-center"
            href="#"
            onClick={() => setPage("home")}
          >
            <img
              src={Heart}
              width="50"
              height="50"
              className="d-inline-block align-left"
              alt=""
            />
            {title}
          </a>
          <button
            id="navbar-toggler" // Add this ID
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
