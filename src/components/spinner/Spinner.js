import "./spinner.css";

const Spinner = () => (
  <div className="backfall-spinner">
    <div className="loading component-loader">
      <div className="effect-1 effects" />
      <div className="effect-2 effects" />
      <div className="effect-3 effects" />
    </div>
  </div>
);
export default Spinner;


// import React from 'react';

// const Spinner = () => {
//   return (
//     <div style={{ textAlign: 'center', padding: '20px' }}>
//       <h2>Loading...</h2>
//     </div>
//   );
// };

// export default Spinner;
