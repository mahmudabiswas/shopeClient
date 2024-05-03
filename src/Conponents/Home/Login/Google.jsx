import React, { useContext } from "react";
import { AuthContext } from "../../../AuthProvider";

const Google = () => {
  const { popUp } = useContext(AuthContext);
  const handleClickGoogle = () => {
    popUp();
  };
  return (
    <div>
      <h2 onClick={handleClickGoogle}>Google</h2>
    </div>
  );
};

export default Google;
