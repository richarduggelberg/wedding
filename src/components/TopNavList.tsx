import TopNavListItem from "./TopNavListItem";

interface Props {
  setPage: (type: string) => void;
}

function TopNavList({ setPage }: Props) {
  return (
    <>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 m-50 d-flex justify-content-around">
        <TopNavListItem onClick={() => setPage("home")}>Home</TopNavListItem>
        <TopNavListItem onClick={() => setPage("about")}>About</TopNavListItem>
        <TopNavListItem onClick={() => setPage("rsvp")}>RSVP</TopNavListItem>
      </ul>
    </>
  );
}

export default TopNavList;
