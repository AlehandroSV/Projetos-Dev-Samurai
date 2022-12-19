import { Link } from "react-router-dom";

import { Container } from "./styles";

// Img | Icons
import BurgerIcon from "../../assets/burger.svg";

const Sidebar = () => {
  return (
    <Container>
      <button>x</button>
      <nav>
        <ul>
          <li>
            <Link to="">
              <img src={BurgerIcon} alt="" />
              <span>Hambúrgueres</span>
            </Link>
          </li>
        </ul>
      </nav>
    </Container>
  );
};
export default Sidebar;
