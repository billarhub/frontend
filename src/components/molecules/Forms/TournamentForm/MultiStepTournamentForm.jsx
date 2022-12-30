import React, { useState } from "react";
import FormLayout from "../../../../layout/FormLayout/FormLayout";
import StepOneForm from "./StepOneForm";
import StepTwoForm from "./StepTwoForm";

const MultiStepTournamentForm = () => {
  const [data, setdata] = useState({
    tournament_name: "",
    number_of_players: "",
    short_description: "",
    start_date: "",
    due_date:"",
    mode:"",
    type:"",
    sets:"",
    send_email:"",
    access:"",
    price:"",
    tournament_photo:""

  });
  const sleep = (time) => new Promise((acc) => setTimeout(acc, time));
  const request = async (formdata) => {
    await sleep(3000);
    console.log("Data enviada", formdata);
  };
  const [currentStep, setcurrentStep] = useState(0);
  const handleNext = (newData, final = false) => {
    setdata((prev) => ({ ...prev, ...newData }));
    if (final) {
      request(newData);
      return;
    }
    setcurrentStep((prev) => prev + 1);
  };
  const handleBack = (newData) => {
    setdata((prev) => ({ ...prev, ...newData }));
    setcurrentStep((prev) => prev - 1);
  };
  const steps = [
    <StepOneForm key={0} next={handleNext} data={data} />,
    <StepTwoForm key={1} next={handleNext} data={data} back={handleBack} />,
  ];

  return <FormLayout>{steps[currentStep]}</FormLayout>;
};

export default MultiStepTournamentForm;
