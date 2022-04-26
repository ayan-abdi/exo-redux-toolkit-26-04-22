// Ici on va definir chaque route et devant l'exporter
import { Link } from "react-router-dom";
// le link au dessus est celui du router et non celui du mui material
const MenuContain = () => {
  return (
    <main>
      <h1>Voici mon contenu principal ☺</h1>
      <ul>
        <li>
          <Link>Intial</Link>
        </li>
        <li>
          <Link>About</Link>
        </li>
        <li>
          <Link>Routes</Link>
        </li>
      </ul>
    </main>
  );
};
export default MenuContain;
