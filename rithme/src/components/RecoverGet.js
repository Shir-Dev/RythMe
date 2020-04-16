/*import React, { Component } from "react";
import { Redirect, useParams } from "react-router-dom";
import Axios from "axios";
export default function RecoverGet() {
  return class extends Component {
    constructor() {
      super();
      this.state = {
        loading: true,
        redirect: false,
      };
    }
    componentDidMount() {
      let { token } = useParams();
      console.log(token);
      alert("Joooder");

      /*Axios("http://localhost:3333/users/checktoken", { withCredentials: true })
        .then(res => {
          if (res.status === 200) {
            this.state.user = res.data;
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
        //return null;
        return <p>Hola</p>;
      }
      if (redirect) {
        return <Redirect to="/login" />;
      }
      //return <ComponentToProtect user={this.state.user} {...this.props} />;

      return <p>Hola</p>;
    }
  };
}
*/
