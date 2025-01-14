// import React, { useRef } from 'react'
import { forwardRef, useImperativeHandle, useRef } from "react";
const ResultModal = forwardRef(function ResultModal({result, targetTime} , ref) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
       dialog.current.showModal();
      }
    };
  });

  return ( 
    <dialog ref={dialog} className="result-modal" >
      <h2>Your {result}</h2>
      <p>The target time was<strong>{targetTime} Seconds.</strong></p>
      <p>You stopped the timer with <strong>x second left</strong></p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
    );  
})
export default ResultModal;