import Link from "next/link";
import React from "react";
import BackgroundWrapper from "../../src/components/atoms/BackgroundWrapper";
import Button from "../../src/components/atoms/Button";

const Tournament = () => {
  return (
    <BackgroundWrapper>
      <div style={{ minHeight: "calc(100vh - 136px)", display: "flex", justifyContent:"center", alignItems:"center", gap:"10px"}}>
        
          <Link href="/tournament/createTournament">
            <Button>Crear Torneo </Button>
          </Link>
          <Link href="/tournament/viewTournament">
            <Button>Ver Torneo </Button>
          </Link>
      
      </div>
    </BackgroundWrapper>
  );
};

export default Tournament;
