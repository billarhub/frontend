import { Field } from "formik";
import React from "react";

const TournamentInput = ({ placeholder, label, name }) => {
  return (
    <div>
      <p className="c-tournament-input__label">{label}</p>
      <Field
        className="c-tournament-input__content"
        placeholder={placeholder}
        name={name}
      />
    </div>
  );
};

export default TournamentInput;
