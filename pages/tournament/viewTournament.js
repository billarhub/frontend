import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import BackgroundWrapper from "../../src/components/atoms/BackgroundWrapper";
// import BackgroundWrapper from "../../src/components/atoms/BackgroundWrapper";

// if (typeof window !== "undefined" && typeof window.navigator !== "undefined") {
//   import("@g-loot/react-tournament-brackets");
// }

const Match = dynamic(
  async () => {
    return import("@g-loot/react-tournament-brackets").then((mod) => mod.Match);
  },
  { ssr: false }
);
const SingleEliminationBracket = dynamic(
  async () => {
    return import("@g-loot/react-tournament-brackets").then(
      (mod) => mod.SingleEliminationBracket
    );
  },
  { ssr: false }
);
const SVGViewer = dynamic(
  async () => {
    return import("@g-loot/react-tournament-brackets").then(
      (mod) => mod.SVGViewer
    );
  },
  { ssr: false }
);

const ViewTournament = () => {
  const matches = [
    {
      id: 19753,
      nextMatchId: null,
      tournamentRoundText: "3",
      startTime: "2021-05-30",
      state: "SCHEDULED",
      participants: [],
    },
    {
      id: 19754,
      nextMatchId: 19753,
      tournamentRoundText: "2",
      startTime: "2021-05-30",
      state: "SCHEDULED",
      participants: [
        {
          id: "14754a1a-932c-4992-8dec-f7f94a339960",
          resultText: null,
          isWinner: false,
          status: null,
          name: "CoKe BoYz",
          picture: "teamlogos/client_team_default_logo",
        },
      ],
    },
    {
      id: 19755,
      nextMatchId: 19754,
      tournamentRoundText: "1",
      startTime: "2021-05-30",
      state: "SCORE_DONE",
      participants: [
        {
          id: "14754a1a-932c-4992-8dec-f7f94a339960",
          resultText: "Won",
          isWinner: true,
          status: "PLAYED",
          name: "CoKe BoYz",
          picture: "teamlogos/client_team_default_logo",
        },
        {
          id: "d16315d4-7f2d-427b-ae75-63a1ae82c0a8",
          resultText: "Lost",
          isWinner: false,
          status: "PLAYED",
          name: "Aids Team",
          picture: "teamlogos/client_team_default_logo",
        },
      ],
    },
    {
      id: 19756,
      nextMatchId: 19754,
      tournamentRoundText: "1",
      startTime: "2021-05-30",
      state: "RUNNING",
      participants: [
        {
          id: "d8b9f00a-0ffa-4527-8316-da701894768e",
          resultText: null,
          isWinner: false,
          status: null,
          name: "Art of kill",
          picture: "teamlogos/client_team_default_logo",
        },
      ],
    },
    {
      id: 19757,
      nextMatchId: 19753,
      tournamentRoundText: "2",
      startTime: "2021-05-30",
      state: "SCHEDULED",
      participants: [],
    },
    {
      id: 19758,
      nextMatchId: 19757,
      tournamentRoundText: "1",
      startTime: "2021-05-30",
      state: "SCHEDULED",
      participants: [
        {
          id: "9397971f-4b2f-44eb-a094-722eb286c59b",
          resultText: null,
          isWinner: false,
          status: null,
          name: "Crazy Pepes",
          picture: "teamlogos/client_team_default_logo",
        },
      ],
    },
    {
      id: 19759,
      nextMatchId: 19757,
      tournamentRoundText: "1",
      startTime: "2021-05-30",
      state: "SCHEDULED",
      participants: [
        {
          id: "42fecd89-dc83-4821-80d3-718acb50a30c",
          resultText: null,
          isWinner: false,
          status: null,
          name: "BLUEJAYS",
          picture: "teamlogos/client_team_default_logo",
        },
        {
          id: "df01fe2c-18db-4190-9f9e-aa63364128fe",
          resultText: null,
          isWinner: false,
          status: null,
          name: "Bosphorus",
          picture: "teamlogos/r7zn4gr8eajivapvjyzd",
        },
      ],
    },
  ];
  function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
    useEffect(() => {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      // Add event listener
      window.addEventListener("resize", handleResize);
      // Call handler right away so state gets updated with initial window size
      handleResize();
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
  }

  const size = useWindowSize();
  const finalWidth = Math.max(size.width - 50, 500);
  const finalHeight = Math.max(size.height - 136 , 500);
  return (
    <BackgroundWrapper>
      <div style={{ minHeight: "calc(100vh - 136px)", display: "flex", justifyContent:"center", alignItems:"center", gap:"10px"}}>

      <SingleEliminationBracket
        matches={matches}
        matchComponent={Match}
        svgWrapper={({ children, ...props }) => (
          <SVGViewer
          width={finalWidth}
          height={finalHeight}
          {...props}
          background={"#000000"}
          SVGBackground={"#000000"}
          >
            {children}
          </SVGViewer>
        )}
        />
        </div>
    </BackgroundWrapper>
  );
};

export default ViewTournament;
