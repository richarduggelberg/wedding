interface Props {
  onClick: () => void;
  children: React.ReactNode;
}

function TopNavListItem({ onClick, children }: Props) {
  return (
    <li className="nav-item">
      <a className="nav-link" href="#" onClick={onClick}>
        {children}
      </a>
    </li>
  );
}

export default TopNavListItem;
