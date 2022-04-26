import { AppBar, Drawer, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import NavMenu from "../nav/nav-menu";

const Header = () => {
  const [vuMenuNav, setVuMenuNav] = useState(false);
  return (
    <header>
      <AppBar position="sticky">
        <Toolbar>
          {/* le toolbar permet d'afficher la barre de nav alor que le iconButton affiche les 3 tiré qui nous ramène ver le menu nav */}
          <IconButton
            onClick={() => setVuMenuNav(true)}
            size="large"
            edge="start"
            color="inherit"
          >
            {/* lors du click sur les 3 barres de nav ça ouvre le menu nav sur le coté en se mettant sur true */}
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h5">
            Forum For ReactLover
          </Typography>
          {/* on peut  arranger la taille du contenu avec cette balise */}
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={vuMenuNav}
        onClose={() => setVuMenuNav(false)}
      >
        {/* le menu nav mit sur le coté est affiché par cette balise, je dois
        egalement mettre mon navMenu ici */}
        <NavMenu lorsDuClick={() => setVuMenuNav(false)} />
      </Drawer>
    </header>
  );
};
export default Header;
