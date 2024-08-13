import { useState } from "react";
import TopNav from "./components/TopNav";
import HomePage from "./components/HomePage";
import TimeAndPlacePage from "./components/TimeAndPlacePage";
import RsvpPage from "./components/RsvpPage";
import SpeechPage from "./components/SpeechPage";
import MiscPage from "./components/MiscPage";

const App = () => {
  const title = "Emma & Richard";
  const navBarText = "2025-05-31";

  const [currentPage, setCurrentPage] = useState<string>("home");

  return (
    <>
      <TopNav title={title} navBarText={navBarText} setPage={setCurrentPage} />
      {currentPage === "home" && <HomePage />}
      {currentPage === "about" && <TimeAndPlacePage />}
      {currentPage === "rsvp" && <RsvpPage />}
      {currentPage === "speech" && <SpeechPage />}
      {currentPage === "misc" && <MiscPage />}
    </>
  );
};

export default App;
