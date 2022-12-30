import { Field, Form, Formik } from "formik";
import React from "react";
import Button from "../../../atoms/Button";
import InputFile from "../../../atoms/Inputs/InputFile";
import TournamentInput from "../../../atoms/Inputs/TournamentInput";

const StepTwoForm = (props) => {
  const handleSubmit = (values) => {
    props.next(values, true);
  };
  return (
    <Formik initialValues={props.data} onSubmit={handleSubmit}>
      {({values}) => (
        <Form>
          <h2>Informacion gráfica</h2>
         {/* <TournamentInput label="foto"  placeholder="foto del torneo" name="foto"/> */}
         <InputFile label="Subir Flyer" name="tournament_photo"/>
         <div className="c-steptwo-form__buttons">
          <Button type="submit">Guardar y enviar</Button>
          <Button onClick={()=>props.back(values)}>Anterior</Button>
         </div>
        </Form>
      )}
    </Formik>
  );
};

export default StepTwoForm;
