import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import RouteIcon from "@mui/icons-material/Route";
import { NavLink } from "react-router-dom";

const navLinks = [
  { name: "Home", to: "", icon: <HomeIcon /> },
  { name: "About", to: "about", icon: <InfoIcon /> },
  { name: "Route", to: "", icon: <RouteIcon /> },
];

const NavMenu = ({ lorsDuClick }) => {
  return (
    // Ici j'affiche mon menu nav que je l'importe dans mon header folder
    <nav>
      <List onClick={lorsDuClick}>
        {navLinks.map((link, index) => (
          <NavMenuItem {...link} key={index} />
        ))}
      </List>
    </nav>
  );
};
const NavMenuItem = ({ name, to, icon }) => {
  // dans cette constant on affiche le navLink mappé et il recupere les element destructuré(...elm) pour afficher que name:'', to:'', icon:''
  return (
    <ListItemButton component={NavLink} to={to}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={name} />
    </ListItemButton>
  );
};
NavMenu.defaultProps = {
  lorsDuClick: () => {},
};
export default NavMenu;
