import React from "react";
import PropTypes from "prop-types"
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { TiArrowRightThick } from "react-icons/ti";
import LocaleContext from "../contexts/LocaleContext";

function LogRegButton({ passType, onPasswordTypeChange }) {
  const { locale } = React.useContext(LocaleContext);
  return(
    <div className="log-reg-button">
      <button className="btn-item" type="button" onClick={onPasswordTypeChange} 
        title={locale === "id" ? "alihkan password" : "toggle password"} >
        {passType === "password" ? <FaEye /> : <FaEyeSlash />}
      </button>
      <button className="btn-item" type="submit">
        <TiArrowRightThick />
      </button>
    </div>
  )
}

LogRegButton.propTypes = {
  passType: PropTypes.string.isRequired,
  onPasswordTypeChange: PropTypes.func.isRequired,
}

export default LogRegButton;