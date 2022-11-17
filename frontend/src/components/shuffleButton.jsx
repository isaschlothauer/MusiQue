import React from "react";
import shuffleButton from "./shuffleButton.module.css";

// eslint-disable-next-line react/prop-types
function ShuffleButton({ onClick }) {
  return (
    <div className={shuffleButton.btnContainer}>
      <button
        className={`${shuffleButton.pButtons} ${"pButtons"} ${
          shuffleButton.shuffle
        }`}
        type="button"
        onClick={onClick}
      >
        SHUFFLE
      </button>
    </div>
  );
}

export default ShuffleButton;
