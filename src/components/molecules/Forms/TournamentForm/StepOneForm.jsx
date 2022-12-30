import { Field, Form, Formik } from "formik";
import React from "react";
import Button from "../../../atoms/Button";
import { number, object, string } from "yup";
import TournamentInput from "../../../atoms/Inputs/TournamentInput";
import DatePickerInput from "../../../atoms/Inputs/DatePickerInput";
import SelecInput from "../../../atoms/Inputs/SelectInput";
import RadioInput from "../../../atoms/Inputs/RadioInput";

const StepOneForm = (props) => {
  const handleSubmit = (values) => {
    props.next(values);
  };
  const modalidadDeJuego = [
    { key: "Selecciona una modalidad", value: "" },
    { key: "Bola 8", value: "bola8" },
    { key: "Bola 9", value: "bola9" },
    { key: "Bola 10", value: "bola10" },
  ];

  const tipoDeTorneo = [
    { key: "Selecciona un tipo de torneo", value: "" },
    { key: "Eliminacion directa", value: "direct" },
    { key: "Doble Eliminacion", value: "double" },
  ];

  const enviarCorreos = [
    {key:"Si", value:"si"},
    {key:"No", value:"no"}

  ]
  const acceso =[
    {key:"Público", value:"public"},
    {key:"Privado", value:"private"}

  ]

  return (
    <Formik initialValues={props.data} onSubmit={handleSubmit}>
      {() => (
        <Form>
          <h2>Definición del torneo</h2>
          <TournamentInput
            placeholder="Nombre del torneo"
            label="Nombre del torneo"
            name="tournament_name"
          />
          <TournamentInput
            placeholder="Cantidad de judadores"
            label="Cantidad de jugadores"
            name="number_of_players"
          />
          <TournamentInput
            placeholder="Descripcion corta"
            label="Descripcion corta"
            name="short_description"
          />
          <DatePickerInput label="Fecha de inicio" name="start_date" />
          <DatePickerInput label="Fecha de finalización" name="due_date" />
          <TournamentInput placeholder="Lugar" label="Lugar" name="place" />
          <SelecInput
            label="Modalidad de juego"
            name="mode"
            options={modalidadDeJuego}
          />
          <SelecInput
            label="Tipo de torneo"
            name="type"
            options={tipoDeTorneo}
          />
          <TournamentInput
            placeholder="cantidad de sets"
            label="Cantidad de sets por mesa"
            name="sets"
          />
          <RadioInput name='send_email' label="Recordatorio de correo electrónico a inscritos" options={enviarCorreos}/>
          <RadioInput name='access' label="Acceso" options={acceso}/>
          <TournamentInput
            placeholder="Ingresar valor en $"
            label="Valor del torneo"
            name="price"
          />

          <Button type="submit">Siguiente</Button>
        </Form>
      )}
    </Formik>
  );
};

export default StepOneForm;
