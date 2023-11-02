import { NavLink } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import StorageIcon from "@mui/icons-material/Storage";
export default function Footer() {
  return (
    <>
      <div>
        <NavLink to="https://github.com/zeeshan-akhter/school-management-app" target="_blank">
          <GitHubIcon />
        </NavLink>
        <NavLink to="https://replit.com/@zeeshanakhter/schoolmanagementapi" target="_blank">
          <StorageIcon />
        </NavLink>
      </div>
    </>
  );
}
