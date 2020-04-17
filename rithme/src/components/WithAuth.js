import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Axios from "axios";
import { userID } from "./VariableCarrito.js";
export default function withAuth(ComponentToProtect) {
  return class extends Component {
    constructor() {
      super();
      this.state = {
        loading: true,
        redirect: false,
      };
    }
    componentDidMount() {
      Axios("http://localhost:3333/users/checktoken", { withCredentials: true })
        .then((res) => {
          if (res.status === 200) {
            this.state.user = res.data;

            this.setState({ loading: false });
          } else {
            const error = new Error(res.error);
            throw error;
          }
        })
        .catch((err) => {
          console.error(err);
          this.setState({ loading: false, redirect: true });
        });
    }
    render() {
      const { loading, redirect } = this.state;
      if (loading) {
        return null;
      }
      if (redirect) {
        return <Redirect to="/login" />;
      }
      return <ComponentToProtect user={this.state.user} {...this.props} />;
    }
  };
}
