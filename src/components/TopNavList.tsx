import TopNavListItem from "./TopNavListItem";

interface Props {
  setPage: (type: string) => void;
  onNavItemClick: () => void; // Add this prop
}

function TopNavList({ setPage, onNavItemClick }: Props) {
  return (
    <>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 m-50 d-flex justify-content-around">
        <TopNavListItem
          onClick={() => {
            setPage("about");
            onNavItemClick();
          }}
        >
          Tid & Plats
        </TopNavListItem>
        <TopNavListItem
          onClick={() => {
            setPage("rsvp");
            onNavItemClick();
          }}
        >
          OSA
        </TopNavListItem>
        <TopNavListItem
          onClick={() => {
            setPage("speech");
            onNavItemClick();
          }}
        >
          Hålla tal
        </TopNavListItem>
        <TopNavListItem
          onClick={() => {
            setPage("marathon");
            onNavItemClick();
          }}
        >
          Stockholm Maraton
        </TopNavListItem>
        <TopNavListItem
          onClick={() => {
            setPage("misc");
            onNavItemClick();
          }}
        >
          Övrig information
        </TopNavListItem>
      </ul>
    </>
  );
}

export default TopNavList;
