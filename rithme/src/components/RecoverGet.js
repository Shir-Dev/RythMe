/*import React, { useState } from "react";
import RecoverPass from "./RecoverPass";
import Axios from "axios";
import { Redirect } from "react-router-dom";

function RecoverGet() {
    const [redirect, setRedirect] = useState();eringPass] = useState()
 const [recoveringPass, setRecoveringPass] = useState(
    <RecoverPass gettingData={gettingData}></RecoverPass>
  );

  let recoverObject;
  function gettingData(data) {
    recoverObject = data;
    console.log(recoverObject);
  }
  function validateToken() {
    Axios("http://localhost:3333/users/validateToken", {
      method: "GET",
      data: "",
      withCredentials: true,
    }).then((res) => {
      if (res.status === 200) {
           setRedirect(<Redirect to="/recoverPass" />);
      } else {
        const error = new Error(res.error);
        throw error;
      }
    });
  }

  return recoveringPass;
}

export default RecoverGet;

*/
