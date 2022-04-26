// import MenuContain from "../../pages/menu-contain/menu-contain";
import Home from "../../pages/home";
import About from "../../pages/about";

export const appRoute = [
  // Cet array contiendra mes differents path pour chaque element, exple: dans page on a home, about qu'il  faut importer
  { path: "", element: <Home /> },
  { path: "about", element: <About /> },
  //   {
  //     path: "routes",
  //     element: <MenuContain />,
  //   },
];
