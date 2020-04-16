import React, { Component } from "react";
import { Redirect, useParams } from "react-router-dom";
import Axios from "axios";
export default function RecoverGet(ComponentToProtect) {
  return class extends Component {
    constructor() {
      super();

      this.state = {
        loading: true,
        redirect: false,
      };
    }
    componentDidMount() {
      const { token } = this.props.match.params;
      console.log(token);
      Axios.post(`http://localhost:3333/users/validateToken`, { token })
        .then((res) => {
          if (res.status === 200) {
            console.log("hello");
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
