/* eslint-disable no-unused-vars */
// /* eslint-disable no-unused-vars */

// import React, { useState } from "react";
// const assistantVideo = require("../video/assistant.mp4").default; // Replace with your video source

// const Assistant = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [position, setPosition] = useState({ top: 0, left: 0 });
//   const [message, setMessage] = useState("");

//   const moveToButton = (button) => {
//     const buttonPosition = button.getBoundingClientRect();
//     setPosition({
//       top: buttonPosition.top - 20 + "px",
//       left: buttonPosition.left - 200 + "px",
//     });
//     setIsVisible(true);
//   };

//   const handleHover = (element) => {
//     if (element.dataset.explanation) {
//       setMessage(element.dataset.explanation);
//       setPosition({
//         top: element.offsetTop - 20 + "px",
//         left: element.offsetLeft - 200 + "px",
//       });
//       setIsVisible(true);
//     }
//   };

//   return (
//     <div
//       className={`assistant ${isVisible ? "visible" : "hidden"}`}
//       style={{ ...position }}
//     >
//       {/* Video element for the assistant */}
//       <video autoPlay loop muted>
//         <source src={assistantVideo} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//       <p>{message}</p>
//     </div>
//   );
// };

// export default Assistant;
// Assistant.jsx
import React, { useState } from "react";
const assistantVideo = require("../video/assistant.mp4").default;

const Assistant = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [message, setMessage] = useState("");

  const moveToButton = (button) => {
    const buttonPosition = button.getBoundingClientRect();
    setPosition({
      top: buttonPosition.top - 20 + "px",
      left: buttonPosition.left - 200 + "px",
    });
    setIsVisible(true);
  };

  const handleHover = (element) => {
    if (element.dataset.explanation) {
      setMessage(element.dataset.explanation);
      setPosition({
        top: element.offsetTop - 20 + "px",
        left: element.offsetLeft - 200 + "px",
      });
      setIsVisible(true);
    }
  };

  return (
    <div
      className={`assistant ${isVisible ? "visible" : "hidden"}`}
      style={{ ...position }}
    >
      {/* Video element for the assistant */}
      <video autoPlay loop muted>
        <source src={assistantVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <p>{message}</p>
    </div>
  );
};

export default Assistant;
