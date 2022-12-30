import React from "react";
import BackgroundWrapper from "../../components/atoms/BackgroundWrapper";
import Card from "../../components/atoms/Card";


const FormLayout = ({ children }) => {
  return (
    <BackgroundWrapper>
      <div className="c-form">
        <div className="c-form__content">
          <Card>
            <div>{children}</div>
          </Card>
        </div>
      </div>
    </BackgroundWrapper>
  );
};

export default FormLayout;
