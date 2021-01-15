import React from "react";
import style from "./style.module.scss";

interface Props {
  onClick: Function;
}

export const ButtonMinus: React.FunctionComponent<Props> = ({ onClick }) => {
  return (
    <button
      className={style.red}
      onClick={(e) => {
        onClick();
      }}
    >
      <div className={style.minus}>
        <div></div>
      </div>
    </button>
  );
};
export const ButtonPlus: React.FunctionComponent<Props> = ({ onClick }) => {
  return (
    <button
      className={style.green}
      onClick={(e) => {
        onClick();
      }}
    >
      <div className={style.plus}>
        <div></div>
        <div></div>
      </div>
    </button>
  );
};
export const ButtonPlusBig: React.FunctionComponent<Props> = ({ onClick }) => {
  return (
    <button
      className={style.green_big}
      onClick={(e) => {
        onClick();
      }}
    >
      <div className={style.plus}>
        <div></div>
        <div></div>
      </div>
    </button>
  );
};