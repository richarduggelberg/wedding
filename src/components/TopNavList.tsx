import TopNavListItem from "./TopNavListItem";

interface Props {
  setPage: (type: string) => void;
}

function TopNavList({ setPage }: Props) {
  return (
    <>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 m-50 d-flex justify-content-around">
        <TopNavListItem onClick={() => setPage("about")}>
          Tid & Plats
        </TopNavListItem>
        <TopNavListItem onClick={() => setPage("rsvp")}>OSA</TopNavListItem>
        <TopNavListItem onClick={() => setPage("rsvp")}>
          Hålla tal
        </TopNavListItem>
      </ul>
    </>
  );
}

export default TopNavList;
