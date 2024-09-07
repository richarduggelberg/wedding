import { useState } from "react";
import TopNav from "./components/TopNav";
import HomePage from "./components/HomePage";
import TimeAndPlacePage from "./components/TimeAndPlacePage";
import RsvpPage from "./components/RsvpPage";
import SpeechPage from "./components/SpeechPage";
import KidsPage from "./components/KidsPage";
import MarathonPage from "./components/MarathonPage";
import DressCodePage from "./components/DressCodePage";
import GiftsPage from "./components/GiftsPage";

const App = () => {
  const navBarText = "";

  const [currentPage, setCurrentPage] = useState<string>("home");

  // Mapping for page titles
  const pageTitles: { [key: string]: string } = {
    home: " ",
    about: "Emma & Richard",
    rsvp: "Emma & Richard",
    speech: "Emma & Richard",
    dresscode: "Emma & Richard",
    kids: "Emma & Richard",
    marathon: "Emma & Richard",
    gifts: "Emma & Richard",
  };

  // Dynamically set title based on current page
  const title = pageTitles[currentPage] || "Emma & Richard"; // Default to 'Emma & Richard' if no match

  return (
    <>
      <div>
        <TopNav
          title={title}
          navBarText={navBarText}
          setPage={setCurrentPage}
        />
        {currentPage === "home" && <HomePage />}
        {currentPage === "about" && <TimeAndPlacePage />}
        {currentPage === "rsvp" && <RsvpPage />}
        {currentPage === "speech" && <SpeechPage />}
        {currentPage === "dresscode" && <DressCodePage />}
        {currentPage === "kids" && <KidsPage />}
        {currentPage === "marathon" && <MarathonPage />}
        {currentPage === "gifts" && <GiftsPage />}
      </div>
    </>
  );
};

export default App;
