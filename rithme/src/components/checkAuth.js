import React from "react";
import { Redirect } from "react-router-dom";

async function checkAuth() {
  let loading = true;
  fetch("http://localhost:3333/users/checktoken", { credentials: "include" })
    .then(res => {
      if (res.status === 200) {
        let isToken = true;
        console.log("asdf", isToken);
        return isToken;
      } else {
        const error = new Error(res.error);
        console.log("isToken");
        throw error;
      }
    })
    .catch(err => {
      console.error(err);
      let isToken = false;
      console.log("estoy en el error");
    });
}

export default checkAuth;
