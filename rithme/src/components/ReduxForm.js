import React from "react";
import styled from "styled-components";
import { Field, reduxForm } from "redux-form";

const Error = styled.div`
  margin-top: 0.25em;
`;

const Warning = Error.extend`
  color: #ffc107;
`;

const required = value => (value ? undefined : "Required");

const maxLength = max => value =>
  value && value.length > max
    ? `Deben de ser ${max} caracteres como máximo`
    : undefined;

const maxLength15 = maxLength(15);

const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Dirección de correo inválida"
    : undefined;

const aol = value =>
  value && value && /.+@aol\.com/.test(value)
    ? "Really? You still use AOL for your email?"
    : undefined;

const number = value =>
  value && isNaN(Number(value)) ? "Debe de ser un número" : undefined;

const minValue = min => value =>
  value && value < min ? `Mínimo tiene que ser ${min}` : undefined;

const minValue18 = minValue(18);

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div className="form-group">
    <label>{label}</label>
    <div>
      <input
        className="form-control"
        {...input}
        placeholder={label}
        type={type}
      />
      {touched &&
        ((error && <Error>{error}</Error>) ||
          (warning && <Warning>{warning}</Warning>))}
    </div>
  </div>
);

const FieldLevelValidationForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;

  return (
    <form className="container" onSubmit={handleSubmit}>
      <h3 className="mb-3 mt-4">Field Level Validation</h3>
      <Field
        name="username"
        type="text"
        label="Username"
        component={renderField}
        validate={[required, maxLength15]}
      />
      <Field
        name="email"
        type="email"
        label="Email"
        component={renderField}
        validate={email}
        warn={aol}
      />
      <Field
        name="age"
        type="number"
        label="Age"
        component={renderField}
        validate={[required, number, minValue18]}
      />
      <div>
        <button
          type="submit"
          disabled={submitting}
          className="btn btn-primary mr-2"
        >
          Submit
        </button>
        <button
          type="submit"
          disabled={pristine || submitting}
          className="btn btn-secondary"
          onClick={reset}
        >
          Clear Values
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "fieldLevelValidation" // a unique identifier for this form
})(FieldLevelValidationForm);
