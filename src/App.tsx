import { useState } from "react";
import TopNav from "./components/TopNav";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";

const App = () => {
  const title = "Emma & Richard <3";
  const navBarText = '"Ibland går det bra"';

  const [currentPage, setCurrentPage] = useState<string>("home");

  return (
    <>
      <TopNav title={title} navBarText={navBarText} setPage={setCurrentPage} />
      {currentPage === "home" && <HomePage />}
      {currentPage === "about" && <AboutPage />}
    </>
  );
};

export default App;
