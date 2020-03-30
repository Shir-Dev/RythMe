import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";

function CheckAuth(ComponentToProtect) {
  let isToken;

  fetch("http://localhost:3333/users/checktoken")
    .then(res => {
      if (res.status === 200) {
        isToken = true;
      } else {
        const error = new Error(res.error);
        throw error;
      }
    })
    .catch(err => {
      console.error(err);
      isToken = false;
    });

  if (isToken) {
    return ComponentToProtect;
  } else {
    return <Redirect to="/login"></Redirect>;
  }
}

export default CheckAuth;
