import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const ShowhidePassword = () => {
  const [visible, setVisibility] = useState(false);
  const Icon = (
    <FontAwesomeIcon
      icon={visible ? <FaEyeSlash /> : <FaEye />}
      onClick={() => setVisibility((visiblity) => !visiblity)}
    />
  );
  const InputType = visible ? "text" : "password";

  return [InputType, Icon];
};

export default ShowhidePassword;
