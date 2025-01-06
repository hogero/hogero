import * as React from "react";

export const Spinner = (props: { message?: string }) => {
  const { message } = props;
  const css = `
        .lds-ring {
            display: inline-block;
            position: relative;
            width: 50px;
            height: 50px;
          }
          .lds-ring div {
            box-sizing: border-box;
            display: block;
            position: absolute;
            width: 35px;
            height: 35px;
            margin: 8px;
            border: 4px solid #000;
            border-radius: 50%;
            animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
            border-color: #000 transparent transparent transparent;
          }
          .lds-ring div:nth-child(1) {
            animation-delay: -0.45s;
          }
          .lds-ring div:nth-child(2) {
            animation-delay: -0.3s;
          }
          .lds-ring div:nth-child(3) {
            animation-delay: -0.15s;
          }
          @keyframes lds-ring {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `
  return (
    <>
      <style>
        {css}
      </style>
      <div style={{
        display: "grid",
        width: "100%",
        justifyContent: "center",
        alignSelf: "center",
        textAlign: "center"
      }}>
        <div id="page-top" className="landing-page">
          <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div>{message}</div>
      </div>
    </>
  );
}
