import { useNavigate } from "react-router-dom";
import { goToAdminPage,goToHomePage } from "../routes/coordinator";
import React from "react";

function Header(props) {
  const navigate = useNavigate();

  const renderHeader = () => {
      switch (props.actualPage) {
          case "home-page":
              return (
                  <button onClick={()=> goToAdminPage(navigate)} >Entrar</button>
              )
              case "admin-page":
                  return (
                      <button onClick={()=> goToHomePage(navigate)} >Logout</button>
                  )
                  default:
                      return;
              
      }
  }

  // { props.currentPage === "home-page" ? <button onClick={() => navigateToAdminPage(navigate)}>Entrar</button>
  // : <button onClick={() => navigateToHome(navigate)}>Logout</button>}

  return (
    <header>
      <h1>labeX</h1>
      {renderHeader()}
    </header>
  );
}

export default Header;
