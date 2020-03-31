import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Axios from "axios";
export default function WithNoAuth(ComponentToProtect) {
  return class extends Component {
    constructor() {
      super();
      this.state = {
        loading: true,
        redirect: false
      };
    }
    componentDidMount() {
      console.log("estoy en withauth");
      Axios("http://localhost:3333/users/checktoken", { withCredentials: true })
        .then(res => {
          if (res.status === 200) {
            this.setState({ loading: false });
          } else {
            const error = new Error(res.error);
            throw error;
          }
        })
        .catch(err => {
          console.error(err);
          this.setState({ loading: false, redirect: true });
        });
    }
    render() {
      const { loading, redirect } = this.state;
      if (loading) {
        return null;
      }
      if (!redirect) {
        console.log("Estoy en el redirect");
        return <Redirect to="/bienvenido" />;
      }
      return <ComponentToProtect {...this.props} />;
    }
  };
}
