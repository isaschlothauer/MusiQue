import React from "react";
import shuffleButton from "./shuffleButton.module.css";
import btnStyles from "./Button.module.css";

// eslint-disable-next-line react/prop-types
function ShuffleButton({ onClick }) {
  return (
    <div className={shuffleButton.btnContainer}>
      <button
        className={`${btnStyles.btn} ${"pButtons"} ${shuffleButton.shuffle}`}
        type="button"
        onClick={onClick}
      >
        SHUFFLE
      </button>
    </div>
  );
}

export default ShuffleButton;
