import React from "react";
import PropTypes from "prop-types";
import LocaleContext from "../contexts/LocaleContext";
import LogRegButton from "./LogRegButton";

function RegisterInput({ register }){
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [cpassword, setCPassword] = React.useState("");
  const [ passType, setPassType ] = React.useState("password");
  const { locale } = React.useContext(LocaleContext);

  function onNameChange(event) {
    setName(event.target.value);
  }

  function onEmailChange(event) {
    setEmail(event.target.value);
  }

  function onPasswordChange(event) {
    setPassword(event.target.value);
  }

  function onCPasswordChange(event) {
    setCPassword(event.target.value);
  }

  function onSubmitHandler(event) {
    event.preventDefault();
    if (password !== cpassword) {
      alert("Password dan Konfirmasi Password belum sama!");
      return;
    }
    register({ name, email, password });
  }

  function onPasswordTypeChangeHandler() {
    const changePassType = passType === "password" ? setPassType("text") : setPassType("password");
    changePassType();
  }

  return(
    <form onSubmit={onSubmitHandler} className="log-reg-input">
      <h2>{locale === "id" ? "Daftar" : "Register"}</h2>
      <input type="text" value={name} onChange={onNameChange} required 
        placeholder={locale === "id" ? "Nama" : "Name"} />
      <input type="email" placeholder="Email" value={email} onChange={onEmailChange} required/>
      <input type={passType} autoComplete="current-password" value={password} onChange={onPasswordChange} required 
        placeholder={locale === "id" ? "Sandi" : "Password"} />
      <input type={passType} value={cpassword} onChange={onCPasswordChange} required 
        placeholder={locale === "id" ? "Konfirmasi Sandi" : "Confirm Password"} />
      <LogRegButton passType={passType} onPasswordTypeChange={onPasswordTypeChangeHandler} />
    </form>
  )
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;