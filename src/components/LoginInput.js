import React from "react";
import PropTypes from "prop-types";
import LocaleContext from "../contexts/LocaleContext";
import LogRegButton from "./LogRegButton";

function LoginInput({ login }) {
  const { locale } = React.useContext(LocaleContext);
  const [ email, setEmail ] = React.useState("");
  const [ password, setPassword ] = React.useState("");
  const [ passType, setPassType ] = React.useState("password");

  function onEmailChangeHandler(event) {
    setEmail(event.target.value);
  }
  
  function onPasswordChangeHandler(event) {
    setPassword(event.target.value);
  }

  function onSubmitHandler(event) {
    event.preventDefault();
    login({email, password});
  }

  function onPasswordTypeChangeHandler() {
    const changePassType = passType === "password" ? setPassType("text") : setPassType("password");
    changePassType();
  }

  return(
    <form onSubmit={onSubmitHandler} className="log-reg-input">
      <h2>{locale === "id" ? "Masuk" : "Login"}</h2>
      <input type="email" placeholder="Email" value={email} onChange={onEmailChangeHandler} required autoFocus/>
      <input type={passType} value={password} onChange={onPasswordChangeHandler} required
        placeholder={locale === "id" ? "Sandi" : "Password"} />
      <LogRegButton passType={passType} onPasswordTypeChange={onPasswordTypeChangeHandler} />
    </form>
  )
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
}

export default LoginInput;