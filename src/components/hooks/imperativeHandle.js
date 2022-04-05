import React from "react";
import { useRef } from "react";

function ImperativeHandle() {
  return (
    <div>
      <button
        onClick={() => {
          buttonRef.current.alterToggle();
        }}
      >
        Button from parent
      </button>
      <button ref={buttonRef} />
    </div>
  );
}
