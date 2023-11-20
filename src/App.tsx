import { useState } from "react";
import TopNav from "./components/TopNav";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import RsvpPage from "./components/RsvpPage";

const App = () => {
  const title = "Emma & Richard";
  const navBarText = "2025-08-16 eller nåt";

  const [currentPage, setCurrentPage] = useState<string>("home");

  return (
    <>
      <TopNav title={title} navBarText={navBarText} setPage={setCurrentPage} />
      {currentPage === "home" && <HomePage />}
      {currentPage === "about" && <AboutPage />}
      {currentPage === "rsvp" && <RsvpPage />}
    </>
  );
};

export default App;
