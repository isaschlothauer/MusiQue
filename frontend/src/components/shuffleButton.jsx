import React from "react";
import shuffleButton from "./shuffleButton.module.css";

function ShuffleButton() {
  return (
    <div className={shuffleButton.btnContainer}>
      <button
        className={`${shuffleButton.pButtons} ${"pButtons"}`}
        type="button"
      >
        SHUFFLE
      </button>
    </div>
  );
}

export default ShuffleButton;
