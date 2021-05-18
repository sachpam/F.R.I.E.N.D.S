import React from "react";
import spinner from "../images/spinner.gif";

const Spinner = () => {
  return (
    <div className="spinner">
      <img
        src={spinner}
        style={{
          margin: "auto",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        alt="Loading"
      />
    </div>
  );
};

export default Spinner;

// import React, { useState, useEffect } from "react";
// import PulseLoader from "react-spinners/PulseLoader";

// const Spinner = () => {
//   const [isLoading, setLoading] = useState(false);

//   useEffect(() => {
//     setLoading(true);
//     setTimeout(() => {
//       setLoading(false);
//     }, 1000);
//   }, []);

//   return (
//     <div>
//       <PulseLoader
//         color={"#36D7B7"}
//         css={`
//           width: 100%;
//           height: 100vh;
//           background-color: #000200;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//         `}
//         isLoading={isLoading}
//         size={30}
//       />
//     </div>
//   );
// };

// export default Spinner;
