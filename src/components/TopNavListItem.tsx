import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick: () => void;
}

function TopNavListItem({ children, onClick }: Props) {
  return (
    <>
      <li className="nav-item">
        <a
          onClick={onClick}
          className="nav-link active"
          aria-current="page"
          href="#"
        >
          {children}
        </a>
      </li>
    </>
  );
}

export default TopNavListItem;
