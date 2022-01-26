import "./sidebar.scss";
import { Link } from 'react-router-dom';

function Sidebar() {
  const week = [];

  // Populate the week routes
  for (let i = 1; i < 14; i++) {
    let obj = { route: `/week${i}`, name: `Week ${i}` };
    week.push(obj);
  }

  return (
    <div className="sidebarWrapper">
      <nav>
        {/* Dynamically generate links to each weekly entry */}
        {week.map((week) => (
          <Link className="link" to={week.route} key={week.name}>
            {week.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}

export default Sidebar;
