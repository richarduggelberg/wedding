import { useState } from "react";
import TopNav from "./components/TopNav";
import HomePage from "./components/HomePage";
import TimeAndPlacePage from "./components/TimeAndPlacePage";
import RsvpPage from "./components/RsvpPage";

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
    </>
  );
};

export default App;
