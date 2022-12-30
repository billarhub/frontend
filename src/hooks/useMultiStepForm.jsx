import { useState } from "react";

export const useMultiStepForm = (steps) => {
  const [currenStepIndex, setcurrenStepIndex] = useState(0);

  const next = () => {
    setcurrenStepIndex((current) => {
      if (current >= steps.length - 1) return current;
      return current + 1;
    });
  };

  const back = () => {
    setcurrenStepIndex((current) => {
      if (current <= 0) return current;
      return current - 1;
    });
  };
  return {
    currenStepIndex,
    step: steps[currenStepIndex],
    isFirstStep: currenStepIndex === 0,
    isLastStep: currenStepIndex === steps.length - 1,
    next,
    back,
  };
};
