import { useNavigate } from "react-router-dom"
import { goToHomePage, goToProfilePage} from "../Router/coordinator"


function Header() {
  const navigate = useNavigate()
  return (
    <header>
      <button onClick={() => goToHomePage(navigate)} >
        Ir para página inicial
      </button>
      <button onClick={() => goToProfilePage(navigate, 'Carlos')} >
        Ir para página de perfil
      </button>
    </header>
  );
}

export default Header;
