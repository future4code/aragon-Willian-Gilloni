import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { goToHomePage } from "../routes/coordinator";
import {requestLogin} from "../services/requests"


function Header() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleInputValues = (event) => {
    switch (event.target.name) {
      case ("email"):
        return setEmail(event.target.value)
      case ("password"):
        return setPassword(event.target.value)
      default:
        return
    }
  }

  const login = (event) => {
    event.preventDefault()
    requestLogin(email, password, navigate)
  }

  const logout = () => {
    localStorage.removeItem("token")
    goToHomePage(navigate)
  }

  const renderHeader = 
    localStorage.getItem("token") ?
      (
        <button onClick={logout}>Logout</button>
      ) : (
        <form onSubmit={login}>
          <label htmlFor={"email"}>Email</label>
          <input
            type={"text"}
            name={"email"}
            id={"email"}
            value={email}
            onChange={handleInputValues}
          />
          <br />
          <br/>
          <label htmlFor={"password"}>Senha</label>
          <input
            type={"password"}
            name={"password"}
            id={"password"}
            value={password}
            onChange={handleInputValues}
          />
          <br/>
          <br/>
          <button type={"submit"}>Login</button>
        </form>
      )

  

  return (
    <header>
      <h1>labeX</h1>
      {renderHeader}
    </header>
  );
}

export default Header;